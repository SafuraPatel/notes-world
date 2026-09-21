/**
 * SYLLABUS MANAGER - Notes World
 * Tracks covered syllabus subtopics and Must Cover checklist items.
 * Dual-sync: LocalStorage for instant reactive rendering + Netlify Cloud DB (/api/data)
 */

import { paper1Syllabus, paper2Syllabus } from "./data/syllabusData.js";

const STORAGE_PREFIX = "notes_world_syllabus_progress_";

export class SyllabusManager {
  constructor() {
    this.progress = {
      paper1: this.loadProgress("paper1"),
      paper2: this.loadProgress("paper2")
    };
    this.listeners = [];

    // Deferred non-blocking cloud sync
    setTimeout(() => {
      this.syncFromCloud();
    }, 4000);
  }

  loadProgress(paperId) {
    try {
      const saved = localStorage.getItem(`${STORAGE_PREFIX}${paperId}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return new Set(parsed);
        }
      }
    } catch (e) {
      console.error(`Failed to load syllabus progress for ${paperId}:`, e);
    }
    return new Set();
  }

  saveProgress(paperId) {
    try {
      const arr = Array.from(this.progress[paperId] || []);
      localStorage.setItem(`${STORAGE_PREFIX}${paperId}`, JSON.stringify(arr));
      this.notifyListeners();
      this.syncToCloud(paperId);
    } catch (e) {
      console.error(`Failed to save syllabus progress for ${paperId}:`, e);
    }
  }

  isCovered(paperId, topicId) {
    if (!this.progress[paperId]) return false;
    return this.progress[paperId].has(topicId);
  }

  toggleTopic(paperId, topicId) {
    if (!this.progress[paperId]) {
      this.progress[paperId] = new Set();
    }
    const currentSet = this.progress[paperId];
    if (currentSet.has(topicId)) {
      currentSet.delete(topicId);
    } else {
      currentSet.add(topicId);
    }
    this.saveProgress(paperId);
    return currentSet.has(topicId);
  }

  setTopicCovered(paperId, topicId, covered = true) {
    if (!this.progress[paperId]) {
      this.progress[paperId] = new Set();
    }
    const currentSet = this.progress[paperId];
    if (covered) {
      currentSet.add(topicId);
    } else {
      currentSet.delete(topicId);
    }
    this.saveProgress(paperId);
  }

  resetProgress(paperId) {
    this.progress[paperId] = new Set();
    this.saveProgress(paperId);
  }

  markAllCovered(paperId, syllabus) {
    if (!this.progress[paperId]) {
      this.progress[paperId] = new Set();
    }
    syllabus.units.forEach(u => {
      u.subtopics.forEach(st => this.progress[paperId].add(st.id));
    });
    if (syllabus.mustCover) {
      syllabus.mustCover.forEach(mc => this.progress[paperId].add(mc.id));
    }
    this.saveProgress(paperId);
  }

  getUnitProgress(paperId, unit) {
    if (!unit || !unit.subtopics) return { covered: 0, total: 0, percent: 0 };
    const total = unit.subtopics.length;
    let covered = 0;
    unit.subtopics.forEach(st => {
      if (this.isCovered(paperId, st.id)) covered++;
    });
    const percent = total > 0 ? Math.round((covered / total) * 100) : 0;
    return { covered, total, percent };
  }

  getOverallProgress(paperId, syllabus) {
    if (!syllabus) {
      syllabus = paperId === "paper1" ? paper1Syllabus : paper2Syllabus;
    }
    let total = 0;
    let covered = 0;

    syllabus.units.forEach(u => {
      u.subtopics.forEach(st => {
        total++;
        if (this.isCovered(paperId, st.id)) covered++;
      });
    });

    if (syllabus.mustCover) {
      syllabus.mustCover.forEach(mc => {
        total++;
        if (this.isCovered(paperId, mc.id)) covered++;
      });
    }

    const percent = total > 0 ? Math.round((covered / total) * 100) : 0;
    return { covered, total, percent };
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(cb => cb(this.progress));
  }

  async syncFromCloud() {
    try {
      const res = await fetch(`/api/data?type=syllabus&_t=${Date.now()}`, {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache", "Pragma": "no-cache" }
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.syllabus) {
          let updated = false;
          for (const paperId of ["paper1", "paper2"]) {
            if (Array.isArray(json.syllabus[paperId])) {
              const cloudSet = new Set(json.syllabus[paperId]);
              // Merge: union with local set so local items are NEVER lost
              const localSet = this.progress[paperId] || new Set();
              let mergedSize = localSet.size;
              cloudSet.forEach(id => localSet.add(id));
              if (localSet.size !== mergedSize) {
                this.progress[paperId] = localSet;
                localStorage.setItem(`${STORAGE_PREFIX}${paperId}`, JSON.stringify(Array.from(localSet)));
                updated = true;
              }
            }
          }
          if (updated) this.notifyListeners();
        }
      }
    } catch (_) {
      // Offline fallback
    }
  }

  async syncToCloud(paperId) {
    try {
      const payload = {
        paper1: Array.from(this.progress.paper1 || []),
        paper2: Array.from(this.progress.paper2 || [])
      };
      await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "syllabus", syllabus: payload })
      });
    } catch (_) {
      // Offline fallback
    }
  }
}

export const syllabusManager = new SyllabusManager();
