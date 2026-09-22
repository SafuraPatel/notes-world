/**
 * BIN MANAGER - Notes World
 * Manages deleted Theory Topics, Short Tricks, and Notepad Points.
 * Provides safe Recycle Bin storage with instant 1-click restore,
 * permanent deletion, and dual-sync with LocalStorage + Netlify Cloud DB.
 */

import { dataManager } from "./dataManager.js";
import { notesManager } from "./notesManager.js";

const STORAGE_KEY = "notes_world_recycle_bin_v1";
const TOMBSTONES_KEY = "notes_world_deleted_tombstones_v1";

export class BinManager {
  constructor() {
    this.tombstones = this.loadTombstones();
    this.items = this.loadItems();
    this.listeners = [];

    // Fast non-blocking startup sync
    setTimeout(() => {
      this.syncFromCloud(true);
      this.setupBackgroundSync();
    }, 50);
  }

  loadTombstones() {
    try {
      const raw = localStorage.getItem(TOMBSTONES_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return new Set(parsed);
      }
    } catch (e) {}
    return new Set();
  }

  saveTombstones() {
    try {
      localStorage.setItem(TOMBSTONES_KEY, JSON.stringify(Array.from(this.tombstones)));
    } catch (e) {}
  }

  recordTombstone(paper, id, title) {
    if (id) this.tombstones.add(String(id));
    if (title) {
      const p = paper || "paper1";
      this.tombstones.add(String(title).trim().toLowerCase());
      this.tombstones.add(`${p}_${String(title).trim().toLowerCase()}`);
    }
    this.saveTombstones();
  }

  removeTombstone(paper, id, title) {
    if (id) this.tombstones.delete(String(id));
    if (title) {
      const p = paper || "paper1";
      this.tombstones.delete(String(title).trim().toLowerCase());
      this.tombstones.delete(`${p}_${String(title).trim().toLowerCase()}`);
    }
    this.saveTombstones();
  }

  isDeleted(paper, id, title) {
    if (id && this.tombstones.has(String(id))) return true;
    const p = paper || "paper1";
    if (title) {
      const clean = String(title).trim().toLowerCase();
      if (this.tombstones.has(clean) || this.tombstones.has(`${p}_${clean}`)) return true;
    }

    // Also check current items in Recycle Bin
    const cleanT = (title || "").trim().toLowerCase();
    return this.items.some(it => {
      if (id && (it.originalId === id || it.id === id || (it.data && it.data.id === id))) return true;
      if (cleanT && (it.title || "").trim().toLowerCase() === cleanT) {
        if (!it.paper || it.paper === p) return true;
      }
      return false;
    });
  }

  normalizeBinItem(it) {
    if (!it) return it;
    if (!it.paper) {
      it.paper = (it.unitId && String(it.unitId).startsWith("p2-")) ? "paper2" : "paper1";
    }
    if (it.type === "trick" && (!it.typeName || it.typeName === "Short Trick")) {
      it.typeName = "Topic";
    }
    return it;
  }

