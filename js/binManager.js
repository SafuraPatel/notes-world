/**
 * BIN MANAGER - Notes World
 * Manages deleted Theory Topics, Short Tricks, and Notepad Points.
 * Provides safe Recycle Bin storage with instant 1-click restore,
 * permanent deletion, and dual-sync with LocalStorage + Netlify Cloud DB.
 */

import { dataManager } from "./dataManager.js";
import { notesManager } from "./notesManager.js";

const STORAGE_KEY = "notes_world_recycle_bin_v1";

export class BinManager {
  constructor() {
    this.items = this.loadItems();
    this.listeners = [];

    // Deferred non-blocking sync: Allows instant UI render from localStorage
    setTimeout(() => {
      this.syncFromCloud();
      this.setupBackgroundSync();
    }, 3500);
  }

  loadItems() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error("Failed to load recycle bin from localStorage:", e);
    }
    return [];
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
      const res = await fetch(`/api/data?type=bin&_t=${Date.now()}`, {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
          "Pragma": "no-cache"
        }
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.success) {
          if (json.bin === null) {
            // Cloud DB not initialized for bin yet; seed it if local has items
            if (this.items.length > 0) {
              this.syncToCloud();
            }
          } else if (Array.isArray(json.bin)) {
            // If incoming is empty but local has items and user hasn't explicitly emptied bin, seed cloud
            if (json.bin.length === 0 && this.items.length > 0 && !localStorage.getItem(STORAGE_KEY + "_emptied")) {
              this.syncToCloud();
              return false;
            }

            const currentStr = JSON.stringify(this.items);
            const incomingStr = JSON.stringify(json.bin);
            if (currentStr !== incomingStr) {
              this.items = json.bin;
              localStorage.setItem(STORAGE_KEY, incomingStr);
              this.notify();
              return true;
            }
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
        body: JSON.stringify({ type: "bin", bin: this.items })
      });
    } catch (e) {
      // Offline fallback
    }
  }

  save() {
    try {
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
    const entry = {
      id: "bin_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      originalId: data ? data.id : null,
      type: type || "theory", // 'theory' | 'trick' | 'note'
      typeName: typeName || (type === "theory" ? "Theory Topic" : type === "trick" ? "Short Trick" : "Notepad Point"),
      paper: paper || "paper1",
      unitId: unitId || "",
      unitName: unitName || "",
      title: (title || (data ? data.title : "") || "Untitled").trim(),
      data: data ? JSON.parse(JSON.stringify(data)) : {},
      deletedAt: new Date().toISOString()
    };

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
      this.items = this.items.filter(it => it.paper !== paper);
    }
    this.save();
  }

  getCount(paper = "all") {
    if (paper === "all") return this.items.length;
    return this.items.filter(it => it.paper === paper).length;
  }

  getItems({ paper = "all", type = "all", searchQuery = "" } = {}) {
    let list = [...this.items];

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
