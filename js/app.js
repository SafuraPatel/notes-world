/**
 * APP.JS - Notes World Application Controller
 * Sections: Units, Theory (Attractive Bullet Notes), Tricks, Notepad (My Points)
 * Supports Edit, Delete, and Add More for Theory and Tricks with localStorage persistence!
 */

import { store } from "./store.js";
import { notesManager } from "./notesManager.js";
import { dataManager } from "./dataManager.js";
import { questionsManager } from "./questionsManager.js";

// Toast Notification
export function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === "success" ? "✓" : "ℹ"}</span>
    <span>${escapeHtml(message)}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatBulletText(rawText) {
  // Clean leading bullet symbols
  const clean = rawText.replace(/^[•\-\*\s]+/, "").trim();
  // If text contains "Key Term: Definition", emphasize the term
  const colonIdx = clean.indexOf(":");
  if (colonIdx > 0 && colonIdx < 50) {
    const term = clean.substring(0, colonIdx + 1);
    const rest = clean.substring(colonIdx + 1);
    return `<strong class="term-highlight">${escapeHtml(term)}</strong>${escapeHtml(rest)}`;
  }
  return escapeHtml(clean);
}

class AppController {
  constructor() {
    this.initElements();
    this.initHistory();
    this.bindEvents();
    this.initTheme();
    this.updateStickySummary();
    this.render();

    // Reactive store updates
    store.subscribe(() => this.render());
    // Reactive notes updates
    notesManager.subscribe(() => {
      this.renderNotepadSection();
      this.updateNotesBadge();
    });
    // Reactive questions updates
    questionsManager.subscribe(() => {
      this.renderQuestionsSection();
      this.updateQuestionsBadge();
    });
  }

  initElements() {
    // Header controls (4-Row Direct Header)
    this.headerPaperBadge = document.getElementById("headerPaperBadge");
    this.headerSectionBadge = document.getElementById("headerSectionBadge");
    this.btnPaper1 = document.getElementById("btnPaper1");
    this.btnPaper2 = document.getElementById("btnPaper2");
    this.cloudSyncBtn = document.getElementById("cloudSyncBtn");
    this.stickyCloudSyncBtn = document.getElementById("stickyCloudSyncBtn");
    this.syncStatusText = document.getElementById("syncStatusText");
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
    this.themeIcon = document.getElementById("themeIcon");
    this.stickyThemeToggleBtn = document.getElementById("stickyThemeToggleBtn");
    this.stickyThemeIcon = document.getElementById("stickyThemeIcon");
    this.navTabBtns = document.querySelectorAll(".tab-btn");

    // Filter bar
    this.filterBar = document.getElementById("filterBar");
    this.unitSelectDropdown = document.getElementById("unitSelectDropdown");
    this.globalSearchInput = document.getElementById("globalSearchInput");

    // Sticky Scroll Navigation elements
    this.stickyNavArea = document.getElementById("stickyNavArea");
    this.stickyHeaderToggleBar = document.getElementById("stickyHeaderToggleBar");
    this.stickyHeaderDropdownBtn = document.getElementById("stickyHeaderDropdownBtn");
    this.stickyHeaderSummaryText = document.getElementById("stickyHeaderSummaryText");
    this.stickyActiveSectionBadge = document.getElementById("stickyActiveSectionBadge");
    this.headerCollapsibleSection = document.getElementById("headerCollapsibleSection");

    // Main sections
    this.unitsSection = document.getElementById("unitsSection");
    this.theorySection = document.getElementById("theorySection");
    this.tricksSection = document.getElementById("tricksSection");
    this.questionsSection = document.getElementById("questionsSection");
    this.notepadSection = document.getElementById("notepadSection");

    // Dynamic containers
    this.unitsSectionTitle = document.getElementById("unitsSectionTitle");
    this.unitsListContainer = document.getElementById("unitsListContainer");
    this.theoryCardsContainer = document.getElementById("theoryCardsContainer");
    this.tricksContainer = document.getElementById("tricksContainer");
    this.questionsCardsContainer = document.getElementById("questionsCardsContainer");
    this.userNotesGrid = document.getElementById("userNotesGrid");

    // Badges & Titles
    this.theoryCountBadge = document.getElementById("theoryCountBadge");
    this.tricksCountBadge = document.getElementById("tricksCountBadge");
    this.questionsCountBadge = document.getElementById("questionsCountBadge");
    this.questionsSectionTitle = document.getElementById("questionsSectionTitle");
    this.notesCountBadge = document.getElementById("notesCountBadge");
    this.notepadSectionTitle = document.getElementById("notepadSectionTitle");

    // Questions Stats Elements
    this.tabQuestionsCountBadge = document.getElementById("tabQuestionsCountBadge");
    this.pyqAttemptedPill = document.getElementById("pyqAttemptedPill");
    this.pyqScorePill = document.getElementById("pyqScorePill");
    this.pyqAccuracyPill = document.getElementById("pyqAccuracyPill");
    this.btnResetAllPyqs = document.getElementById("btnResetAllPyqs");
    this.questionsDisplayLimit = 15;

    // Action Buttons
    this.btnHeaderAddTheory = document.getElementById("btnHeaderAddTheory");
    this.btnHeaderAddTrick = document.getElementById("btnHeaderAddTrick");

    // Modals & Overlay
    this.modalOverlay = document.getElementById("modalOverlay");
    this.theoryModal = document.getElementById("theoryModal");
    this.trickModal = document.getElementById("trickModal");

    // Theory Modal elements
    this.theoryModalTitle = document.getElementById("theoryModalTitle");
    this.theoryModalForm = document.getElementById("theoryModalForm");
    this.theoryModalTopicId = document.getElementById("theoryModalTopicId");
    this.theoryModalUnitSelect = document.getElementById("theoryModalUnitSelect");
    this.theoryModalTopicTitle = document.getElementById("theoryModalTopicTitle");
    this.theoryModalPoints = document.getElementById("theoryModalPoints");
    this.btnCloseTheoryModal = document.getElementById("btnCloseTheoryModal");
    this.btnCancelTheoryModal = document.getElementById("btnCancelTheoryModal");

    // Trick Modal elements
    this.trickModalTitle = document.getElementById("trickModalTitle");
    this.trickModalForm = document.getElementById("trickModalForm");
    this.trickModalTrickId = document.getElementById("trickModalTrickId");
    this.trickModalUnitSelect = document.getElementById("trickModalUnitSelect");
    this.trickModalTitleInput = document.getElementById("trickModalTitleInput");
    this.trickModalMnemonic = document.getElementById("trickModalMnemonic");
    this.trickModalExplanation = document.getElementById("trickModalExplanation");
    this.trickModalProTip = document.getElementById("trickModalProTip");
    this.btnCloseTrickModal = document.getElementById("btnCloseTrickModal");
    this.btnCancelTrickModal = document.getElementById("btnCancelTrickModal");

    // Note (Notepad) Modal elements
    this.noteModal = document.getElementById("noteModal");
    this.noteModalTitle = document.getElementById("noteModalTitle");
    this.noteModalForm = document.getElementById("noteModalForm");
    this.noteModalNoteId = document.getElementById("noteModalNoteId");
    this.noteModalUnitSelect = document.getElementById("noteModalUnitSelect");
    this.noteModalTitleInput = document.getElementById("noteModalTitleInput");
    this.noteModalContentTextarea = document.getElementById("noteModalContentTextarea");
    this.noteModalColorDots = document.getElementById("noteModalColorDots");
    this.btnCloseNoteModal = document.getElementById("btnCloseNoteModal");
    this.btnCancelNoteModal = document.getElementById("btnCancelNoteModal");
  }