  loadItems() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const list = parsed.map(it => this.normalizeBinItem(it));
          list.forEach(it => {
            if (it) this.recordTombstone(it.paper, it.originalId || (it.data && it.data.id), it.title);
          });
          return list;
        }
      }
    } catch (e) {
      console.error("Failed to load recycle bin from localStorage:", e);
    }
    return [];
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

  async syncFromCloud(force = false) {
    if (this._isSyncing) return false;
    const now = Date.now();
    if (!force && this._lastSyncTime && (now - this._lastSyncTime < 3000)) {
      return false; // Responsive 3s throttle
    }
    this._isSyncing = true;
    try {
      let updatedBin = false;
      let updatedTombs = false;

      // 1. Sync Recycle Bin items & Tombstones concurrently
      const [binRes, tombRes] = await Promise.all([
        fetch(`/api/data?type=bin&_t=${Date.now()}`, {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache", "Pragma": "no-cache" }
        }).catch(() => null),
        fetch(`/api/data?type=tombstones&_t=${Date.now()}`, {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache", "Pragma": "no-cache" }
        }).catch(() => null)
      ]);

      // Ingest Cloud Tombstones
      if (tombRes && tombRes.ok) {
        const tombJson = await tombRes.json().catch(() => null);
        if (tombJson && Array.isArray(tombJson.tombstones)) {
          tombJson.tombstones.forEach(t => {
            if (t && !this.tombstones.has(String(t))) {
              this.tombstones.add(String(t));
              updatedTombs = true;
            }
          });
        }
      }

      // Ingest Cloud Recycle Bin
      if (binRes && binRes.ok) {
        const json = await binRes.json().catch(() => null);
        if (json && json.success) {
          if (json.bin === null) {
            if (this.items.length > 0) this.syncToCloud();
          } else if (Array.isArray(json.bin)) {
            // Also ingest bin items as tombstones immediately
            json.bin.forEach(it => {
              if (it) {
                const norm = this.normalizeBinItem(it);
                const prevSize = this.tombstones.size;
                this.recordTombstone(norm.paper, norm.originalId || (norm.data && norm.data.id), norm.title);
                if (this.tombstones.size !== prevSize) updatedTombs = true;
              }
            });

            const normalizedCloud = json.bin.map(it => this.normalizeBinItem(it));
            const currentStr = JSON.stringify(this.items);
            const incomingStr = JSON.stringify(normalizedCloud);
            if (currentStr !== incomingStr) {
              this.items = normalizedCloud;
              localStorage.setItem(STORAGE_KEY, incomingStr);
              this.notify();
              updatedBin = true;
            }
          }
        }
      }

      if (updatedTombs) {
        this.saveTombstones();
      }

      // Purge any active deleted items across dataManager and notesManager
      if (dataManager && typeof dataManager.purgeDeletedItems === "function") {
        dataManager.purgeDeletedItems();
      }
      if (notesManager && typeof notesManager.purgeDeletedNotes === "function") {
        notesManager.purgeDeletedNotes();
      }

      return updatedBin || updatedTombs;
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
      await Promise.all([
        fetch("/api/data", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
          body: JSON.stringify({ type: "bin", bin: this.items.map(it => this.normalizeBinItem(it)) })
        }).catch(() => null),
        fetch("/api/data", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
          body: JSON.stringify({ type: "tombstones", tombstones: Array.from(this.tombstones) })
        }).catch(() => null)
      ]);
    } catch (e) {
      // Offline fallback
    }
  }

  save() {
    try {
      this.items = this.items.map(it => this.normalizeBinItem(it));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
      this.notify();
      this.syncToCloud();
    } catch (e) {
      console.error("Failed to save recycle bin:", e);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(cb => cb(this.items));
  }

  /**
   * Add a deleted item to the Recycle Bin
   */
  addItem({ type, typeName, paper, unitId, unitName, title, data }) {
    localStorage.removeItem(STORAGE_KEY + "_emptied");
    const effectivePaper = paper || (unitId && String(unitId).startsWith("p2-") ? "paper2" : "paper1");
    const entry = {
      id: "bin_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      originalId: data ? data.id : null,
      type: type || "trick",
      typeName: typeName || (type === "trick" ? "Topic" : type === "theory" ? "Theory Topic" : "Notepad Point"),
      paper: effectivePaper,
      unitId: unitId || "",
      unitName: unitName || "",
      title: (title || (data ? data.title : "") || "Untitled").trim(),
      data: data ? JSON.parse(JSON.stringify(data)) : {},
      deletedAt: new Date().toISOString()
    };

    this.recordTombstone(effectivePaper, entry.originalId, entry.title);
    this.items.unshift(entry);
    this.save();
    return entry;
  }

  /**
   * Restore an item back to its original collection
   */
  restoreItem(binId) {
    const idx = this.items.findIndex(it => it.id === binId);
    if (idx === -1) return null;

    const [item] = this.items.splice(idx, 1);
    this.normalizeBinItem(item);
    this.removeTombstone(item.paper, item.originalId || (item.data && item.data.id), item.title);
    let success = false;

    if (item.type === "theory") {
      success = dataManager.restoreTheoryTopic(item.paper, item.unitId, item.data);
    } else if (item.type === "trick") {
      success = dataManager.restoreTrick(item.paper, item.unitId, item.data);
    } else if (item.type === "note") {
      success = notesManager.restoreNote(item.data);
    }

    if (success) {
      this.save();
      return item;
    } else {
      // Put back if restore failed
      this.recordTombstone(item.paper, item.originalId || (item.data && item.data.id), item.title);
      this.items.splice(idx, 0, item);
      return null;
    }
  }

  /**
   * Permanently purge a single item from the bin
   */
  deletePermanently(binId) {
    const idx = this.items.findIndex(it => it.id === binId);
    if (idx !== -1) {
      const [removed] = this.items.splice(idx, 1);
      this.save();
      return removed;
    }
    return null;
  }

  /**
   * Empty the recycle bin (all or by paper)
   */
  emptyBin(paper = "all") {
    if (paper === "all") {
      this.items = [];
      localStorage.setItem(STORAGE_KEY + "_emptied", Date.now().toString());
    } else {
      this.items = this.items.filter(it => (it.paper || (it.unitId && String(it.unitId).startsWith("p2-") ? "paper2" : "paper1")) !== paper);
    }
    this.save();
  }

  getCount(paper = "all") {
    const list = this.items.map(it => this.normalizeBinItem(it));
    if (paper === "all") return list.length;
    return list.filter(it => it.paper === paper).length;
  }

  getItems({ paper = "all", type = "all", searchQuery = "" } = {}) {
    let list = this.items.map(it => this.normalizeBinItem(it));

    if (paper && paper !== "all") {
      list = list.filter(it => it.paper === paper);
    }

    if (type && type !== "all") {
      list = list.filter(it => it.type === type);
    }

    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(it => {
        const t = (it.title || "").toLowerCase();
        const u = (it.unitName || "").toLowerCase();
        const typeStr = (it.typeName || "").toLowerCase();
        let contentStr = "";
        if (it.data) {
          if (it.data.content) contentStr += " " + it.data.content.toLowerCase();
          if (it.data.mnemonic) contentStr += " " + it.data.mnemonic.toLowerCase();
          if (it.data.explanation) contentStr += " " + it.data.explanation.toLowerCase();
          if (it.data.points && Array.isArray(it.data.points)) {
            contentStr += " " + it.data.points.join(" ").toLowerCase();
          }
        }
        return t.includes(q) || u.includes(q) || typeStr.includes(q) || contentStr.includes(q);
      });
    }

    return list.sort((a, b) => new Date(b.deletedAt).getTime() - new Date(a.deletedAt).getTime());
  }
}

export const binManager = new BinManager();
