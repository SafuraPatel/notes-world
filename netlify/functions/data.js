/**
 * NETLIFY SERVERLESS FUNCTION: /api/data
 * Shared multi-device cloud persistence using Netlify Blobs.
 * Stores shared Theory topics, Tricks, and Notepad points for Paper 1 and Paper 2.
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
        body: JSON.stringify({ success: false, message: "Specify ?paper=paper1 or ?type=notes" })
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

      if (body.type === "notes") {
        if (blobStore) {
          await blobStore.setJSON("shared_notes", body.notes);
        } else {
          memoryStore.set("shared_notes", body.notes);
        }
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, message: "Notes saved to Cloud DB" })
        };
      }

      if (body.paperId && body.data) {
        const key = `paper_data_${body.paperId}`;
        if (blobStore) {
          await blobStore.setJSON(key, body.data);
        } else {
          memoryStore.set(key, body.data);
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
