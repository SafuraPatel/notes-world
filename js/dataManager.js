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

export class DataManager {
  constructor() {
    this.data = {
      paper1: this.initPaperData("paper1", STORAGE_KEY_P1, defaultP1),
      paper2: this.initPaperData("paper2", STORAGE_KEY_P2, defaultP2)
    };
    this.listeners = [];

    // Automatically sync latest shared updates from Netlify Cloud DB on launch
    this.syncFromCloud();
    this.setupBackgroundSync();
  }

  setupBackgroundSync() {
    window.addEventListener("focus", () => this.syncFromCloud());
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.syncFromCloud();
      }
    });

    // Background polling every 60s (lightweight & non-blocking)
    setInterval(() => {
      if (document.visibilityState === "visible") {
        this.syncFromCloud();
      }
    }, 60000);
  }

  deduplicatePaperUnits(paperObj) {
    if (!paperObj || !paperObj.units) return 0;
    const seenTheory = new Set();
    const seenTricks = new Set();
    let removedCount = 0;

    paperObj.units.forEach(unit => {
      if (unit.theoryNotes && Array.isArray(unit.theoryNotes)) {
        const uniqueTheory = [];
        unit.theoryNotes.forEach(t => {
          const key = (t.title || "").trim().toLowerCase();
          if (key && seenTheory.has(key)) {
            removedCount++;
            return;
          }
          if (key) seenTheory.add(key);
          uniqueTheory.push(t);
        });
        unit.theoryNotes = uniqueTheory;
      }

      if (unit.shortTricks && Array.isArray(unit.shortTricks)) {
        const uniqueTricks = [];
        unit.shortTricks.forEach(tr => {
          const key = (tr.title || "").trim().toLowerCase();
          if (key && seenTricks.has(key)) {
            removedCount++;
            return;
          }
          if (key) seenTricks.add(key);
          uniqueTricks.push(tr);
        });
        unit.shortTricks = uniqueTricks;
      }
    });
    return removedCount;
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
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.units && parsed.units.length > 0) {
          const removed = this.deduplicatePaperUnits(parsed);
          this.ensureGeneralUnit(parsed);

          // Update canonical unit names to short names while preserving user topics and tricks
          let namesUpdated = false;
          parsed.units.forEach(u => {
            const defU = defaultData.units.find(du => du.id === u.id);
            if (defU && defU.name && u.name !== defU.name) {
              u.name = defU.name;
              namesUpdated = true;
            }
          });

          if (removed > 0 || namesUpdated) {
            try {
              localStorage.setItem(storageKey, JSON.stringify(parsed));
            } catch (_) {}
            if (namesUpdated) {
              this.syncToCloud(paperId);
            }
          }
          return parsed;
        }
      }
    } catch (e) {
      console.error(`Failed to load ${paperId} from storage:`, e);
    }

    // Clone deep and assign IDs to every topic and trick
    const cloned = JSON.parse(JSON.stringify(defaultData));
    cloned.units.forEach((unit, uIdx) => {
      if (unit.theoryNotes) {
        unit.theoryNotes.forEach((t, tIdx) => {
          if (!t.id) {
            t.id = `${unit.id}_theory_${tIdx}_${Date.now()}`;
          }
        });
      }
      if (unit.shortTricks) {
        unit.shortTricks.forEach((tr, trIdx) => {
          if (!tr.id) {
            tr.id = `${unit.id}_trick_${trIdx}_${Date.now()}`;
          }
        });
      }
    });

    this.ensureGeneralUnit(cloned);

    try {
      localStorage.setItem(storageKey, JSON.stringify(cloned));
    } catch (e) {
      console.warn(`Could not save initial ${paperId} data:`, e);
    }
    return cloned;
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
              this.deduplicatePaperUnits(json.data);
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

              const currentStr = JSON.stringify(this.data[paperId]);
              const incomingStr = JSON.stringify(json.data);
              if (currentStr !== incomingStr || namesUpdated) {
                this.data[paperId] = json.data;
                const storageKey = paperId === "paper1" ? STORAGE_KEY_P1 : STORAGE_KEY_P2;
                localStorage.setItem(storageKey, JSON.stringify(json.data));
                hasUpdate = true;
                if (namesUpdated) {
                  this.syncToCloud(paperId);
                }
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
      localStorage.setItem(storageKey, JSON.stringify(this.data[paperId]));
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

  // --- TRICKS ACTIONS ---

  findTrickByTitle(paperId, title, excludeTrickId = null) {
    if (!title) return null;
    const clean = title.trim().toLowerCase();
    const paper = this.data[paperId];
    if (!paper || !paper.units) return null;

    for (const unit of paper.units) {
      if (unit.shortTricks) {
        const match = unit.shortTricks.find(tr => {
          if (excludeTrickId && tr.id === excludeTrickId) return false;
          return (tr.title || "").trim().toLowerCase() === clean;
        });
        if (match) {
          return { trick: match, unit };
        }
      }
    }
    return null;
  }

  addTrick(paperId, unitId, { title, mnemonic, explanation, proTip, lightbulb }) {
    if (!title || !title.trim()) return null;
    const cleanTitle = title.trim();

    // Prevent duplicate trick titles
    const existing = this.findTrickByTitle(paperId, cleanTitle);
    if (existing) {
      console.warn(`Duplicate trick title blocked: "${cleanTitle}" already exists in ${existing.unit.name}`);
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
    const paper = this.data[paperId];
    if (!paper || !paper.units) return false;
    this.ensureGeneralUnit(paper);

    let targetUnit = paper.units.find(u => u.id === unitId);
    if (!targetUnit) targetUnit = paper.units[0];
    if (!targetUnit.shortTricks) targetUnit.shortTricks = [];

    const existingTitleMatch = this.findTrickByTitle(paperId, trickData.title, trickData.id);
    if (existingTitleMatch) {
      trickData.title = `${trickData.title} (Restored)`;
    }

    const existingIdx = targetUnit.shortTricks.findIndex(tr => tr.id === trickData.id);
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
