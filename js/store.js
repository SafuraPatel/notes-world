/**
 * STORE.JS - Central Reactive Application State
 * Notes World - UGC NET & MH-SET
 * Mobile-First: Units, Theory, Tricks, Notepad
 */

import { dataManager } from "./dataManager.js";

class AppStore {
  constructor() {
    this.state = {
      activePaper: localStorage.getItem("notes_world_active_paper") || "paper1", // 'paper1' or 'paper2'
      activeSection: localStorage.getItem("notes_world_active_section") || "units", // 'units', 'theory', 'tricks', 'questions', 'notepad'
      selectedUnitId: "all", // 'all' or specific unitId
      searchQuery: "",
      theme: localStorage.getItem("notes_world_theme") || "dark"
    };
    this.listeners = [];

    // When dataManager updates, notify all store listeners
    dataManager.subscribe(() => {
      this.notify();
    });
  }

  getState() {
    return this.state;
  }

  getCurrentPaperData() {
    return dataManager.getPaperData(this.state.activePaper);
  }

  setTheme(theme) {
    this.state.theme = theme;
    localStorage.setItem("notes_world_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    this.notify();
  }

  toggleTheme() {
    const nextTheme = this.state.theme === "dark" ? "light" : "dark";
    this.setTheme(nextTheme);
  }

  setActivePaper(paperId) {
    if (this.state.activePaper !== paperId) {
      this.state.activePaper = paperId;
      this.state.selectedUnitId = "all";
      this.state.searchQuery = "";
      localStorage.setItem("notes_world_active_paper", paperId);
      this.notify();
    }
  }

  setActiveSection(section) {
    this.state.activeSection = section;
    localStorage.setItem("notes_world_active_section", section);
    this.notify();
  }

  setSelectedUnitId(unitId) {
    this.state.selectedUnitId = unitId;
    this.notify();
  }

  setSearchQuery(query) {
    this.state.searchQuery = query.toLowerCase().trim();
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }
}

export const store = new AppStore();
