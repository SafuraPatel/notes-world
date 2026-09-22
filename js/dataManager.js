/**
 * DATA MANAGER - Notes World
 * Manages Paper 1 and Paper 2 Theory and Tricks data.
 * Supports real-time Editing, Deleting, and Adding custom topics/tricks.
 * Dual-sync: LocalStorage for instant rendering + Netlify Cloud DB (/api/data) for multi-device sync!
 */

import { paper1Data as defaultP1 } from "./data/paper1Data.js";
import { paper2Data as defaultP2 } from "./data/paper2Data.js";
import { binManager } from "./binManager.js";

const STORAGE_KEY_P1 = "notes_world_data_p1_v5";
const STORAGE_KEY_P2 = "notes_world_data_p2_v5";

// --- FUZZY TOPIC SIMILARITY DETECTION ---

const TOPIC_STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "of", "in", "on", "at", "to", "for", "with",
  "by", "from", "as", "is", "are", "was", "were", "be", "been", "being",
  "vs", "versus", "about", "into", "through", "during", "before", "after",
  "above", "below", "under", "up", "down", "out", "off", "over", "their",
  "its", "it", "this", "that", "these", "those"
]);

export function stemWord(word) {
  if (!word || word.length <= 3) return word;
  let w = word.toLowerCase();
  if (w.endsWith("ies") && w.length > 4) return w.slice(0, -3) + "y";
  if (w.endsWith("es") && w.length > 4) return w.slice(0, -2);
  if (w.endsWith("s") && !w.endsWith("ss") && w.length > 3) return w.slice(0, -1);
  if (w.endsWith("ing") && w.length > 5) return w.slice(0, -3);
  if (w.endsWith("ed") && w.length > 4) return w.slice(0, -2);
  if (w.endsWith("tion") && w.length > 5) return w.slice(0, -4);
  return w;
}

export function extractStemmedKeywords(str) {
  if (!str) return [];
  const clean = str.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  return clean.split(/\s+/)
    .filter(w => w.length > 1 && !TOPIC_STOP_WORDS.has(w))
    .map(stemWord);
}

function getBigrams(str) {
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const bigrams = new Set();
  for (let i = 0; i < s.length - 1; i++) {
    bigrams.add(s.substring(i, i + 2));
  }
  return bigrams;
}

function calculateDiceSimilarity(str1, str2) {
  const b1 = getBigrams(str1);
  const b2 = getBigrams(str2);
  if (b1.size === 0 || b2.size === 0) return 0;
  let intersection = 0;
  b1.forEach(bg => {
    if (b2.has(bg)) intersection++;
  });
  return (2 * intersection) / (b1.size + b2.size);
}

export function checkTopicTitleSimilarity(titleA, titleB) {
  if (!titleA || !titleB) return { isSimilar: false, score: 0 };
  const cleanA = titleA.trim().toLowerCase();
  const cleanB = titleB.trim().toLowerCase();

  // 1. Exact string match
  if (cleanA === cleanB) {
    return { isSimilar: true, score: 1.0, reason: "exact" };
  }

  // 2. Normalized match (punctuation & extra spaces stripped)
  const normA = cleanA.replace(/[^a-z0-9]/g, " ").replace(/\s+/g, " ").trim();
  const normB = cleanB.replace(/[^a-z0-9]/g, " ").replace(/\s+/g, " ").trim();
  if (normA === normB && normA.length > 0) {
    return { isSimilar: true, score: 0.98, reason: "normalized" };
  }

  const wordsA = Array.from(new Set(extractStemmedKeywords(cleanA)));
  const wordsB = Array.from(new Set(extractStemmedKeywords(cleanB)));
  if (wordsA.length === 0 || wordsB.length === 0) return { isSimilar: false, score: 0 };

  // 3. Single-word identical topic
  if (wordsA.length === 1 && wordsB.length === 1 && wordsA[0] === wordsB[0]) {
    return { isSimilar: true, score: 0.95, reason: "single_keyword" };
  }

  // 4. Token Jaccard & Containment
  const setA = new Set(wordsA);
  const setB = new Set(wordsB);
  let commonCount = 0;
  setA.forEach(w => {
    if (setB.has(w)) commonCount++;
  });

  const unionCount = setA.size + setB.size - commonCount;
  const jaccard = unionCount > 0 ? commonCount / unionCount : 0;
  const containmentA = commonCount / setA.size;
  const containmentB = commonCount / setB.size;

  // High token Jaccard (e.g. >= 0.60, or words reordered: "Memory Hierarchy" vs "Hierarchy of Memory" = 1.0!)
  if (jaccard >= 0.60) {
    return { isSimilar: true, score: jaccard, reason: "word_overlap" };
  }

  // Key concept containment: >= 75% of one title's keywords are present in the other with at least 2 terms matching
  if (commonCount >= 2 && (containmentA >= 0.75 || containmentB >= 0.75)) {
    return { isSimilar: true, score: Math.max(containmentA, containmentB), reason: "concept_containment" };
  }

  // 5. Character Bigram Dice Coefficient (catches typos like "Heirarchy" vs "Hierarchy")
  const dice = calculateDiceSimilarity(normA, normB);
  if (dice >= 0.75) {
    return { isSimilar: true, score: dice, reason: "character_fuzzy" };
  }

  return { isSimilar: false, score: Math.max(jaccard, dice) };
}

