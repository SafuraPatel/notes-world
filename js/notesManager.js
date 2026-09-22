/**
 * NOTES MANAGER - Notes World
 * Real-time writable blank study cards.
 * Dual-sync: LocalStorage for instant rendering + Netlify Cloud DB (/api/data) for multi-device sync!
 * Newly added points always display at the very top.
 */

import { binManager } from "./binManager.js";

const STORAGE_KEY = "notes_world_study_points_v2";

export class NotesManager {
  constructor() {
    this.notes = this.loadNotes();
    this.listeners = [];

    // Deferred non-blocking sync: Allows instant UI render from localStorage
    setTimeout(() => {
      this.syncFromCloud();
      this.setupBackgroundSync();
    }, 3000);
  }

  loadNotes() {
    const candidateKeys = [
      STORAGE_KEY,
      `${STORAGE_KEY}_backup`,
      "notes_world_study_points_v1",
      "notes_world_study_points",
      "notes_world_notepad_v1"
    ];

    const allNotes = [];
    const seen = new Set();

    for (const key of candidateKeys) {
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            parsed.forEach(n => {
              if (binManager.isDeleted(n.paper, n.id, n.title)) return;
              const k = `${n.paper || "paper1"}_${(n.title || "").trim().toLowerCase()}`;
              if (!seen.has(k)) {
                seen.add(k);
                allNotes.push(n);
              }
            });
          }
        }
      } catch (e) {}
    }

    if (allNotes.length > 0) {
      return allNotes;
    }
    // Starter points for Paper 1 and Paper 2
    return [
      {
        id: "starter-p1-note",
        paper: "paper1",
        unitId: "p1-u6",
        unitName: "Logical Reasoning",
        title: "Square of Opposition Golden Rules",
        content: "• Contradictories (A-O, E-I): Always opposite truth values.\n• Contraries (A-E): Both can be false, cannot both be true.\n• Sub-contraries (I-O): Both can be true, cannot both be false.\n• Truth flows DOWN (A to I, E to O).\n• Falsehood flows UP (I to A, O to E).",
        color: "#8b5cf6",
        createdAt: new Date(Date.now() - 1000).toISOString(),
        updatedAt: new Date(Date.now() - 1000).toISOString()
      },
      {
        id: "starter-p2-note",
        paper: "paper2",
        unitId: "p2-u4",
        unitName: "DBMS",
        title: "Normal Forms Quick Decider",
        content: "• BCNF: Every determinant X MUST be a Super Key.\n• 3NF: For every X -> Y, X is Super Key OR Y is Prime Attribute.\n• 2NF: No partial dependency on proper subset of candidate key.\n• Relations with only 2 attributes are ALWAYS in BCNF.",
        color: "#10b981",
        createdAt: new Date(Date.now() - 2000).toISOString(),
        updatedAt: new Date(Date.now() - 2000).toISOString()
      }
    ];
  }

  setupBackgroundSync() {
    // Non-intrusive background polling every 5 minutes
    setInterval(() => {
      if (document.visibilityState === "visible" && navigator.onLine) {
        this.syncFromCloud();
      }
    }, 300000);
  }

  async syncFromCloud() {
    if (this._isSyncing) return false;
    const now = Date.now();
    if (this._lastSyncTime && (now - this._lastSyncTime < 25000)) {
      return false; // Throttle redundant syncs within 25s
    }
    this._isSyncing = true;
    try {
      const res = await fetch(`/api/data?type=notes&_t=${Date.now()}`, {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
          "Pragma": "no-cache"
        }
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.notes && Array.isArray(json.notes)) {
          // Filter local notes against binManager
          this.notes = this.notes.filter(n => !binManager.isDeleted(n.paper, n.id, n.title));
          const localIds = new Set(this.notes.map(n => n.id));
          const localTitles = new Set(this.notes.map(n => (n.title || "").trim().toLowerCase()));
          let addedNew = false;

          json.notes.forEach(cn => {
            if (binManager.isDeleted(cn.paper, cn.id, cn.title)) return;
            const cTitle = (cn.title || "").trim().toLowerCase();
            if (!localIds.has(cn.id) && !localTitles.has(cTitle)) {
              this.notes.push(cn);
              addedNew = true;
            }
          });

          if (addedNew) {
            this.notes.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
            const mergedStr = JSON.stringify(this.notes);
            localStorage.setItem(STORAGE_KEY, mergedStr);
            this.notifyListeners();
            this.syncToCloud();
            return true;
          }
        }
      }
    } catch (e) {
      // Offline fallback
    } finally {
      this._lastSyncTime = Date.now();
      this._isSyncing = false;
    }
    return false;
  }

  async syncToCloud() {
    try {
      await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify({ type: "notes", notes: this.notes })
      });
    } catch (e) {
      // Offline fallback
    }
  }

  saveToStorage() {
    try {
      const dataStr = JSON.stringify(this.notes);
      // Rolling safety backup snapshot
      localStorage.setItem(`${STORAGE_KEY}_backup`, dataStr);
      localStorage.setItem(STORAGE_KEY, dataStr);
      this.notifyListeners();
      this.syncToCloud();
    } catch (e) {
      console.error("Failed to persist points to localStorage:", e);
    }
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notifyListeners() {
    this.listeners.forEach(cb => cb(this.notes));
  }

  getNotesByPaper(paperId) {
    return this.notes
      .filter(n => n.paper === paperId)
      .sort((a, b) => {
        const timeA = new Date(a.updatedAt || a.createdAt).getTime();
        const timeB = new Date(b.updatedAt || b.createdAt).getTime();
        return timeB - timeA;
      });
  }

  addNote({ paper, unitId, unitName, title, content, color = "#6366f1" }) {
    const cleanTitle = (title || "").trim() || "My Point";
    binManager.removeTombstone(paper, null, cleanTitle);
    const existing = this.findNoteByTitle(paper, cleanTitle);
    if (existing) {
      console.warn(`Duplicate note title blocked: "${cleanTitle}"`);
      return null;
    }

    const newNote = {
      id: "point_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      paper,
      unitId,
      unitName,
      title: cleanTitle,
      content: content.trim(),
      color,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.notes.unshift(newNote);
    this.saveToStorage();
    return newNote;
  }

  updateNote(id, { title, content, unitId, unitName, color }) {
    const note = this.notes.find(n => n.id === id);
    if (note) {
      if (title !== undefined) {
        const cleanTitle = title.trim() || "My Point";
        const existing = this.findNoteByTitle(note.paper, cleanTitle, id);
        if (existing) {
          console.warn(`Cannot update to duplicate note title: "${cleanTitle}"`);
          return null;
        }
        note.title = cleanTitle;
      }
      if (content !== undefined) note.content = content.trim();
      if (unitId !== undefined) note.unitId = unitId;
      if (unitName !== undefined) note.unitName = unitName;
      if (color !== undefined) note.color = color;
      note.updatedAt = new Date().toISOString();
      this.saveToStorage();
    }
    return note;
  }

  findNoteByTitle(paperId, title, excludeNoteId = null) {
    if (!title) return null;
    const clean = title.trim().toLowerCase();
    return this.notes.find(n => {
      if (excludeNoteId && n.id === excludeNoteId) return false;
      if (paperId && n.paper !== paperId) return false;
      return (n.title || "").trim().toLowerCase() === clean;
    }) || null;
  }

  cleanLegacyNotesFromStorage(id, title) {
    const candidateKeys = [
      "notes_world_study_points_v1",
      "notes_world_study_points",
      "notes_world_notepad_v1"
    ];
    const cleanT = (title || "").trim().toLowerCase();
    for (const key of candidateKeys) {
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            const filtered = parsed.filter(n => {
              if (id && n.id === id) return false;
              if (cleanT && (n.title || "").trim().toLowerCase() === cleanT) return false;
              return true;
            });
            if (filtered.length !== parsed.length) {
              localStorage.setItem(key, JSON.stringify(filtered));
            }
          }
        }
      } catch (e) {}
    }
  }

  deleteNote(id) {
    const idx = this.notes.findIndex(n => n.id === id);
    if (idx !== -1) {
      const [deleted] = this.notes.splice(idx, 1);
      binManager.recordTombstone(deleted.paper, deleted.id, deleted.title);
      this.cleanLegacyNotesFromStorage(deleted.id, deleted.title);
      this.saveToStorage();
      return deleted;
    }
    return null;
  }

  restoreNote(noteData) {
    if (!noteData) return false;
    binManager.removeTombstone(noteData.paper, noteData.id, noteData.title);
    const existingIdx = this.notes.findIndex(n => n.id === noteData.id);
    if (existingIdx !== -1) {
      this.notes[existingIdx] = noteData;
    } else {
      this.notes.unshift(noteData);
    }
    this.saveToStorage();
    return true;
  }
}

export const notesManager = new NotesManager();
