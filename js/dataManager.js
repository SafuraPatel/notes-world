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

    setInterval(() => {
      if (document.visibilityState === "visible") {
        this.syncFromCloud();
      }
    }, 15000);
  }

  initPaperData(paperId, storageKey, defaultData) {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.units && parsed.units.length > 0) {
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

    try {
      localStorage.setItem(storageKey, JSON.stringify(cloned));
    } catch (e) {
      console.warn(`Could not save initial ${paperId} data:`, e);
    }
    return cloned;
  }

  async syncFromCloud() {
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
              const currentStr = JSON.stringify(this.data[paperId]);
              const incomingStr = JSON.stringify(json.data);
              if (currentStr !== incomingStr) {
                this.data[paperId] = json.data;
                const storageKey = paperId === "paper1" ? STORAGE_KEY_P1 : STORAGE_KEY_P2;
                localStorage.setItem(storageKey, incomingStr);
                hasUpdate = true;
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

  addTheoryTopic(paperId, unitId, { title, points }) {
    const paper = this.data[paperId];
    const unit = paper.units.find(u => u.id === unitId) || paper.units[0];
    if (!unit.theoryNotes) unit.theoryNotes = [];

    const newTopic = {
      id: `custom_theory_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      title: title.trim(),
      points: points.map(p => p.trim()).filter(Boolean)
    };

    unit.theoryNotes.unshift(newTopic);
    this.savePaperData(paperId);
    return newTopic;
  }

  updateTheoryTopic(paperId, topicId, { title, points }) {
    const paper = this.data[paperId];
    for (const unit of paper.units) {
      if (unit.theoryNotes) {
        const topic = unit.theoryNotes.find(t => t.id === topicId);
        if (topic) {
          if (title !== undefined) topic.title = title.trim();
          if (points !== undefined) topic.points = points.map(p => p.trim()).filter(Boolean);
          this.savePaperData(paperId);
          return topic;
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
          unit.theoryNotes.splice(idx, 1);
          this.savePaperData(paperId);
          return true;
        }
      }
    }
    return false;
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

  addTrick(paperId, unitId, { title, mnemonic, explanation, proTip }) {
    const paper = this.data[paperId];
    const unit = paper.units.find(u => u.id === unitId) || paper.units[0];
    if (!unit.shortTricks) unit.shortTricks = [];

    const newTrick = {
      id: `custom_trick_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      title: title.trim(),
      mnemonic: mnemonic.trim(),
      explanation: explanation.trim(),
      proTip: (proTip || "").trim()
    };

    unit.shortTricks.unshift(newTrick);
    this.savePaperData(paperId);
    return newTrick;
  }

  updateTrick(paperId, trickId, { title, mnemonic, explanation, proTip }) {
    const paper = this.data[paperId];
    for (const unit of paper.units) {
      if (unit.shortTricks) {
        const trick = unit.shortTricks.find(tr => tr.id === trickId);
        if (trick) {
          if (title !== undefined) trick.title = title.trim();
          if (mnemonic !== undefined) trick.mnemonic = mnemonic.trim();
          if (explanation !== undefined) trick.explanation = explanation.trim();
          if (proTip !== undefined) trick.proTip = (proTip || "").trim();
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
          unit.shortTricks.splice(idx, 1);
          this.savePaperData(paperId);
          return true;
        }
      }
    }
    return false;
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
