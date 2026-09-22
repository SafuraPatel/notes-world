/**
 * NETLIFY SERVERLESS FUNCTION: /api/data
 * Shared multi-device cloud persistence using Netlify Blobs.
 * Stores shared Theory topics, Tricks, Notepad points, Recycle Bin, and Tombstones.
 */

let getStore;
try {
  ({ getStore } = require("@netlify/blobs"));
} catch (e) {
  // If @netlify/blobs is not installed locally, fallback to in-memory store
  console.warn("Netlify Blobs not available in current environment, using memory store.");
}

const memoryStore = new Map();

async function getBlobStore() {
  if (getStore) {
    try {
      return getStore({ name: "notes_world_cloud_db", consistency: "strong" });
    } catch (e) {
      try {
        return getStore("notes_world_cloud_db");
      } catch (err2) {
        console.warn("Could not initialize Netlify Blob store:", err2);
      }
    }
  }
  return null;
}

async function getTombstoneSet(blobStore) {
  const deletedSet = new Set();
  try {
    // 1. Load tombstones
    let rawTomb = null;
    if (blobStore) {
      rawTomb = await blobStore.get("deleted_tombstones", { type: "json" });
    } else {
      rawTomb = memoryStore.get("deleted_tombstones") || null;
    }
    if (Array.isArray(rawTomb)) {
      rawTomb.forEach(t => {
        if (t) deletedSet.add(String(t).trim().toLowerCase());
      });
    }

    // 2. Load recycle bin items
    let rawBin = null;
    if (blobStore) {
      rawBin = await blobStore.get("recycle_bin", { type: "json" });
    } else {
      rawBin = memoryStore.get("recycle_bin") || null;
    }
    if (Array.isArray(rawBin)) {
      rawBin.forEach(item => {
        if (item.originalId) deletedSet.add(String(item.originalId).toLowerCase());
        if (item.id) deletedSet.add(String(item.id).toLowerCase());
        if (item.data && item.data.id) deletedSet.add(String(item.data.id).toLowerCase());
        if (item.title) {
          const tClean = String(item.title).trim().toLowerCase();
          deletedSet.add(tClean);
          const p = item.paper || "paper1";
          deletedSet.add(`${p}_${tClean}`);
        }
      });
    }
  } catch (err) {
    console.warn("Error building tombstone set:", err);
  }
  return deletedSet;
}

exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Cache-Control",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
  };

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  const blobStore = await getBlobStore();
  const query = event.queryStringParameters || {};

  // GET: Fetch shared data
  if (event.httpMethod === "GET") {
    try {
      const type = query.type;
      const paper = query.paper;

      if (type === "tombstones") {
        let tombData = null;
        if (blobStore) {
          tombData = await blobStore.get("deleted_tombstones", { type: "json" });
        } else {
          tombData = memoryStore.get("deleted_tombstones") || [];
        }
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, tombstones: tombData || [] })
        };
      }

      if (type === "notes") {
        let notesData = null;
        if (blobStore) {
          notesData = await blobStore.get("shared_notes", { type: "json" });
        } else {
          notesData = memoryStore.get("shared_notes") || null;
        }
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, notes: notesData })
        };
      }

      if (type === "bin") {
        let binData = null;
        if (blobStore) {
          binData = await blobStore.get("recycle_bin", { type: "json" });
        } else {
          binData = memoryStore.has("recycle_bin") ? memoryStore.get("recycle_bin") : null;
        }
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, bin: binData })
        };
      }

      if (type === "syllabus") {
        let syllabusData = null;
        if (blobStore) {
          syllabusData = await blobStore.get("syllabus_progress", { type: "json" });
        } else {
          syllabusData = memoryStore.has("syllabus_progress") ? memoryStore.get("syllabus_progress") : null;
        }
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, syllabus: syllabusData })
        };
      }

      if (paper === "paper1" || paper === "paper2") {
        let paperData = null;
        if (blobStore) {
          paperData = await blobStore.get(`paper_data_${paper}`, { type: "json" });
        } else {
          paperData = memoryStore.get(`paper_data_${paper}`) || null;
        }
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, data: paperData })
        };
      }

      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, message: "Specify ?paper=paper1, ?type=notes, ?type=bin, ?type=tombstones, or ?type=syllabus" })
      };
    } catch (err) {
      console.error("GET Error:", err);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ success: false, error: err.message })
      };
    }
  }

  // POST: Update shared data
  if (event.httpMethod === "POST") {
    try {
      const body = JSON.parse(event.body || "{}");

      if (body.type === "tombstones") {
        const incoming = Array.isArray(body.tombstones) ? body.tombstones : [];
        let existing = [];
        if (blobStore) {
          existing = (await blobStore.get("deleted_tombstones", { type: "json" })) || [];
        } else {
          existing = memoryStore.get("deleted_tombstones") || [];
        }
        const mergedSet = new Set([...existing, ...incoming]);
        const finalTombstones = Array.from(mergedSet);
        if (blobStore) {
          await blobStore.setJSON("deleted_tombstones", finalTombstones);
        } else {
          memoryStore.set("deleted_tombstones", finalTombstones);
        }
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, message: "Tombstones saved to Cloud DB", count: finalTombstones.length })
        };
      }

      if (body.type === "notes") {
        let notesToSave = Array.isArray(body.notes) ? body.notes : [];
        const deletedSet = await getTombstoneSet(blobStore);
        notesToSave = notesToSave.filter(n => {
          if (!n) return false;
          if (n.id && deletedSet.has(String(n.id).toLowerCase())) return false;
          if (n.title && deletedSet.has(String(n.title).trim().toLowerCase())) return false;
          return true;
        });

        if (blobStore) {
          await blobStore.setJSON("shared_notes", notesToSave);
        } else {
          memoryStore.set("shared_notes", notesToSave);
        }
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, message: "Notes saved to Cloud DB" })
        };
      }

      if (body.type === "bin") {
        const binList = Array.isArray(body.bin) ? body.bin : [];
        if (blobStore) {
          await blobStore.setJSON("recycle_bin", binList);
        } else {
          memoryStore.set("recycle_bin", binList);
        }

        // Keep tombstones in sync with bin items
        try {
          let existingTomb = [];
          if (blobStore) {
            existingTomb = (await blobStore.get("deleted_tombstones", { type: "json" })) || [];
          } else {
            existingTomb = memoryStore.get("deleted_tombstones") || [];
          }
          const tombSet = new Set(existingTomb);
          binList.forEach(it => {
            if (it.originalId) tombSet.add(String(it.originalId).toLowerCase());
            if (it.id) tombSet.add(String(it.id).toLowerCase());
            if (it.data && it.data.id) tombSet.add(String(it.data.id).toLowerCase());
            if (it.title) {
              const tClean = String(it.title).trim().toLowerCase();
              tombSet.add(tClean);
              const p = it.paper || "paper1";
              tombSet.add(`${p}_${tClean}`);
            }
          });
          const updatedTomb = Array.from(tombSet);
          if (blobStore) {
            await blobStore.setJSON("deleted_tombstones", updatedTomb);
          } else {
            memoryStore.set("deleted_tombstones", updatedTomb);
          }
        } catch (_) {}

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, message: "Recycle bin saved to Cloud DB" })
        };
      }

      if (body.type === "syllabus") {
        if (blobStore) {
          await blobStore.setJSON("syllabus_progress", body.syllabus);
        } else {
          memoryStore.set("syllabus_progress", body.syllabus);
        }
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, message: "Syllabus progress saved to Cloud DB" })
        };
      }

      if (body.paperId && body.data) {
        const key = `paper_data_${body.paperId}`;
        let finalData = body.data;

        // Server-Side Tombstone Protection:
        // Ensure that no trick or theory note currently in tombstones or bin gets resurrected
        const deletedSet = await getTombstoneSet(blobStore);
        if (deletedSet.size > 0 && finalData && Array.isArray(finalData.units)) {
          finalData.units.forEach(u => {
            if (u.shortTricks && Array.isArray(u.shortTricks)) {
              u.shortTricks = u.shortTricks.filter(t => {
                if (!t) return false;
                if (t.id && deletedSet.has(String(t.id).toLowerCase())) return false;
                if (t.title) {
                  const tClean = String(t.title).trim().toLowerCase();
                  if (deletedSet.has(tClean)) return false;
                  if (deletedSet.has(`${body.paperId}_${tClean}`)) return false;
                }
                return true;
              });
            }
            if (u.theoryNotes && Array.isArray(u.theoryNotes)) {
              u.theoryNotes = u.theoryNotes.filter(t => {
                if (!t) return false;
                if (t.id && deletedSet.has(String(t.id).toLowerCase())) return false;
                if (t.title) {
                  const tClean = String(t.title).trim().toLowerCase();
                  if (deletedSet.has(tClean)) return false;
                  if (deletedSet.has(`${body.paperId}_${tClean}`)) return false;
                }
                return true;
              });
            }
          });
        }

        if (blobStore) {
          await blobStore.setJSON(key, finalData);
        } else {
          memoryStore.set(key, finalData);
        }
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, message: `${body.paperId} saved to Cloud DB` })
        };
      }

      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, message: "Invalid payload" })
      };
    } catch (err) {
      console.error("POST Error:", err);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ success: false, error: err.message })
      };
    }
  }

  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ success: false, message: "Method not allowed" })
  };
};