  initHistory() {
    const state = store.getState();
    const initialSection = state.activeSection || "units";
    const initialUnit = state.selectedUnitId || "all";
    window.history.replaceState(
      { section: initialSection, unitId: initialUnit, paper: state.activePaper },
      "",
      `#${initialSection}`
    );

    window.addEventListener("popstate", (event) => {
      if (this._ignoreNextPopstate) {
        this._ignoreNextPopstate = false;
        return;
      }

      // 1. If any modal is open, close it on back
      if (this.isAnyModalOpen()) {
        this.closeAllModals(false);
        return;
      }

      // 2. If valid history state exists, restore it
      if (event.state && event.state.section) {
        if (event.state.paper && event.state.paper !== store.getState().activePaper) {
          store.setActivePaper(event.state.paper);
        }
        if (event.state.unitId !== undefined) {
          store.setSelectedUnitId(event.state.unitId);
        }
        store.setActiveSection(event.state.section);
      } else {
        // 3. Fallback: If on any non-units page, return to home page (Units)
        const currentSection = store.getState().activeSection;
        if (currentSection !== "units") {
          store.setSelectedUnitId("all");
          store.setActiveSection("units");
          window.history.replaceState({ section: "units", unitId: "all", paper: store.getState().activePaper }, "", "#units");
        }
      }
    });
  }

  isAnyModalOpen() {
    return (this.theoryModal && this.theoryModal.style.display === "flex") ||
           (this.trickModal && this.trickModal.style.display === "flex") ||
           (this.noteModal && this.noteModal.style.display === "flex");
  }

  pushModalState(modalName) {
    window.history.pushState({ isModal: true, modalName }, "", window.location.hash);
  }

