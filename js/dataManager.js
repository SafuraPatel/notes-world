/**
 * DATA MANAGER - Notes World
 * Manages Paper 1 and Paper 2 Theory and Tricks data.
 * Supports real-time Editing, Deleting, and Adding custom topics/tricks.
 * Dual-sync: LocalStorage for instant rendering + Netlify Cloud DB (/api/data) for multi-device sync!
 */

import { paper1Data as defaultP1 } from "./data/paper1Data.js";
import { paper2Data as defaultP2 } from "./data/paper2Data.js";

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

    // Deferred non-blocking sync: Allows instant UI render from localStorage
    setTimeout(() => {
      this.syncFromCloud();
      this.setupBackgroundSync();
    }, 2500);
  }

  setupBackgroundSync() {
    // Non-intrusive background polling every 5 minutes
    setInterval(() => {
      if (document.visibilityState === "visible" && navigator.onLine) {
        this.syncFromCloud();
      }
    }, 300000);
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

    // Ensure all default tricks are present
    defaultData.units.forEach(defU => {
      const targetU = baseData.units.find(u => u.id === defU.id);
      if (targetU && defU.shortTricks) {
        if (!targetU.shortTricks) targetU.shortTricks = [];
        const existingTrickTitles = new Set(targetU.shortTricks.map(t => (t.title || "").trim().toLowerCase()));
        defU.shortTricks.forEach(dt => {
          const dtTitle = (dt.title || "").trim().toLowerCase();
          if (!existingTrickTitles.has(dtTitle)) {
            targetU.shortTricks.push(JSON.parse(JSON.stringify(dt)));
            existingTrickTitles.add(dtTitle);
          }
        });
      }
    });

    // Merge any user-added custom tricks and preserve user modifications from historical localStorage keys
    allKnownTricks.forEach(({ unitId, trick }) => {
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

  safeMergePaperData(localPaper, cloudPaper) {
    if (!cloudPaper || !cloudPaper.units) return localPaper;
    if (!localPaper || !localPaper.units) return cloudPaper;

    // Never erase local topics or tricks during cloud sync!
    cloudPaper.units.forEach(cloudUnit => {
      let localUnit = localPaper.units.find(u => u.id === cloudUnit.id);
      if (!localUnit) {
        localPaper.units.push(cloudUnit);
        return;
      }

      // Merge shortTricks (Topics): preserve all local items and append new cloud items
      if (cloudUnit.shortTricks && Array.isArray(cloudUnit.shortTricks)) {
        if (!localUnit.shortTricks) localUnit.shortTricks = [];
        const localTrickIds = new Set(localUnit.shortTricks.map(t => t.id));
        const localTrickTitles = new Set(localUnit.shortTricks.map(t => (t.title || "").trim().toLowerCase()));

        cloudUnit.shortTricks.forEach(ct => {
          const tClean = (ct.title || "").trim().toLowerCase();
          if (!localTrickIds.has(ct.id) && !localTrickTitles.has(tClean)) {
            localUnit.shortTricks.push(ct);
          }
        });
      }

      // Merge theoryNotes: preserve all local items
      if (cloudUnit.theoryNotes && Array.isArray(cloudUnit.theoryNotes)) {
        if (!localUnit.theoryNotes) localUnit.theoryNotes = [];
        const localTheoryIds = new Set(localUnit.theoryNotes.map(t => t.id));
        const localTheoryTitles = new Set(localUnit.theoryNotes.map(t => (t.title || "").trim().toLowerCase()));

        cloudUnit.theoryNotes.forEach(ct => {
          const tClean = (ct.title || "").trim().toLowerCase();
          if (!localTheoryIds.has(ct.id) && !localTheoryTitles.has(tClean)) {
            localUnit.theoryNotes.push(ct);
          }
        });
      }
    });

    return localPaper;
  }

  async syncFromCloud() {
    if (this._isSyncing) return false;
    const now = Date.now();
    if (this._lastSyncTime && (now - this._lastSyncTime < 25000)) {
      return false; // Prevent redundant requests within 25s
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
              const merged = this.safeMergePaperData(this.data[paperId], json.data);
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

  deleteTheoryTopic(paperId, topicId) {
    const paper = this.data[paperId];
    for (const unit of paper.units) {
      if (unit.theoryNotes) {
        const idx = unit.theoryNotes.findIndex(t => t.id === topicId);
        if (idx !== -1) {
          const [deleted] = unit.theoryNotes.splice(idx, 1);
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

    // Prevent duplicate trick / topic titles (even if in different words)
    const existing = this.findTrickByTitle(paperId, cleanTitle);
    if (existing) {
      console.warn(`Duplicate topic title blocked: "${cleanTitle}" already exists as "${existing.trick.title}" in ${existing.unit.name}`);
      return null;
    }

    const paper = this.data[paperId];
    this.ensureGeneralUnit(paper);
    const unit = paper.units.find(u => u.id === unitId) || paper.units[0];
    if (!unit.shortTricks) unit.shortTricks = [];

    const newTrick = {
      id: `custom_trick_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      title: cleanTitle,
      mnemonic: (mnemonic || "").trim(),
      explanation: (explanation || "").trim(),
      proTip: (proTip || "").trim(),
      lightbulb: (lightbulb || "").trim()
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
      if (existing) {
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

          this.savePaperData(paperId);
          return trick;
        }
      }
    }
    return null;
  }

  deleteTrick(paperId, trickId) {
    const paper = this.data[paperId];
    for (const unit of paper.units) {
      if (unit.shortTricks) {
        const idx = unit.shortTricks.findIndex(tr => tr.id === trickId);
        if (idx !== -1) {
          const [deleted] = unit.shortTricks.splice(idx, 1);
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