export class DataManager {
  constructor() {
    this.data = {
      paper1: this.initPaperData("paper1", STORAGE_KEY_P1, defaultP1),
      paper2: this.initPaperData("paper2", STORAGE_KEY_P2, defaultP2)
    };
    this.listeners = [];

    // Fast non-blocking startup sync
    setTimeout(() => {
      this.syncFromCloud(true);
      this.setupBackgroundSync();
    }, 100);
  }

  purgeDeletedItems() {
    let anyChanged = false;
    for (const paperId of ["paper1", "paper2"]) {
      const paper = this.data[paperId];
      if (!paper || !paper.units) continue;
      let paperChanged = false;
      paper.units.forEach(u => {
        if (u.shortTricks && Array.isArray(u.shortTricks)) {
          const initLen = u.shortTricks.length;
          u.shortTricks = u.shortTricks.filter(t => !binManager.isDeleted(paperId, t.id, t.title));
          if (u.shortTricks.length !== initLen) paperChanged = true;
        }
        if (u.theoryNotes && Array.isArray(u.theoryNotes)) {
          const initLen = u.theoryNotes.length;
          u.theoryNotes = u.theoryNotes.filter(t => !binManager.isDeleted(paperId, t.id, t.title));
          if (u.theoryNotes.length !== initLen) paperChanged = true;
        }
      });
      if (paperChanged) {
        const storageKey = paperId === "paper1" ? STORAGE_KEY_P1 : STORAGE_KEY_P2;
        localStorage.setItem(storageKey, JSON.stringify(paper));
        anyChanged = true;
      }
    }
    if (anyChanged) {
      this.notify();
    }
    return anyChanged;
  }