  navigateToSection(section, unitId = null, pushHistory = true) {
    this.closeStickyDropdown();
    const state = store.getState();
    const targetUnitId = unitId !== null ? unitId : state.selectedUnitId;
    if (pushHistory) {
      window.history.pushState(
        { section, unitId: targetUnitId, paper: state.activePaper },
        "",
        `#${section}`
      );
    }
    if (unitId !== null) {
      store.setSelectedUnitId(targetUnitId);
    }
    store.setActiveSection(section);
    this.updateStickySummary();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  closeStickyDropdown() {
    if (this.stickyNavArea) {
      this.stickyNavArea.classList.remove("menu-open");
    }
    if (this.stickyHeaderDropdownBtn) {
      this.stickyHeaderDropdownBtn.setAttribute("aria-expanded", "false");
    }
  }

  updateStickySummary() {
    const state = store.getState();
    const isP1 = state.activePaper === "paper1";
    const paperLabel = isP1 ? "Paper 1" : "Paper 2";

    const sectionLabels = {
      units: "Units",
      theory: "Theory",
      tricks: "Tricks",
      questions: "Questions",
      notepad: "Notepad"
    };
    const sectionName = sectionLabels[state.activeSection] || state.activeSection;

    // Row 1 Badges: P 1/2 indicator and (section) badge
    if (this.headerPaperBadge) {
      this.headerPaperBadge.textContent = isP1 ? "P 1" : "P 2";
      this.headerPaperBadge.title = isP1 ? "Paper 1 active (Click to switch to Paper 2)" : "Paper 2 active (Click to switch to Paper 1)";
    }
    if (this.headerSectionBadge) {
      this.headerSectionBadge.textContent = `(${sectionName})`;
    }

    if (this.stickyHeaderSummaryText) {
      this.stickyHeaderSummaryText.textContent = `Notes World • ${paperLabel}`;
    }
    if (this.stickyActiveSectionBadge) {
      this.stickyActiveSectionBadge.textContent = sectionName;
    }
  }

  initTheme() {
    const theme = store.getState().theme;
    document.documentElement.setAttribute("data-theme", theme);
    this.updateThemeIcon(theme);
  }

  updateThemeIcon(theme) {
    const icon = theme === "dark" ? "🌙" : "☀️";
    if (this.themeIcon) {
      this.themeIcon.textContent = icon;
    }
    if (this.stickyThemeIcon) {
      this.stickyThemeIcon.textContent = icon;
    }
  }

  bindEvents() {
    // P 1/2 Toggle button in header Row 1
    if (this.headerPaperBadge) {
      this.headerPaperBadge.addEventListener("click", () => {
        const next = store.getState().activePaper === "paper1" ? "paper2" : "paper1";
        store.setActivePaper(next);
        this.updateStickySummary();
      });
    }

    // Paper 1 switch
    if (this.btnPaper1) {
      this.btnPaper1.addEventListener("click", () => {
        this.closeStickyDropdown();
        store.setActivePaper("paper1");
        this.updateStickySummary();
      });
    }

    // Paper 2 switch
    if (this.btnPaper2) {
      this.btnPaper2.addEventListener("click", () => {
        this.closeStickyDropdown();
        store.setActivePaper("paper2");
        this.updateStickySummary();
      });
    }

    // Theme toggle (Main brand title)
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener("click", () => {
        store.toggleTheme();
        this.updateThemeIcon(store.getState().theme);
      });
    }

    // Theme toggle (Sticky bar)
    if (this.stickyThemeToggleBtn) {
      this.stickyThemeToggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        store.toggleTheme();
        this.updateThemeIcon(store.getState().theme);
      });
    }

    // Cloud Sync Button (Main Header)
    if (this.cloudSyncBtn) {
      this.cloudSyncBtn.addEventListener("click", () => {
        this.triggerManualSync();
      });
    }

    // Cloud Sync Button (Sticky Bar)
    if (this.stickyCloudSyncBtn) {
      this.stickyCloudSyncBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.triggerManualSync();
      });
    }

    // Tab buttons (Units, Theory, Tricks, Questions, Notepad)
    this.navTabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const section = btn.getAttribute("data-section");
        this.navigateToSection(section, null, true);
      });
    });

    // In-app "← Units" back to home buttons
    document.querySelectorAll(".btn-back-to-home").forEach(btn => {
      btn.addEventListener("click", () => {
        this.navigateToSection("units", "all", true);
      });
    });

    // Unit filter dropdown
    this.unitSelectDropdown.addEventListener("change", (e) => {
      store.setSelectedUnitId(e.target.value);
    });

    // Search input
    this.globalSearchInput.addEventListener("input", (e) => {
      store.setSearchQuery(e.target.value);
    });

    // Create Note Form (Notepad)
    const createNoteForm = document.getElementById("createNoteForm");
    if (createNoteForm) {
      createNoteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleCreateNoteSubmit(createNoteForm);
      });
    }

    // Color Pickers
    document.querySelectorAll(".color-dots-group .color-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        const parent = dot.closest(".color-dots-group");
        parent.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
      });
    });

    // Modals: Open Add Theory
    if (this.btnHeaderAddTheory) {
      this.btnHeaderAddTheory.addEventListener("click", () => {
        this.openAddTheoryModal();
      });
    }

    // Modals: Open Add Trick
    if (this.btnHeaderAddTrick) {
      this.btnHeaderAddTrick.addEventListener("click", () => {
        this.openAddTrickModal();
      });
    }

    // Modals Close triggers
    const closeModals = () => this.closeAllModals();
    if (this.modalOverlay) this.modalOverlay.addEventListener("click", closeModals);
    if (this.btnCloseTheoryModal) this.btnCloseTheoryModal.addEventListener("click", closeModals);
    if (this.btnCancelTheoryModal) this.btnCancelTheoryModal.addEventListener("click", closeModals);
    if (this.btnCloseTrickModal) this.btnCloseTrickModal.addEventListener("click", closeModals);
    if (this.btnCancelTrickModal) this.btnCancelTrickModal.addEventListener("click", closeModals);
    if (this.btnCloseNoteModal) this.btnCloseNoteModal.addEventListener("click", closeModals);
    if (this.btnCancelNoteModal) this.btnCancelNoteModal.addEventListener("click", closeModals);

    // Theory Form Submit
    if (this.theoryModalForm) {
      this.theoryModalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleTheoryFormSubmit();
      });
    }

    // Trick Form Submit
    if (this.trickModalForm) {
      this.trickModalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleTrickFormSubmit();
      });
    }

    // Note (Notepad) Edit Form Submit
    if (this.noteModalForm) {
      this.noteModalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleNoteModalSubmit();
      });
    }

    // Reset All PYQs Button
    if (this.btnResetAllPyqs) {
      this.btnResetAllPyqs.addEventListener("click", () => {
        const state = store.getState();
        if (confirm("Reset all your question answers for this paper to re-practice?")) {
          questionsManager.resetAll(state.activePaper);
          showToast("All question answers reset!", "info");
        }
      });
    }

    // Escape key closes modals and header dropdown
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModals();
        this.closeStickyDropdown();
      }
    });

    // Toggle Header Dropdown (saves vertical space)
    if (this.stickyHeaderDropdownBtn) {
      this.stickyHeaderDropdownBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!this.stickyNavArea) return;
        const isOpen = this.stickyNavArea.classList.toggle("menu-open");
        this.stickyHeaderDropdownBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    }

    // Close header dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (this.stickyNavArea && this.stickyNavArea.classList.contains("menu-open")) {
        if (!this.stickyNavArea.contains(e.target)) {
          this.closeStickyDropdown();
        }
      }
    });
  }

  async triggerManualSync() {
    if (this.cloudSyncBtn) this.cloudSyncBtn.classList.add("syncing");
    if (this.stickyCloudSyncBtn) this.stickyCloudSyncBtn.classList.add("syncing");
    if (this.syncStatusText) this.syncStatusText.textContent = "Syncing...";
    try {
      const [notesUpdated, dataUpdated] = await Promise.all([
        notesManager.syncFromCloud(),
        dataManager.syncFromCloud()
      ]);
      if (this.cloudSyncBtn) this.cloudSyncBtn.classList.remove("syncing");
      if (this.stickyCloudSyncBtn) this.stickyCloudSyncBtn.classList.remove("syncing");
      if (this.syncStatusText) {
        this.syncStatusText.textContent = "Synced ✓";
        setTimeout(() => {
          if (this.syncStatusText) this.syncStatusText.textContent = "Sync";
        }, 2200);
      }
      showToast(notesUpdated || dataUpdated ? "Latest updates synced from cloud!" : "All notes and topics up to date!", "success");
    } catch (e) {
      if (this.cloudSyncBtn) this.cloudSyncBtn.classList.remove("syncing");
      if (this.stickyCloudSyncBtn) this.stickyCloudSyncBtn.classList.remove("syncing");
      if (this.syncStatusText) {
        this.syncStatusText.textContent = "Offline";
        setTimeout(() => {
          if (this.syncStatusText) this.syncStatusText.textContent = "Sync";
        }, 2200);
      }
      showToast("Cloud sync failed. Working in offline mode.", "info");
    }
  }

  // --- MODAL CONTROLLERS ---

  closeAllModals(triggerHistoryBack = true) {
    if (this.modalOverlay) this.modalOverlay.style.display = "none";
    if (this.theoryModal) this.theoryModal.style.display = "none";
    if (this.trickModal) this.trickModal.style.display = "none";
    if (this.noteModal) this.noteModal.style.display = "none";

    if (triggerHistoryBack && window.history.state && window.history.state.isModal) {
      this._ignoreNextPopstate = true;
      window.history.back();
    }
  }

  populateModalUnitOptions(selectElement, defaultUnitId) {
    const paperData = store.getCurrentPaperData();
    let html = "";
    paperData.units.forEach(u => {
      const selected = u.id === defaultUnitId ? "selected" : "";
      html += `<option value="${u.id}" ${selected}>Unit ${u.unitNumber}: ${escapeHtml(u.name)}</option>`;
    });
    selectElement.innerHTML = html;
  }

  openAddTheoryModal() {
    const state = store.getState();
    const paperData = store.getCurrentPaperData();
    const defaultUnitId = state.selectedUnitId !== "all" ? state.selectedUnitId : paperData.units[0].id;

    this.populateModalUnitOptions(this.theoryModalUnitSelect, defaultUnitId);
    this.theoryModalTitle.textContent = "➕ Add Theory Topic";
    this.theoryModalTopicId.value = "";
    this.theoryModalTopicTitle.value = "";
    this.theoryModalPoints.value = "";
    this.theoryModalUnitSelect.disabled = false;

    this.pushModalState("addTheory");
    this.modalOverlay.style.display = "block";
    this.theoryModal.style.display = "flex";
    this.theoryModalTopicTitle.focus();
  }

  openEditTheoryModal(topicId) {
    const state = store.getState();
    const match = dataManager.getTheoryTopic(state.activePaper, topicId);
    if (!match) return;

    const { topic, unit } = match;
    this.populateModalUnitOptions(this.theoryModalUnitSelect, unit.id);
    this.theoryModalTitle.textContent = "✏️ Edit Theory Topic";
    this.theoryModalTopicId.value = topic.id;
    this.theoryModalTopicTitle.value = topic.title;
    this.theoryModalPoints.value = (topic.points || []).map(p => `• ${p.replace(/^[•\s]+/, "")}`).join("\n");
    this.theoryModalUnitSelect.disabled = true; // unit locked during edit

    this.pushModalState("editTheory");
    this.modalOverlay.style.display = "block";
    this.theoryModal.style.display = "flex";
    this.theoryModalTopicTitle.focus();
  }

  handleTheoryFormSubmit() {
    const state = store.getState();
    const topicId = this.theoryModalTopicId.value;
    const unitId = this.theoryModalUnitSelect.value;
    const title = this.theoryModalTopicTitle.value.trim();
    const rawPoints = this.theoryModalPoints.value.split("\n").map(l => l.trim()).filter(Boolean);

    if (!title || rawPoints.length === 0) {
      showToast("Please enter title and at least one point!", "info");
      return;
    }

    if (topicId) {
      // Update
      dataManager.updateTheoryTopic(state.activePaper, topicId, { title, points: rawPoints });
      showToast("Theory topic updated!", "success");
    } else {
      // Add
      dataManager.addTheoryTopic(state.activePaper, unitId, { title, points: rawPoints });
      showToast("New theory topic added!", "success");
    }

    this.closeAllModals();
  }

  openAddTrickModal() {
    const state = store.getState();
    const paperData = store.getCurrentPaperData();
    const defaultUnitId = state.selectedUnitId !== "all" ? state.selectedUnitId : paperData.units[0].id;

    this.populateModalUnitOptions(this.trickModalUnitSelect, defaultUnitId);
    this.trickModalTitle.textContent = "➕ Add Short Trick";
    this.trickModalTrickId.value = "";
    this.trickModalTitleInput.value = "";
    this.trickModalMnemonic.value = "";
    this.trickModalExplanation.value = "";
    this.trickModalProTip.value = "";
    this.trickModalUnitSelect.disabled = false;

    this.pushModalState("addTrick");
    this.modalOverlay.style.display = "block";
    this.trickModal.style.display = "flex";
    this.trickModalTitleInput.focus();
  }

  openEditTrickModal(trickId) {
    const state = store.getState();
    const match = dataManager.getTrick(state.activePaper, trickId);
    if (!match) return;

    const { trick, unit } = match;
    this.populateModalUnitOptions(this.trickModalUnitSelect, unit.id);
    this.trickModalTitle.textContent = "✏️ Edit Short Trick";
    this.trickModalTrickId.value = trick.id;
    this.trickModalTitleInput.value = trick.title;
    this.trickModalMnemonic.value = trick.mnemonic;
    this.trickModalExplanation.value = trick.explanation;
    this.trickModalProTip.value = trick.proTip || "";
    this.trickModalUnitSelect.disabled = true;

    this.pushModalState("editTrick");
    this.modalOverlay.style.display = "block";
    this.trickModal.style.display = "flex";
    this.trickModalTitleInput.focus();
  }

  handleTrickFormSubmit() {
    const state = store.getState();
    const trickId = this.trickModalTrickId.value;
    const unitId = this.trickModalUnitSelect.value;
    const title = this.trickModalTitleInput.value.trim();
    const mnemonic = this.trickModalMnemonic.value.trim();
    const explanation = this.trickModalExplanation.value.trim();
    const proTip = this.trickModalProTip.value.trim();

    if (!title || !mnemonic || !explanation) {
      showToast("Please enter title, mnemonic, and explanation!", "info");
      return;
    }

    if (trickId) {
      // Update
      dataManager.updateTrick(state.activePaper, trickId, { title, mnemonic, explanation, proTip });
      showToast("Trick updated successfully!", "success");
    } else {
      // Add
      dataManager.addTrick(state.activePaper, unitId, { title, mnemonic, explanation, proTip });
      showToast("New trick added successfully!", "success");
    }

    this.closeAllModals();
  }

  populateNoteModalUnitOptions(selectElement, defaultUnitId) {
    const paperData = store.getCurrentPaperData();
    let html = `<option value="general" ${defaultUnitId === "general" || !defaultUnitId ? "selected" : ""}>General Points</option>`;
    paperData.units.forEach(u => {
      const selected = u.id === defaultUnitId ? "selected" : "";
      html += `<option value="${u.id}" ${selected}>Unit ${u.unitNumber}: ${escapeHtml(u.name)}</option>`;
    });
    selectElement.innerHTML = html;
  }

  openEditNoteModal(noteId) {
    const note = notesManager.notes.find(n => n.id === noteId);
    if (!note) return;

    this.populateNoteModalUnitOptions(this.noteModalUnitSelect, note.unitId);
    this.noteModalTitle.textContent = "✏️ Edit Study Point";
    this.noteModalNoteId.value = note.id;
    this.noteModalTitleInput.value = note.title || "";
    this.noteModalContentTextarea.value = note.content || "";

    // Set active color dot
    if (this.noteModalColorDots) {
      const noteColor = (note.color || "#8b5cf6").toLowerCase();
      let matched = false;
      const dots = this.noteModalColorDots.querySelectorAll(".color-dot");
      dots.forEach(d => {
        const dotColor = (d.getAttribute("data-color") || "").toLowerCase();
        if (dotColor === noteColor) {
          d.classList.add("active");
          matched = true;
        } else {
          d.classList.remove("active");
        }
      });
      if (!matched && dots.length > 0) {
        dots[0].classList.add("active");
      }
    }

    this.pushModalState("editNote");
    this.modalOverlay.style.display = "block";
    this.noteModal.style.display = "flex";
    this.noteModalTitleInput.focus();
  }

  handleNoteModalSubmit() {
    const noteId = this.noteModalNoteId.value;
    const unitSelect = this.noteModalUnitSelect;
    const title = this.noteModalTitleInput.value.trim() || "My Study Point";
    const content = this.noteModalContentTextarea.value.trim();
    const activeColorDot = this.noteModalColorDots?.querySelector(".color-dot.active");
    const color = activeColorDot ? activeColorDot.getAttribute("data-color") : "#8b5cf6";

    if (!content) {
      showToast("Please enter points or notes!", "info");
      return;
    }

    const unitId = unitSelect.value;
    const unitName = unitSelect.options[unitSelect.selectedIndex]?.text || "General Points";

    notesManager.updateNote(noteId, {
      title,
      content,
      unitId,
      unitName,
      color
    });

    this.closeAllModals();
    showToast("Point updated successfully!", "success");
  }

  // --- NOTEPAD CONTROLLER ---

  handleCreateNoteSubmit(form) {
    const titleInput = form.querySelector(".point-title-input");
    const unitSelect = form.querySelector(".point-unit-select");
    const textArea = form.querySelector(".point-textarea");
    const activeColorDot = form.querySelector(".color-dot.active");

    const title = titleInput.value.trim() || "My Study Point";
    const content = textArea.value.trim();
    const color = activeColorDot ? activeColorDot.getAttribute("data-color") : "#8b5cf6";

    if (!content) {
      showToast("Please enter points or notes!", "info");
      return;
    }

    const state = store.getState();
    const unitId = unitSelect.value;
    const unitName = unitSelect.options[unitSelect.selectedIndex]?.text || "General";

    notesManager.addNote({
      paper: state.activePaper,
      unitId,
      unitName,
      title,
      content,
      color
    });

    titleInput.value = "";
    textArea.value = "";
    showToast("Saved! Point displayed at the top.", "success");
  }

  render() {
    const state = store.getState();
    const paperData = store.getCurrentPaperData();
    const isP1 = state.activePaper === "paper1";

    // Theme class
    document.body.className = isP1 ? "paper-1-theme" : "paper-2-theme";

    // Update sticky summary bar text & badges
    this.updateStickySummary();

    // Paper Switcher Active States
    if (isP1) {
      this.btnPaper1.classList.add("active");
      this.btnPaper2.classList.remove("active");
    } else {
      this.btnPaper2.classList.add("active");
      this.btnPaper1.classList.remove("active");
    }

    // Tab buttons Active States
    this.navTabBtns.forEach(btn => {
      const sec = btn.getAttribute("data-section");
      if (sec === state.activeSection) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Filter Bar visibility
    const showFilterBar = state.activeSection === "theory" || state.activeSection === "tricks" || state.activeSection === "questions";
    this.filterBar.style.display = showFilterBar ? "flex" : "none";

    // Sections visibility
    this.unitsSection.style.display = state.activeSection === "units" ? "flex" : "none";
    this.theorySection.style.display = state.activeSection === "theory" ? "flex" : "none";
    this.tricksSection.style.display = state.activeSection === "tricks" ? "flex" : "none";
    this.questionsSection.style.display = state.activeSection === "questions" ? "flex" : "none";
    this.notepadSection.style.display = state.activeSection === "notepad" ? "flex" : "none";

    // Render Sub-components
    this.renderUnitDropdownOptions(paperData);
    this.renderUnitsSection(paperData);
    this.renderTheorySection(paperData);
    this.renderTricksSection(paperData);
    this.renderQuestionsSection();
    this.updateQuestionsBadge();
    this.renderNotepadSection();
    this.updateNotesBadge();
  }

  renderUnitDropdownOptions(paperData) {
    const state = store.getState();
    const isQuestions = state.activeSection === "questions";

    // Cache key to only rebuild options if paper or section mode changes
    const dropdownKey = `${state.activePaper}_${isQuestions ? "pyq" : "std"}`;
    if (this._currentDropdownKey === dropdownKey && this.unitSelectDropdown) {
      if (this.unitSelectDropdown.value !== state.selectedUnitId) {
        this.unitSelectDropdown.value = state.selectedUnitId;
      }
      return;
    }
    this._currentDropdownKey = dropdownKey;

    let allLabel = "All Units (1 to 10)";
    if (isQuestions) {
      const totalQ = questionsManager.getQuestions(state.activePaper, "all").length;
      allLabel = `All Units (${totalQ})`;
    }

    let optionsHtml = `<option value="all">${allLabel}</option>`;

    paperData.units.forEach(u => {
      const selected = state.selectedUnitId === u.id ? "selected" : "";
      let unitLabel = `Unit ${u.unitNumber}: ${escapeHtml(u.name)}`;
      if (isQuestions) {
        const count = questionsManager.getUnitQuestionCount(state.activePaper, u.id);
        unitLabel = `Unit ${u.unitNumber}: ${escapeHtml(u.name)} (${count})`;
      }
      optionsHtml += `<option value="${u.id}" ${selected}>${unitLabel}</option>`;
    });

    this.unitSelectDropdown.innerHTML = optionsHtml;
    this.unitSelectDropdown.value = state.selectedUnitId;

    // Notepad form unit select
    const formUnitSelect = document.getElementById("noteUnitSelect");
    if (formUnitSelect) {
      let formHtml = `<option value="general">General Points</option>`;
      paperData.units.forEach(u => {
        formHtml += `<option value="${u.id}">Unit ${u.unitNumber}: ${escapeHtml(u.name)}</option>`;
      });
      formUnitSelect.innerHTML = formHtml;
    }
  }

  renderUnitsSection(paperData) {
    const state = store.getState();
    const isP1 = state.activePaper === "paper1";
    this.unitsSectionTitle.textContent = isP1 ? "Paper 1 Units" : "Paper 2 (CS) Units";

    let html = "";
    paperData.units.forEach(u => {
      const theoryCount = u.theoryNotes ? u.theoryNotes.length : 0;
      const tricksCount = u.shortTricks ? u.shortTricks.length : 0;
      const questionsCount = questionsManager.getUnitQuestionCount(state.activePaper, u.id);

      html += `
        <div class="unit-card">
          <div class="unit-card-header">
            <div class="unit-icon">${u.icon || "📚"}</div>
            <div class="unit-info">
              <span class="unit-number-tag">Unit ${u.unitNumber}</span>
              <h3 class="unit-title">${escapeHtml(u.name)}</h3>
            </div>
          </div>
          <div class="unit-actions-row">
            <button class="unit-action-btn btn-go-theory" data-unit-id="${u.id}">
              📖 Theory (${theoryCount})
            </button>
            <button class="unit-action-btn btn-go-tricks" data-unit-id="${u.id}">
              💡 Tricks (${tricksCount})
            </button>
            <button class="unit-action-btn btn-go-questions" data-unit-id="${u.id}">
              🎯 PYQs (${questionsCount})
            </button>
          </div>
        </div>
      `;
    });

    this.unitsListContainer.innerHTML = html;

    // Attach click events
    this.unitsListContainer.querySelectorAll(".btn-go-theory").forEach(btn => {
      btn.addEventListener("click", () => {
        const unitId = btn.getAttribute("data-unit-id");
        this.navigateToSection("theory", unitId, true);
      });
    });

    this.unitsListContainer.querySelectorAll(".btn-go-tricks").forEach(btn => {
      btn.addEventListener("click", () => {
        const unitId = btn.getAttribute("data-unit-id");
        this.navigateToSection("tricks", unitId, true);
      });
    });

    this.unitsListContainer.querySelectorAll(".btn-go-questions").forEach(btn => {
      btn.addEventListener("click", () => {
        const unitId = btn.getAttribute("data-unit-id");
        this.navigateToSection("questions", unitId, true);
      });
    });
  }

  renderTheorySection(paperData) {
    const state = store.getState();
    let unitsList = paperData.units;

    if (state.selectedUnitId !== "all") {
      unitsList = unitsList.filter(u => u.id === state.selectedUnitId);
    }

    let allTheory = [];
    unitsList.forEach(u => {
      if (u.theoryNotes) {
        u.theoryNotes.forEach(t => {
          allTheory.push({
            ...t,
            unitNumber: u.unitNumber,
            unitName: u.name,
            unitId: u.id
          });
        });
      }
    });

    if (state.searchQuery) {
      const q = state.searchQuery;
      allTheory = allTheory.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.unitName.toLowerCase().includes(q) ||
        t.points.some(p => p.toLowerCase().includes(q))
      );
    }

    this.theoryCountBadge.textContent = `${allTheory.length} Topics`;

    if (allTheory.length === 0) {
      this.theoryCardsContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📖</div>
          <p>No theory notes matching the current filter.</p>
        </div>
      `;
      return;
    }

    let html = "";
    allTheory.forEach(item => {
      html += `
        <div class="theory-card" data-topic-id="${item.id}">
          <div class="theory-card-top">
            <span class="theory-unit-label">Unit ${item.unitNumber}: ${escapeHtml(item.unitName)}</span>
            <div class="card-action-btns">
              <button class="card-btn-action btn-toggle-mindmap" data-topic-id="${item.id}" title="Toggle Exam Mind Map & Diagram">
                🗺️ Mind Map
              </button>
              <button class="card-btn-action edit btn-edit-theory" data-topic-id="${item.id}" title="Edit Topic">
                ✏️ Edit
              </button>
              <button class="card-btn-action delete btn-delete-theory" data-topic-id="${item.id}" title="Delete Topic">
                🗑️ Delete
              </button>
            </div>
          </div>

          <h3 class="theory-topic-title">${escapeHtml(item.title)}</h3>

          <ul class="bullet-points-list">
            ${item.points.map(p => `
              <li class="bullet-item">
                <span class="bullet-marker"></span>
                <span class="bullet-text">${formatBulletText(p)}</span>
              </li>
            `).join("")}
          </ul>

          <div id="mindmap-${item.id}" class="theory-mindmap-container" style="display: none;">
            ${this.renderMindMapHtml(item)}
          </div>
        </div>
      `;
    });

    this.theoryCardsContainer.innerHTML = html;

    // Attach Toggle Mind Map events
    this.theoryCardsContainer.querySelectorAll(".btn-toggle-mindmap").forEach(btn => {
      btn.addEventListener("click", () => {
        const topicId = btn.getAttribute("data-topic-id");
        const mapContainer = document.getElementById(`mindmap-${topicId}`);
        if (!mapContainer) return;
        const isHidden = mapContainer.style.display === "none";
        mapContainer.style.display = isHidden ? "flex" : "none";
        btn.innerHTML = isHidden ? "✕ Close Map" : "🗺️ Mind Map";
      });
    });

    // Attach Edit and Delete events
    this.theoryCardsContainer.querySelectorAll(".btn-edit-theory").forEach(btn => {
      btn.addEventListener("click", () => {
        const topicId = btn.getAttribute("data-topic-id");
        this.openEditTheoryModal(topicId);
      });
    });

    this.theoryCardsContainer.querySelectorAll(".btn-delete-theory").forEach(btn => {
      btn.addEventListener("click", () => {
        const topicId = btn.getAttribute("data-topic-id");
        if (confirm("Are you sure you want to delete this theory topic?")) {
          dataManager.deleteTheoryTopic(state.activePaper, topicId);
          showToast("Theory topic deleted.", "info");
        }
      });
    });
  }

  renderMindMapHtml(item) {
    // 1. Explicit diagram object
    if (item.diagram) {
      if (item.diagram.type === "stack") {
        return `
          <div class="mindmap-top-bar">
            <span class="mindmap-heading">📐 ${escapeHtml(item.diagram.title || item.title)}</span>
            <span class="mindmap-badge">${escapeHtml(item.diagram.badge || "Layered Hierarchy")}</span>
          </div>
          <div class="diagram-stack-container">
            ${item.diagram.layers.map(l => `
              <div class="diagram-stack-layer" style="border-left: 4px solid ${l.accent || 'var(--accent-current)'};">
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                  <span class="diagram-layer-badge">${escapeHtml(l.badge || l.level)}</span>
                  <span style="font-weight: 700;">${escapeHtml(l.title)}</span>
                </div>
                ${l.desc ? `<span class="diagram-layer-info">${escapeHtml(l.desc)}</span>` : ''}
              </div>
            `).join("")}
          </div>
        `;
      }
      if (item.diagram.type === "flow") {
        return `
          <div class="mindmap-top-bar">
            <span class="mindmap-heading">🔄 ${escapeHtml(item.diagram.title || item.title)}</span>
            <span class="mindmap-badge">Sequential Pipeline</span>
          </div>
          <div class="diagram-flow-steps">
            ${item.diagram.steps.map((st, sIdx) => `
              <div class="diagram-flow-step">
                <span class="diagram-step-num">Step ${sIdx + 1}</span>
                <span class="diagram-step-title">${escapeHtml(st.title)}</span>
                ${st.desc ? `<span class="diagram-step-desc">${escapeHtml(st.desc)}</span>` : ''}
              </div>
              ${sIdx < item.diagram.steps.length - 1 ? '<span class="diagram-flow-arrow">➔</span>' : ''}
            `).join("")}
          </div>
        `;
      }
      if (item.diagram.type === "matrix") {
        return `
          <div class="mindmap-top-bar">
            <span class="mindmap-heading">⚡ ${escapeHtml(item.diagram.title || item.title)}</span>
            <span class="mindmap-badge">Relationship Matrix</span>
          </div>
          <div class="diagram-matrix-container">
            ${item.diagram.cells.map(c => `
              <div class="diagram-matrix-cell" style="border-top: 3px solid ${c.color || 'var(--accent-current)'};">
                <span class="diagram-matrix-tag">${escapeHtml(c.tag)}</span>
                <div class="diagram-matrix-body">${escapeHtml(c.content)}</div>
              </div>
            `).join("")}
          </div>
        `;
      }
    }

    // 2. Explicit mindMap object
    if (item.mindMap && item.mindMap.branches) {
      return `
        <div class="mindmap-top-bar">
          <span class="mindmap-heading">🗺️ ${escapeHtml(item.mindMap.centralTopic || item.title)}</span>
          <span class="mindmap-badge">Exam Mind Map</span>
        </div>
        <div class="mindmap-root-node">
          ⭐ ${escapeHtml(item.mindMap.centralTopic || item.title)}
        </div>
        <div class="mindmap-branches-grid">
          ${item.mindMap.branches.map(b => `
            <div class="mindmap-branch-card" style="border-top: 3px solid ${b.color || 'var(--accent-current)'};">
              <div class="mindmap-branch-header" style="color: ${b.color || 'var(--accent-current)'};">
                <span>${b.icon || '📌'}</span>
                <span>${escapeHtml(b.title)}</span>
              </div>
              <div class="mindmap-pill-list">
                ${(b.items || []).map(p => `
                  <div class="mindmap-node-pill" style="border-left-color: ${b.color || 'var(--accent-current)'};">
                    ${escapeHtml(p)}
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    // 3. Smart Automatic Infographic Mind Map Generator
    const branches = [];
    const colors = ["#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ec4899", "#3b82f6"];
    const icons = ["💡", "🎯", "📌", "⚡", "🔍", "📖"];

    (item.points || []).forEach((pt, idx) => {
      const clean = pt.replace(/^[•\-\*\s]+/, "").trim();
      const colonIdx = clean.indexOf(":");
      if (colonIdx > 0 && colonIdx < 60) {
        const title = clean.substring(0, colonIdx).trim();
        const desc = clean.substring(colonIdx + 1).trim();
        const subItems = desc.split(/;\s*|\.\s+(?=[A-Z0-9])/).map(s => s.trim()).filter(Boolean);
        branches.push({
          title,
          color: colors[branches.length % colors.length],
          icon: icons[branches.length % icons.length],
          items: subItems.length > 0 ? subItems.slice(0, 4) : [desc]
        });
      } else {
        branches.push({
          title: `Point ${idx + 1}`,
          color: colors[branches.length % colors.length],
          icon: icons[branches.length % icons.length],
          items: [clean]
        });
      }
    });

    return `
      <div class="mindmap-top-bar">
        <span class="mindmap-heading">🗺️ Exam-Oriented Infographic Mind Map</span>
        <span class="mindmap-badge">Visual Concept Map</span>
      </div>
      <div class="mindmap-root-node">
        🎯 ${escapeHtml(item.title)}
      </div>
      <div class="mindmap-branches-grid">
        ${branches.map(b => `
          <div class="mindmap-branch-card" style="border-top: 3px solid ${b.color};">
            <div class="mindmap-branch-header" style="color: ${b.color};">
              <span>${b.icon}</span>
              <span>${escapeHtml(b.title)}</span>
            </div>
            <div class="mindmap-pill-list">
              ${b.items.map(p => `
                <div class="mindmap-node-pill" style="border-left-color: ${b.color};">
                  ${escapeHtml(p)}
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  formatMnemonicCard(mnemonic, explanation, colorTheme) {
    const rawMnemonic = (mnemonic || "").trim();
    const rawExplanation = (explanation || "").trim();

    // 1. Separate hook vs catchphrase if colon or quotes present
    let hook = "";
    let phrase = "";

    const colonIdx = rawMnemonic.indexOf(":");
    if (colonIdx > 0 && colonIdx < rawMnemonic.length - 1) {
      hook = rawMnemonic.substring(0, colonIdx).trim();
      phrase = rawMnemonic.substring(colonIdx + 1).trim();
      if ((phrase.startsWith("'") && phrase.endsWith("'")) || (phrase.startsWith('"') && phrase.endsWith('"'))) {
        phrase = phrase.substring(1, phrase.length - 1).trim();
      }
    } else {
      hook = rawMnemonic;
    }

    // 2. Parse structured steps (→ or ->) or pairwise key-value logic (| or =)
    let explanationHtml = "";
    const hasArrow = rawExplanation.includes("→") || rawExplanation.includes("->");
    const hasPipe = rawExplanation.includes("|");

    if (hasArrow) {
      const steps = rawExplanation.split(/→|->/).map(s => s.trim().replace(/\.$/, "")).filter(Boolean);
      if (steps.length > 1) {
        const stepChips = steps.map((st, i) => `
          <div class="trick-step-chip">
            <span class="step-num">${i + 1}</span>
            <span class="step-text">${escapeHtml(st)}</span>
          </div>
        `).join('<span class="trick-flow-arrow">➔</span>');
        explanationHtml = `<div class="trick-flow-steps">${stepChips}</div>`;
      }
    } else if (hasPipe) {
      const pairs = rawExplanation.split("|").map(s => s.trim().replace(/\.$/, "")).filter(Boolean);
      if (pairs.length > 1) {
        const pairChips = pairs.map(pair => {
          if (pair.includes("=")) {
            const [k, v] = pair.split("=").map(s => s.trim());
            return `
              <div class="trick-pair-chip">
                <span class="pair-key">${escapeHtml(k)}</span>
                <span class="pair-arrow">➔</span>
                <span class="pair-val">${escapeHtml(v)}</span>
              </div>
            `;
          }
          return `<div class="trick-pair-chip"><span class="pair-val">${escapeHtml(pair)}</span></div>`;
        }).join("");
        explanationHtml = `<div class="trick-pair-grid">${pairChips}</div>`;
      }
    }

    if (!explanationHtml) {
      explanationHtml = `<div class="mnemonic-desc">${escapeHtml(rawExplanation)}</div>`;
    }

    return `
      <div class="mnemonic-box">
        <div class="mnemonic-top-row">
          <span class="mnemonic-hook-badge">💡 ${escapeHtml(hook)}</span>
          ${phrase ? `<div class="mnemonic-catchphrase">"${escapeHtml(phrase)}"</div>` : ""}
        </div>
        ${explanationHtml}
      </div>
    `;
  }

  renderTricksSection(paperData) {
    const state = store.getState();
    let unitsList = paperData.units;

    if (state.selectedUnitId !== "all") {
      unitsList = unitsList.filter(u => u.id === state.selectedUnitId);
    }

    let allTricks = [];
    unitsList.forEach(u => {
      if (u.shortTricks) {
        u.shortTricks.forEach(tr => {
          allTricks.push({
            ...tr,
            unitNumber: u.unitNumber,
            unitName: u.name,
            unitId: u.id
          });
        });
      }
    });

    if (state.searchQuery) {
      const q = state.searchQuery;
      allTricks = allTricks.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.mnemonic.toLowerCase().includes(q) ||
        t.explanation.toLowerCase().includes(q) ||
        (t.proTip && t.proTip.toLowerCase().includes(q)) ||
        t.unitName.toLowerCase().includes(q)
      );
    }

    this.tricksCountBadge.textContent = `${allTricks.length} Tricks`;

    if (allTricks.length === 0) {
      this.tricksContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">💡</div>
          <p>No short tricks matching the current filter.</p>
        </div>
      `;
      return;
    }

    const trickThemes = ["cyan", "violet", "emerald", "amber", "rose", "indigo", "teal", "fuchsia"];
    let html = "";
    allTricks.forEach((tr, trIdx) => {
      const colorTheme = trickThemes[trIdx % trickThemes.length];
      const mnemonicHtml = this.formatMnemonicCard(tr.mnemonic, tr.explanation, colorTheme);

      html += `
        <div class="trick-card theme-${colorTheme}" data-trick-id="${tr.id}">
          <div class="trick-header">
            <div>
              <span class="trick-unit-tag">Unit ${tr.unitNumber}: ${escapeHtml(tr.unitName)}</span>
              <h3 class="trick-title">${escapeHtml(tr.title)}</h3>
            </div>
            <div class="card-action-btns">
              <button class="card-btn-action copy-trick-btn" data-text="${escapeHtml(tr.mnemonic + ' - ' + tr.explanation)}">
                📋 Copy
              </button>
              <button class="card-btn-action edit btn-edit-trick" data-trick-id="${tr.id}" title="Edit Trick">
                ✏️ Edit
              </button>
              <button class="card-btn-action delete btn-delete-trick" data-trick-id="${tr.id}" title="Delete Trick">
                🗑️ Delete
              </button>
            </div>
          </div>

          ${mnemonicHtml}

          ${tr.proTip ? `
            <div class="trick-tip">
              <span class="trick-tip-icon">⚡</span>
              <div class="trick-tip-content">
                <strong class="trick-tip-title">Exam Pro-Tip:</strong>
                <span class="trick-tip-text">${escapeHtml(tr.proTip)}</span>
              </div>
            </div>
          ` : ""}
        </div>
      `;
    });

    this.tricksContainer.innerHTML = html;

    // Attach Copy, Edit, and Delete listeners
    this.tricksContainer.querySelectorAll(".copy-trick-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const text = btn.getAttribute("data-text");
        const originalHtml = btn.innerHTML;
        navigator.clipboard.writeText(text).then(() => {
          btn.innerHTML = "✓ Copied!";
          btn.classList.add("copied");
          showToast("Mnemonic copied to clipboard!", "success");
          setTimeout(() => {
            btn.innerHTML = originalHtml;
            btn.classList.remove("copied");
          }, 1800);
        }).catch(() => {
          showToast("Copied!", "success");
        });
      });
    });

    this.tricksContainer.querySelectorAll(".btn-edit-trick").forEach(btn => {
      btn.addEventListener("click", () => {
        const trickId = btn.getAttribute("data-trick-id");
        this.openEditTrickModal(trickId);
      });
    });

    this.tricksContainer.querySelectorAll(".btn-delete-trick").forEach(btn => {
      btn.addEventListener("click", () => {
        const trickId = btn.getAttribute("data-trick-id");
        if (confirm("Are you sure you want to delete this trick?")) {
          dataManager.deleteTrick(state.activePaper, trickId);
          showToast("Trick deleted.", "info");
        }
      });
    });
  }

  renderNotepadSection() {
    const state = store.getState();
    const isP1 = state.activePaper === "paper1";
    this.notepadSectionTitle.textContent = isP1 ? "My Points (Paper 1)" : "My Points (Paper 2 CS)";

    // Always sorted newest on top!
    const notes = notesManager.getNotesByPaper(state.activePaper);
    this.notesCountBadge.textContent = `${notes.length} Points`;

    if (notes.length === 0) {
      this.userNotesGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📝</div>
          <p>No study points added yet for this paper.</p>
          <p style="font-size: 0.8rem; color: var(--text-muted);">Write important formulas or revision points above. Newly added points will always appear at the top!</p>
        </div>
      `;
      return;
    }

    let html = "";
    notes.forEach(n => {
      const timeStr = new Date(n.updatedAt || n.createdAt).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });

      html += `
        <div class="saved-point-card" style="border-left: 3.5px solid ${n.color || 'var(--accent-current)'};">
          <div class="saved-point-header">
            <span class="saved-point-unit">${escapeHtml(n.unitName)}</span>
            <div class="saved-point-actions">
              <button class="card-btn-action edit btn-edit-point" data-id="${n.id}" title="Edit Point">
                ✏️ Edit
              </button>
              <button class="card-btn-action delete btn-delete-point" data-id="${n.id}" title="Delete Point">
                🗑️
              </button>
            </div>
          </div>
          <h4 class="saved-point-title">${escapeHtml(n.title)}</h4>
          <div class="saved-point-body">${escapeHtml(n.content)}</div>
          <div class="saved-point-footer">${timeStr}</div>
        </div>
      `;
    });

    this.userNotesGrid.innerHTML = html;

    // Edit buttons
    this.userNotesGrid.querySelectorAll(".btn-edit-point").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        this.openEditNoteModal(id);
      });
    });

    // Delete buttons
    this.userNotesGrid.querySelectorAll(".btn-delete-point").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        if (confirm("Delete this point?")) {
          notesManager.deleteNote(id);
          showToast("Point deleted", "info");
        }
      });
    });
  }

  updateNotesBadge() {
    const state = store.getState();
    const count = notesManager.getNotesByPaper(state.activePaper).length;
    if (this.notesCountBadge) {
      this.notesCountBadge.textContent = `${count} Points`;
    }
  }

  // --- QUESTIONS (PYQ) CONTROLLER ---

  renderQuestionsSection() {
    if (!this.questionsSection || !this.questionsCardsContainer) return;

    const state = store.getState();
    const isP1 = state.activePaper === "paper1";
    if (this.questionsSectionTitle) {
      this.questionsSectionTitle.textContent = isP1
        ? "Unit-wise PYQs (Paper 1)"
        : "Unit-wise PYQs (Paper 2 CS)";
    }

    const questions = questionsManager.getQuestions(
      state.activePaper,
      state.selectedUnitId,
      state.searchQuery
    );

    const totalCount = questions.length;
    if (this.questionsCountBadge) {
      this.questionsCountBadge.textContent = `(${totalCount} Questions)`;
    }

    // Update Stats Bar
    const stats = questionsManager.getStats(state.activePaper, state.selectedUnitId);
    if (this.pyqAttemptedPill) {
      this.pyqAttemptedPill.textContent = `📝 Attempted: ${stats.attempted}/${stats.total}`;
    }
    if (this.pyqScorePill) {
      this.pyqScorePill.textContent = `✓ Score: ${stats.correct}`;
    }
    if (this.pyqAccuracyPill) {
      this.pyqAccuracyPill.textContent = `🎯 Accuracy: ${stats.accuracy}%`;
    }

    if (questions.length === 0) {
      this.questionsCardsContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🎯</div>
          <p>No questions found matching your filter or search.</p>
          <p style="font-size: 0.8rem; color: var(--text-muted);">Try selecting 'All Units' from the filter dropdown or clearing your search keywords.</p>
        </div>
      `;
      return;
    }

    // Pagination slice for smooth performance
    const limit = this.questionsDisplayLimit || 15;
    const visibleQuestions = questions.slice(0, limit);

    let html = "";
    visibleQuestions.forEach((q, idx) => {
      const userAns = questionsManager.getAnswer(q.id);
      const isAnswered = !!userAns;
      const isDismissed = questionsManager.isDismissed(q.id);
      const isCorrect = userAns ? userAns.isCorrect : false;
      const selectedOption = userAns ? userAns.selectedOption : null;

      html += `
        <div class="question-card" id="q_card_${q.id}" style="${isAnswered ? (isCorrect ? 'border-left-color: #10b981;' : 'border-left-color: #ef4444;') : ''}">
          <div class="question-card-header">
            <div class="question-tags">
              <span class="question-unit-tag">Unit ${q.unitNumber}: ${escapeHtml(q.unitName)}</span>
              <span class="question-exam-tag">${escapeHtml(q.examSource)}</span>
            </div>
            ${isAnswered ? `<button class="btn-reset-question" data-qid="${q.id}" title="Re-attempt this question">↺ Re-try</button>` : ''}
          </div>

          <div class="question-statement">
            <span style="color: var(--accent-current); margin-right: 0.3rem;">Q${idx + 1}.</span>
            ${escapeHtml(q.question)}
          </div>

          <div class="question-options-list">
      `;

      q.options.forEach(opt => {
        const isSelected = selectedOption === opt.id;
        const isThisCorrect = q.correctOption === opt.id;
        let rowClass = "option-row";
        let statusBadge = "";

        if (isAnswered) {
          rowClass += " disabled";
          if (isSelected) {
            if (isCorrect) {
              rowClass += " correct-choice";
              statusBadge = `<span class="option-result-icon">✓ Correct!</span>`;
            } else {
              rowClass += " wrong-choice";
              statusBadge = `<span class="option-result-icon">✗ Your Choice</span>`;
            }
          } else if (isThisCorrect && !isCorrect) {
            rowClass += " reveal-correct";
            statusBadge = `<span class="option-result-icon">✓ Correct Answer</span>`;
          }
        }

        html += `
          <label class="${rowClass}" data-qid="${q.id}" data-opt="${opt.id}">
            <input type="radio" name="radio_${q.id}" value="${opt.id}" ${isSelected ? "checked" : ""} ${isAnswered ? "disabled" : ""}>
            <span class="option-letter-badge">${opt.id}</span>
            <span class="option-text">${escapeHtml(opt.text)}</span>
            ${statusBadge}
          </label>
        `;
      });

      html += `</div>`;

      // If answered, provide simple short explanation of each option
      if (isAnswered) {
        html += `
          <div class="option-breakdown-card">
            <div class="breakdown-header">
              <span class="breakdown-title">
                <span>💡</span>
                <span>${isCorrect ? "Correct! Detailed Option Breakdown:" : "Incorrect! Simple Explanation of Each Option:"}</span>
              </span>
            </div>

            <div class="breakdown-list">
        `;

        Object.keys(q.optionExplanations || {}).forEach(optKey => {
          const isRight = optKey === q.correctOption;
          const expText = q.optionExplanations[optKey];
          html += `
            <div class="breakdown-item ${isRight ? 'is-correct-exp' : ''}">
              <span class="breakdown-badge">Option ${optKey}</span>
              <span class="breakdown-text">${escapeHtml(expText)}</span>
            </div>
          `;
        });

        html += `
            </div>
            ${q.summaryExplanation ? `
              <div class="breakdown-summary">
                <strong>📌 Key Takeaway:</strong> ${escapeHtml(q.summaryExplanation)}
              </div>
            ` : ''}

            ${!isDismissed ? `
              <div class="next-question-action-bar">
                <button class="btn-next-question" data-qid="${q.id}" type="button">
                  Next Question ➡️
                </button>
              </div>
            ` : ''}
          </div>
        `;
      }

      html += `</div>`;
    });

    // If more questions exist beyond the limit, show Load More button
    if (totalCount > visibleQuestions.length) {
      html += `
        <div class="load-more-container" style="display: flex; justify-content: center; margin: 1.25rem 0;">
          <button id="btnLoadMoreQuestions" class="btn-load-more" type="button" style="background: var(--bg-card); border: 1.5px solid var(--accent-current); color: var(--accent-current); font-weight: 800; font-size: 0.88rem; padding: 0.75rem 1.6rem; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            📥 Load More Questions (Showing ${visibleQuestions.length} of ${totalCount})
          </button>
        </div>
      `;
    }

    this.questionsCardsContainer.innerHTML = html;

    // Attach Option Click listeners (for instant evaluation & explanation)
    this.questionsCardsContainer.querySelectorAll(".option-row:not(.disabled)").forEach(row => {
      row.addEventListener("click", (e) => {
        const qId = row.getAttribute("data-qid");
        const optId = row.getAttribute("data-opt");
        const radio = row.querySelector("input[type='radio']");
        if (radio) radio.checked = true;

        const res = questionsManager.submitAnswer(qId, optId);
        if (res) {
          if (res.isCorrect) {
            showToast("✓ Correct! Review explanation, then tap 'Next Question ➡️'", "success");
          } else {
            showToast(`✗ Incorrect. Option ${res.correctOption} is correct. Review explanation, then tap 'Next Question ➡️'`, "info");
          }
        }
      });
    });

    // Attach Next Question listeners (moves solved question to bottom)
    this.questionsCardsContainer.querySelectorAll(".btn-next-question").forEach(btn => {
      btn.addEventListener("click", () => {
        const qId = btn.getAttribute("data-qid");
        questionsManager.sendToBottom(qId);
        showToast("Question moved to bottom! Ready for next.", "info");
      });
    });

    // Attach Re-attempt listeners
    this.questionsCardsContainer.querySelectorAll(".btn-reset-question").forEach(btn => {
      btn.addEventListener("click", () => {
        const qId = btn.getAttribute("data-qid");
        questionsManager.resetQuestion(qId);
        showToast("Question reset! Moved back to top of queue.", "info");
      });
    });

    // Attach Load More listener
    const btnLoadMore = this.questionsCardsContainer.querySelector("#btnLoadMoreQuestions");
    if (btnLoadMore) {
      btnLoadMore.addEventListener("click", () => {
        this.questionsDisplayLimit = (this.questionsDisplayLimit || 15) + 15;
        this.renderQuestionsSection();
      });
    }
  }

  updateQuestionsBadge() {
    const state = store.getState();
    const totalInPaper = questionsManager.getQuestions(state.activePaper, "all").length;
    const currentFilterCount = questionsManager.getQuestions(state.activePaper, state.selectedUnitId, state.searchQuery).length;

    if (this.tabQuestionsCountBadge) {
      this.tabQuestionsCountBadge.textContent = `(${totalInPaper})`;
    }
    if (this.questionsCountBadge) {
      this.questionsCountBadge.textContent = `(${currentFilterCount} Questions)`;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.appController = new AppController();
});

// Remove any injected "Powered by Netlify" badges
function purgeNetlifyBadge() {
  const elements = document.querySelectorAll(
    '#netlify-badge, .netlify-badge, [data-netlify-badge], iframe[src*="netlify"], a[href*="netlify.com"]'
  );
  elements.forEach(el => {
    const text = (el.innerText || el.textContent || "").toLowerCase();
    if (text.includes("powered by netlify") || el.closest('#netlify-badge, [data-netlify-badge]')) {
      el.remove();
    }
  });
}
purgeNetlifyBadge();
setInterval(purgeNetlifyBadge, 1500);

