/**
 * NOTES MANAGER - Notes World
 * Real-time writable blank study cards.
 * Dual-sync: LocalStorage for instant rendering + Netlify Cloud DB (/api/data) for multi-device sync!
 * Newly added points always display at the very top.
 */

const STORAGE_KEY = "notes_world_study_points_v2";

export class NotesManager {
  constructor() {
    this.notes = this.loadNotes();
    this.listeners = [];

    // Automatically sync latest shared notes from Netlify Cloud DB
    this.syncFromCloud();
    this.setupBackgroundSync();
  }

  loadNotes() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.error("Failed to load points from localStorage:", e);
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
    // Re-sync whenever user focuses or returns to the tab
    window.addEventListener("focus", () => this.syncFromCloud());
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.syncFromCloud();
      }
    });

    // Background polling every 12 seconds
    setInterval(() => {
      if (document.visibilityState === "visible") {
        this.syncFromCloud();
      }
    }, 12000);
  }

  async syncFromCloud() {
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
          const currentStr = JSON.stringify(this.notes);
          const incomingStr = JSON.stringify(json.notes);
          if (currentStr !== incomingStr) {
            this.notes = json.notes;
            localStorage.setItem(STORAGE_KEY, incomingStr);
            this.notifyListeners();
            return true;
          }
        }
      }
    } catch (e) {
      // Offline fallback
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notes));
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
    const newNote = {
      id: "point_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      paper,
      unitId,
      unitName,
      title: title.trim() || "My Point",
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
      if (title !== undefined) note.title = title.trim() || "My Point";
      if (content !== undefined) note.content = content.trim();
      if (unitId !== undefined) note.unitId = unitId;
      if (unitName !== undefined) note.unitName = unitName;
      if (color !== undefined) note.color = color;
      note.updatedAt = new Date().toISOString();
      this.saveToStorage();
    }
    return note;
  }

  deleteNote(id) {
    this.notes = this.notes.filter(n => n.id !== id);
    this.saveToStorage();
  }
}

export const notesManager = new NotesManager();