  setupBackgroundSync() {
    // Fast active polling (every 15s) when window/tab is visible
    setInterval(() => {
      if (document.visibilityState === "visible" && navigator.onLine) {
        this.syncFromCloud(false);
      }
    }, 15000);

    // Immediate sync on tab visibility or window focus
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && navigator.onLine) {
        this.syncFromCloud(true);
      }
    });
    window.addEventListener("focus", () => {
      if (navigator.onLine) {
        this.syncFromCloud(true);
      }
    });
  }

  deduplicatePaperUnits(paperObj) {
    if (!paperObj || !paperObj.units) return 0;
    const seenIds = new Set();

    // Data Safety Guarantee: NEVER delete any user topics or tricks automatically!
    paperObj.units.forEach(unit => {
      if (unit.theoryNotes && Array.isArray(unit.theoryNotes)) {
        unit.theoryNotes.forEach((t, idx) => {
          if (!t.id || seenIds.has(t.id)) {
            t.id = `${unit.id}_theory_${idx}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
          }
          seenIds.add(t.id);
        });
      }

      if (unit.shortTricks && Array.isArray(unit.shortTricks)) {
        unit.shortTricks.forEach((tr, idx) => {
          if (!tr.id || seenIds.has(tr.id)) {
            tr.id = `${unit.id}_trick_${idx}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
          }
          seenIds.add(tr.id);
        });
      }
    });
    return 0;
  }

  ensureGeneralUnit(paperObj) {
    if (!paperObj || !paperObj.units) return null;
    let genUnit = paperObj.units.find(u => u.id === "general");
    if (!genUnit) {
      genUnit = {
        id: "general",
        unitNumber: "📌",
        name: "General Points",
        icon: "📌",
        theoryNotes: [],
        shortTricks: []
      };
      paperObj.units.push(genUnit);
    }
    return genUnit;
  }

  initPaperData(paperId, storageKey, defaultData) {
    const pSuffix = paperId === "paper1" ? "p1" : "p2";
    // Check all historical and backup storage keys for any user-added topics
    const candidateKeys = [
      storageKey,
      `${storageKey}_backup`,
      `notes_world_data_${pSuffix}_v5`,
      `notes_world_data_${pSuffix}_v5_backup`,
      `notes_world_data_${pSuffix}_v4`,
      `notes_world_data_${pSuffix}_v3`,
      `notes_world_data_${pSuffix}_v2`,
      `notes_world_data_${pSuffix}_v1`,
      `notes_world_data_${pSuffix}`,
      `notes_world_${paperId}`
    ];

    let baseData = null;
    const allKnownTricks = new Map();

    for (const key of candidateKeys) {
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.units && Array.isArray(parsed.units) && parsed.units.length > 0) {
            if (!baseData) {
              baseData = parsed;
            }
            parsed.units.forEach(u => {
              if (u.shortTricks && Array.isArray(u.shortTricks)) {
                u.shortTricks.forEach(tr => {
                  if (tr && tr.title) {
                    if (binManager.isDeleted(paperId, tr.id, tr.title)) return;
                    const cleanKey = (tr.title || "").trim().toLowerCase();
                    if (!allKnownTricks.has(cleanKey)) {
                      allKnownTricks.set(cleanKey, { unitId: u.id, trick: tr });
                    }
                  }
                });
              }
            });
          }
        }
      } catch (e) {}
    }

    if (!baseData) {
      baseData = JSON.parse(JSON.stringify(defaultData));
    }

    // Filter out any previously deleted items from baseData
    baseData.units.forEach(u => {
      if (u.shortTricks && Array.isArray(u.shortTricks)) {
        u.shortTricks = u.shortTricks.filter(tr => !binManager.isDeleted(paperId, tr.id, tr.title));
      }
      if (u.theoryNotes && Array.isArray(u.theoryNotes)) {
        u.theoryNotes = u.theoryNotes.filter(tn => !binManager.isDeleted(paperId, tn.id, tn.title));
      }
    });

    this.ensureGeneralUnit(baseData);

    // Make sure all default units exist & unit names are canonical
    defaultData.units.forEach(defU => {
      let existingU = baseData.units.find(u => u.id === defU.id);
      if (!existingU) {
        existingU = JSON.parse(JSON.stringify(defU));
        baseData.units.push(existingU);
      } else {
        if (defU.name) existingU.name = defU.name;
      }
    });

    // Ensure all default tricks are present (unless deleted by user)
    defaultData.units.forEach(defU => {
      const targetU = baseData.units.find(u => u.id === defU.id);
      if (targetU && defU.shortTricks) {
        if (!targetU.shortTricks) targetU.shortTricks = [];
        const existingTrickTitles = new Set(targetU.shortTricks.map(t => (t.title || "").trim().toLowerCase()));
        defU.shortTricks.forEach(dt => {
          const dtTitle = (dt.title || "").trim().toLowerCase();
          if (binManager.isDeleted(paperId, dt.id, dt.title)) return;
          if (!existingTrickTitles.has(dtTitle)) {
            targetU.shortTricks.push(JSON.parse(JSON.stringify(dt)));
            existingTrickTitles.add(dtTitle);
          }
        });
      }
    });

    // Merge any user-added custom tricks and preserve user modifications from historical localStorage keys
    allKnownTricks.forEach(({ unitId, trick }) => {
      if (binManager.isDeleted(paperId, trick.id, trick.title)) return;
      let targetUnit = baseData.units.find(u => u.id === unitId);
      if (!targetUnit) targetUnit = baseData.units.find(u => u.id === "general") || baseData.units[0];
      if (!targetUnit.shortTricks) targetUnit.shortTricks = [];
      const trTitle = (trick.title || "").trim().toLowerCase();
      const existing = targetUnit.shortTricks.find(t => (t.title || "").trim().toLowerCase() === trTitle || (trick.id && t.id === trick.id));
      if (!existing) {
        targetUnit.shortTricks.unshift(trick);
      } else {
        // Retain user's custom edits over factory defaults!
        if (trick.lightbulb && trick.lightbulb !== existing.lightbulb) existing.lightbulb = trick.lightbulb;
        if (trick.mnemonic && trick.mnemonic !== existing.mnemonic) existing.mnemonic = trick.mnemonic;
        if (trick.explanation && trick.explanation !== existing.explanation) existing.explanation = trick.explanation;
        if (trick.proTip && trick.proTip !== existing.proTip) existing.proTip = trick.proTip;
      }
    });

    // Assign IDs to every trick missing an ID
    baseData.units.forEach((unit, uIdx) => {
      if (unit.shortTricks) {
        unit.shortTricks.forEach((tr, trIdx) => {
          if (!tr.id) {
            tr.id = `${unit.id}_trick_${trIdx}_${Date.now()}`;
          }
        });
      }
    });

    this.deduplicatePaperUnits(baseData);

    try {
      localStorage.setItem(storageKey, JSON.stringify(baseData));
    } catch (e) {
      console.warn(`Could not save initial ${paperId} data:`, e);
    }
    return baseData;
  }

  safeMergePaperData(localPaper, cloudPaper, paperId = "paper1") {
    if (!cloudPaper || !cloudPaper.units) return localPaper;
    if (!localPaper || !localPaper.units) return cloudPaper;

    // Filter out any deleted items from localPaper
    localPaper.units.forEach(u => {
      if (u.shortTricks && Array.isArray(u.shortTricks)) {
        u.shortTricks = u.shortTricks.filter(t => !binManager.isDeleted(paperId, t.id, t.title));
      }
      if (u.theoryNotes && Array.isArray(u.theoryNotes)) {
        u.theoryNotes = u.theoryNotes.filter(t => !binManager.isDeleted(paperId, t.id, t.title));
      }
    });

    cloudPaper.units.forEach(cloudUnit => {
      let localUnit = localPaper.units.find(u => u.id === cloudUnit.id);
      if (!localUnit) {
        localPaper.units.push(cloudUnit);
        return;
      }

      // Merge shortTricks (Topics):
      if (cloudUnit.shortTricks && Array.isArray(cloudUnit.shortTricks)) {
        if (!localUnit.shortTricks) localUnit.shortTricks = [];

        // 1. Ingest cloud tricks & sync edits
        cloudUnit.shortTricks.forEach(ct => {
          if (!ct || binManager.isDeleted(paperId, ct.id, ct.title)) return;
          const tClean = (ct.title || "").trim().toLowerCase();
          const existing = localUnit.shortTricks.find(lt => (ct.id && lt.id === ct.id) || (lt.title && lt.title.trim().toLowerCase() === tClean));
          if (!existing) {
            localUnit.shortTricks.push(ct);
          } else {
            // Bi-directional edit sync: update local fields if cloud version has edits or content changed
            const cloudTime = new Date(ct.updatedAt || ct.createdAt || 0).getTime();
            const localTime = new Date(existing.updatedAt || existing.createdAt || 0).getTime();
            const contentChanged = (
              (ct.explanation && ct.explanation !== existing.explanation) ||
              (ct.mnemonic && ct.mnemonic !== existing.mnemonic) ||
              (ct.lightbulb && ct.lightbulb !== existing.lightbulb) ||
              (ct.proTip && ct.proTip !== existing.proTip) ||
              (ct.title && ct.title !== existing.title)
            );
            if (cloudTime > localTime || contentChanged || !existing.updatedAt) {
              if (ct.mnemonic !== undefined) existing.mnemonic = ct.mnemonic;
              if (ct.explanation !== undefined) existing.explanation = ct.explanation;
              if (ct.proTip !== undefined) existing.proTip = ct.proTip;
              if (ct.lightbulb !== undefined) existing.lightbulb = ct.lightbulb;
              if (ct.title && ct.title !== existing.title) existing.title = ct.title;
              if (ct.updatedAt) existing.updatedAt = ct.updatedAt;
              existing.isCustom = true;
            }
          }
        });

        // 2. Clean localUnit: remove factory defaults deleted on other devices
        const cloudTrickIds = new Set(cloudUnit.shortTricks.map(t => t.id));
        const cloudTrickTitles = new Set(cloudUnit.shortTricks.map(t => (t.title || "").trim().toLowerCase()));
        localUnit.shortTricks = localUnit.shortTricks.filter(lt => {
          if (binManager.isDeleted(paperId, lt.id, lt.title)) return false;
          const isCustom = lt.isCustom || (lt.id && String(lt.id).includes("custom"));
          if (isCustom) return true;
          return (lt.id && cloudTrickIds.has(lt.id)) || (lt.title && cloudTrickTitles.has((lt.title || "").trim().toLowerCase()));
        });
      }

      // Merge theoryNotes:
      if (cloudUnit.theoryNotes && Array.isArray(cloudUnit.theoryNotes)) {
        if (!localUnit.theoryNotes) localUnit.theoryNotes = [];

        cloudUnit.theoryNotes.forEach(ct => {
          if (!ct || binManager.isDeleted(paperId, ct.id, ct.title)) return;
          const tClean = (ct.title || "").trim().toLowerCase();
          const existing = localUnit.theoryNotes.find(lt => (ct.id && lt.id === ct.id) || (lt.title && lt.title.trim().toLowerCase() === tClean));
          if (!existing) {
            localUnit.theoryNotes.push(ct);
          } else {
            const cloudTime = new Date(ct.updatedAt || ct.createdAt || 0).getTime();
            const localTime = new Date(existing.updatedAt || existing.createdAt || 0).getTime();
            const contentChanged = (
              (ct.content && ct.content !== existing.content) ||
              (ct.title && ct.title !== existing.title) ||
              (ct.diagram && ct.diagram !== existing.diagram)
            );
            if (cloudTime > localTime || contentChanged || !existing.updatedAt) {
              if (ct.points !== undefined) existing.points = ct.points;
              if (ct.content !== undefined) existing.content = ct.content;
              if (ct.mindMap !== undefined) existing.mindMap = ct.mindMap;
              if (ct.diagram !== undefined) existing.diagram = ct.diagram;
              if (ct.title && ct.title !== existing.title) existing.title = ct.title;
              if (ct.updatedAt) existing.updatedAt = ct.updatedAt;
              existing.isCustom = true;
            }
          }
        });

        const cloudTheoryIds = new Set(cloudUnit.theoryNotes.map(t => t.id));
        const cloudTheoryTitles = new Set(cloudUnit.theoryNotes.map(t => (t.title || "").trim().toLowerCase()));
        localUnit.theoryNotes = localUnit.theoryNotes.filter(lt => {
          if (binManager.isDeleted(paperId, lt.id, lt.title)) return false;
          const isCustom = lt.isCustom || (lt.id && String(lt.id).includes("custom"));
          if (isCustom) return true;
          return (lt.id && cloudTheoryIds.has(lt.id)) || (lt.title && cloudTheoryTitles.has((lt.title || "").trim().toLowerCase()));
        });
      }
    });

    return localPaper;
  }

  async syncFromCloud(force = false) {
    if (this._isSyncing) return false;
    const now = Date.now();
    if (!force && this._lastSyncTime && (now - this._lastSyncTime < 3000)) {
      return false; // Responsive 3s throttle
    }
    this._isSyncing = true;
    try {
      let hasUpdate = false;
      for (const paperId of ["paper1", "paper2"]) {
        const res = await fetch(`/api/data?paper=${paperId}&_t=${Date.now()}`, {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache", "Pragma": "no-cache" }
        });
        if (res.ok) {
          const json = await res.json();
          if (json && json.success) {
            if (json.data && json.data.units) {
              this.ensureGeneralUnit(json.data);
              const defData = paperId === "paper1" ? defaultP1 : defaultP2;
              let namesUpdated = false;
              json.data.units.forEach(u => {
                const defU = defData.units.find(du => du.id === u.id);
                if (defU && defU.name && u.name !== defU.name) {
                  u.name = defU.name;
                  namesUpdated = true;
                }
              });

              // Lossless merge: keep local additions so cloud responses NEVER erase user data
              const merged = this.safeMergePaperData(this.data[paperId], json.data, paperId);
              this.deduplicatePaperUnits(merged);

              const currentStr = JSON.stringify(this.data[paperId]);
              const mergedStr = JSON.stringify(merged);
              if (currentStr !== mergedStr || namesUpdated) {
                this.data[paperId] = merged;
                const storageKey = paperId === "paper1" ? STORAGE_KEY_P1 : STORAGE_KEY_P2;
                localStorage.setItem(storageKey, mergedStr);
                hasUpdate = true;
                this.syncToCloud(paperId);
              }
            } else if (json.data === null) {
              // Cloud DB is not initialized for this paper yet, seed it from local
              this.syncToCloud(paperId);
            }
          }
        }
      }
      if (hasUpdate) {
        this.notify();
        return true;
      }
    } catch (e) {
      // Offline fallback: continue using localStorage
    } finally {
      this._lastSyncTime = Date.now();
      this._isSyncing = false;
    }
    return false;
  }

  async syncToCloud(paperId) {
    try {
      await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify({ paperId, data: this.data[paperId] })
      });
    } catch (e) {
      // Offline fallback: saved in localStorage
    }
  }

  savePaperData(paperId) {
    const storageKey = paperId === "paper1" ? STORAGE_KEY_P1 : STORAGE_KEY_P2;
    try {
      const dataStr = JSON.stringify(this.data[paperId]);
      // Rolling safety snapshot backup
      localStorage.setItem(`${storageKey}_backup`, dataStr);
      localStorage.setItem(storageKey, dataStr);
      this.notify();
      this.syncToCloud(paperId);
    } catch (e) {
      console.error(`Error saving ${paperId}:`, e);
    }
  }

  getPaperData(paperId) {
    return this.data[paperId];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(cb => cb(this.data));
  }

  // --- THEORY TOPIC ACTIONS ---

  addTheoryTopic(paperId, unitId, { title, points, content, mindMap }) {
    if (!title || !title.trim()) return null;
    const cleanTitle = title.trim();

    // Prevent duplicate topic titles within the same paper
    const existing = this.findTheoryTopicByTitle(paperId, cleanTitle);
    if (existing) {
      console.warn(`Duplicate topic title blocked: "${cleanTitle}" already exists in ${existing.unit.name}`);
      return null;
    }

    const paper = this.data[paperId];
    this.ensureGeneralUnit(paper);
    const unit = paper.units.find(u => u.id === unitId) || paper.units[0];
    if (!unit.theoryNotes) unit.theoryNotes = [];

    const newTopic = {
      id: `custom_theory_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      title: cleanTitle,
      points: points ? (Array.isArray(points) ? points.map(p => p.trim()).filter(Boolean) : [points]) : [],
      content: content || "",
      mindMap: mindMap || null
    };

    unit.theoryNotes.unshift(newTopic);
    this.savePaperData(paperId);
    return newTopic;
  }

  updateTheoryTopic(paperId, topicId, { unitId, title, points, content, mindMap, diagram }) {
    const paper = this.data[paperId];
    if (!paper || !paper.units) return null;
    this.ensureGeneralUnit(paper);

    // Check duplicate if title is provided
    if (title && title.trim()) {
      const existing = this.findTheoryTopicByTitle(paperId, title.trim(), topicId);
      if (existing) {
        console.warn(`Cannot update to duplicate topic title: "${title.trim()}" (exists in ${existing.unit.name})`);
        return null;
      }
    }

    for (let uIdx = 0; uIdx < paper.units.length; uIdx++) {
      const unit = paper.units[uIdx];
      if (unit.theoryNotes) {
        const tIdx = unit.theoryNotes.findIndex(t => t.id === topicId);
        if (tIdx !== -1) {
          const topic = unit.theoryNotes[tIdx];
          if (title !== undefined) topic.title = title.trim();
          if (points !== undefined) {
            topic.points = Array.isArray(points) ? points.map(p => p.trim()).filter(Boolean) : (points ? [points] : []);
          }
          if (content !== undefined) topic.content = content;
          if (mindMap !== undefined) topic.mindMap = mindMap;
          if (diagram !== undefined) topic.diagram = diagram;

          // Check if user changed the unit while editing!
          if (unitId && unitId !== unit.id) {
            const targetUnit = paper.units.find(u => u.id === unitId);
            if (targetUnit) {
              // Remove topic from old unit
              unit.theoryNotes.splice(tIdx, 1);
              // Add topic to new unit at top
              if (!targetUnit.theoryNotes) targetUnit.theoryNotes = [];
              targetUnit.theoryNotes.unshift(topic);
            }
          }

          topic.updatedAt = new Date().toISOString();
          this.savePaperData(paperId);
          return topic;
        }
      }
    }
    return null;
  }

  updateTopicMindMap(paperId, topicId, mindMap) {
    const paper = this.data[paperId];
    for (const unit of paper.units) {
      if (unit.theoryNotes) {
        const topic = unit.theoryNotes.find(t => t.id === topicId);
        if (topic) {
          topic.mindMap = mindMap;
          this.savePaperData(paperId);
          return topic;
        }
      }
    }
    return null;
  }

  findTheoryTopicByTitle(paperId, title, excludeTopicId = null) {
    if (!title) return null;
    const clean = title.trim().toLowerCase();
    const paper = this.data[paperId];
    if (!paper || !paper.units) return null;

    for (const unit of paper.units) {
      if (unit.theoryNotes) {
        const match = unit.theoryNotes.find(t => {
          if (excludeTopicId && t.id === excludeTopicId) return false;
          return (t.title || "").trim().toLowerCase() === clean;
        });
        if (match) {
          return { topic: match, unit };
        }
      }
    }
    return null;
  }

  cleanLegacyTheoryFromStorage(paperId, id, title) {
    const pSuffix = paperId === "paper1" ? "p1" : "p2";
    const keys = [
      `notes_world_data_${pSuffix}_v4`,
      `notes_world_data_${pSuffix}_v3`,
      `notes_world_data_${pSuffix}_v2`,
      `notes_world_data_${pSuffix}_v1`,
      `notes_world_data_${pSuffix}`,
      `notes_world_${paperId}`
    ];
    const cleanT = (title || "").trim().toLowerCase();
    for (const k of keys) {
      try {
        const raw = localStorage.getItem(k);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && Array.isArray(parsed.units)) {
            let changed = false;
            parsed.units.forEach(u => {
              if (u.theoryNotes && Array.isArray(u.theoryNotes)) {
                const initLen = u.theoryNotes.length;
                u.theoryNotes = u.theoryNotes.filter(t => {
                  if (id && t.id === id) return false;
                  if (cleanT && (t.title || "").trim().toLowerCase() === cleanT) return false;
                  return true;
                });
                if (u.theoryNotes.length !== initLen) changed = true;
              }
            });
            if (changed) {
              localStorage.setItem(k, JSON.stringify(parsed));
            }
          }
        }
      } catch (e) {}
    }
  }

  deleteTheoryTopic(paperId, topicId) {
    const paper = this.data[paperId];
    for (const unit of paper.units) {
      if (unit.theoryNotes) {
        const idx = unit.theoryNotes.findIndex(t => t.id === topicId);
        if (idx !== -1) {
          const [deleted] = unit.theoryNotes.splice(idx, 1);
          binManager.recordTombstone(paperId, deleted.id, deleted.title);
          this.cleanLegacyTheoryFromStorage(paperId, deleted.id, deleted.title);
          this.savePaperData(paperId);
          return { topic: deleted, unit };
        }
      }
    }
    return null;
  }

  restoreTheoryTopic(paperId, unitId, topicData) {
    if (!topicData) return false;
    const paper = this.data[paperId];
    if (!paper || !paper.units) return false;
    this.ensureGeneralUnit(paper);

    binManager.removeTombstone(paperId, topicData.id, topicData.title);

    let targetUnit = paper.units.find(u => u.id === unitId);
    if (!targetUnit) targetUnit = paper.units[0];
    if (!targetUnit.theoryNotes) targetUnit.theoryNotes = [];

    // If another topic with this title was added while this was in bin, suffix it to prevent collision
    const existingTitleMatch = this.findTheoryTopicByTitle(paperId, topicData.title, topicData.id);
    if (existingTitleMatch) {
      topicData.title = `${topicData.title} (Restored)`;
    }

    // Avoid duplicate entry if same ID is restored multiple times
    const existingIdx = targetUnit.theoryNotes.findIndex(t => t.id === topicData.id);
    if (existingIdx !== -1) {
      targetUnit.theoryNotes[existingIdx] = topicData;
    } else {
      targetUnit.theoryNotes.unshift(topicData);
    }

    this.savePaperData(paperId);
    return true;
  }

  getTheoryTopic(paperId, topicId) {
    const paper = this.data[paperId];
    for (const unit of paper.units) {
      if (unit.theoryNotes) {
        const topic = unit.theoryNotes.find(t => t.id === topicId);
        if (topic) {
          return { topic, unit };
        }
      }
    }
    return null;
  }

  // --- TOPIC & SIMILARITY SEARCH ---

  findSimilarTopic(paperId, title, excludeId = null) {
    if (!title || !title.trim()) return null;
    const paper = this.data[paperId];
    if (!paper || !paper.units) return null;

    let bestMatch = null;
    let highestScore = 0;

    for (const unit of paper.units) {
      // 1. Search existing Topics (shortTricks)
      if (unit.shortTricks) {
        for (const trick of unit.shortTricks) {
          if (excludeId && trick.id === excludeId) continue;
          const sim = checkTopicTitleSimilarity(title, trick.title);
          if (sim.isSimilar && sim.score > highestScore) {
            highestScore = sim.score;
            bestMatch = {
              topic: trick,
              unit,
              type: "trick",
              score: sim.score,
              reason: sim.reason
            };
          }
        }
      }
    }

    return bestMatch;
  }

  // --- TRICKS (TOPICS) ACTIONS ---

  findTrickByTitle(paperId, title, excludeTrickId = null) {
    if (!title) return null;
    const clean = title.trim().toLowerCase();
    const paper = this.data[paperId];
    if (!paper || !paper.units) return null;

    // First check exact title match in tricks
    for (const unit of paper.units) {
      if (unit.shortTricks) {
        const match = unit.shortTricks.find(tr => {
          if (excludeTrickId && tr.id === excludeTrickId) return false;
          return (tr.title || "").trim().toLowerCase() === clean;
        });
        if (match) {
          return { trick: match, unit, isExact: true };
        }
      }
    }

    // Next check fuzzy similarity match
    const sim = this.findSimilarTopic(paperId, title, excludeTrickId);
    if (sim && sim.topic) {
      return { trick: sim.topic, unit: sim.unit, isFuzzy: true, similarityScore: sim.score, reason: sim.reason };
    }

    return null;
  }

  addTrick(paperId, unitId, { title, mnemonic, explanation, proTip, lightbulb }) {
    if (!title || !title.trim()) return null;
    const cleanTitle = title.trim();

    // Clear any previous tombstone in case user is re-adding a topic
    binManager.removeTombstone(paperId, null, cleanTitle);

    const paper = this.data[paperId];
    this.ensureGeneralUnit(paper);
    let unit = paper.units.find(u => u.id === unitId);
    if (!unit) {
      unit = paper.units.find(u => u.id === "general") || paper.units[0];
    }
    if (!unit.shortTricks) unit.shortTricks = [];

    // Only block if exact same title already exists in THIS specific unit
    const exactInUnit = unit.shortTricks.some(t => (t.title || "").trim().toLowerCase() === cleanTitle.toLowerCase());
    if (exactInUnit) {
      console.warn(`Exact topic title "${cleanTitle}" already exists in ${unit.name}`);
      return null;
    }

    const newTrick = {
      id: `custom_trick_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      title: cleanTitle,
      mnemonic: (mnemonic || "").trim(),
      explanation: (explanation || "").trim(),
      proTip: (proTip || "").trim(),
      lightbulb: (lightbulb || "").trim(),
      isCustom: true,
      createdAt: new Date().toISOString()
    };

    unit.shortTricks.unshift(newTrick);
    this.savePaperData(paperId);
    return newTrick;
  }

  updateTrick(paperId, trickId, { unitId, title, mnemonic, explanation, proTip, lightbulb }) {
    const paper = this.data[paperId];
    if (!paper || !paper.units) return null;
    this.ensureGeneralUnit(paper);

    if (title && title.trim()) {
      const existing = this.findTrickByTitle(paperId, title.trim(), trickId);
      if (existing && existing.isExact) {
        console.warn(`Cannot update to duplicate trick title: "${title.trim()}" (exists in ${existing.unit.name})`);
        return null;
      }
    }

    for (let uIdx = 0; uIdx < paper.units.length; uIdx++) {
      const unit = paper.units[uIdx];
      if (unit.shortTricks) {
        const trIdx = unit.shortTricks.findIndex(tr => tr.id === trickId);
        if (trIdx !== -1) {
          const trick = unit.shortTricks[trIdx];
          if (title !== undefined) trick.title = title.trim();
          if (mnemonic !== undefined) trick.mnemonic = (mnemonic || "").trim();
          if (explanation !== undefined) trick.explanation = (explanation || "").trim();
          if (proTip !== undefined) trick.proTip = (proTip || "").trim();
          if (lightbulb !== undefined) trick.lightbulb = (lightbulb || "").trim();

          // Check if user changed the unit while editing!
          if (unitId && unitId !== unit.id) {
            const targetUnit = paper.units.find(u => u.id === unitId);
            if (targetUnit) {
              unit.shortTricks.splice(trIdx, 1);
              if (!targetUnit.shortTricks) targetUnit.shortTricks = [];
              targetUnit.shortTricks.unshift(trick);
            }
          }

          trick.isCustom = true;
          trick.updatedAt = new Date().toISOString();
          this.savePaperData(paperId);
          return trick;
        }
      }
    }
    return null;
  }

  cleanLegacyTrickFromStorage(paperId, id, title) {
    const pSuffix = paperId === "paper1" ? "p1" : "p2";
    const keys = [
      `notes_world_data_${pSuffix}_v4`,
      `notes_world_data_${pSuffix}_v3`,
      `notes_world_data_${pSuffix}_v2`,
      `notes_world_data_${pSuffix}_v1`,
      `notes_world_data_${pSuffix}`,
      `notes_world_${paperId}`
    ];
    const cleanT = (title || "").trim().toLowerCase();
    for (const k of keys) {
      try {
        const raw = localStorage.getItem(k);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && Array.isArray(parsed.units)) {
            let changed = false;
            parsed.units.forEach(u => {
              if (u.shortTricks && Array.isArray(u.shortTricks)) {
                const initLen = u.shortTricks.length;
                u.shortTricks = u.shortTricks.filter(tr => {
                  if (id && tr.id === id) return false;
                  if (cleanT && (tr.title || "").trim().toLowerCase() === cleanT) return false;
                  return true;
                });
                if (u.shortTricks.length !== initLen) changed = true;
              }
            });
            if (changed) {
              localStorage.setItem(k, JSON.stringify(parsed));
            }
          }
        }
      } catch (e) {}
    }
  }

  deleteTrick(paperId, trickId) {
    const paper = this.data[paperId];
    for (const unit of paper.units) {
      if (unit.shortTricks) {
        const idx = unit.shortTricks.findIndex(tr => tr.id === trickId);
        if (idx !== -1) {
          const [deleted] = unit.shortTricks.splice(idx, 1);
          binManager.recordTombstone(paperId, deleted.id, deleted.title);
          this.cleanLegacyTrickFromStorage(paperId, deleted.id, deleted.title);
          this.savePaperData(paperId);
          return { trick: deleted, unit };
        }
      }
    }
    return null;
  }

  restoreTrick(paperId, unitId, trickData) {
    if (!trickData) return false;
    if (!paperId || !this.data[paperId]) {
      paperId = (unitId && String(unitId).startsWith("p2-")) ? "paper2" : "paper1";
    }
    const paper = this.data[paperId];
    if (!paper || !paper.units) return false;
    this.ensureGeneralUnit(paper);

    binManager.removeTombstone(paperId, trickData.id, trickData.title);

    let targetUnit = paper.units.find(u => u.id === unitId);
    if (!targetUnit) targetUnit = paper.units.find(u => u.id === "general") || paper.units[0];
    if (!targetUnit.shortTricks) targetUnit.shortTricks = [];

    const existingIdx = targetUnit.shortTricks.findIndex(tr => tr.id === trickData.id || (tr.title && tr.title.trim().toLowerCase() === (trickData.title || "").trim().toLowerCase()));
    if (existingIdx !== -1) {
      targetUnit.shortTricks[existingIdx] = trickData;
    } else {
      targetUnit.shortTricks.unshift(trickData);
    }

    this.savePaperData(paperId);
    return true;
  }

  getTrick(paperId, trickId) {
    const paper = this.data[paperId];
    for (const unit of paper.units) {
      if (unit.shortTricks) {
        const trick = unit.shortTricks.find(tr => tr.id === trickId);
        if (trick) {
          return { trick, unit };
        }
      }
    }
    return null;
  }

  resetPaper(paperId) {
    const defaultData = paperId === "paper1" ? defaultP1 : defaultP2;
    const storageKey = paperId === "paper1" ? STORAGE_KEY_P1 : STORAGE_KEY_P2;
    localStorage.removeItem(storageKey);
    this.data[paperId] = this.initPaperData(paperId, storageKey, defaultData);
    this.notify();
  }
}

export const dataManager = new DataManager();
