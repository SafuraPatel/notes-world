/**
 * APP.JS - Notes World Application Controller
 * Sections: Units, Theory (Attractive Bullet Notes), Tricks, Notepad (My Points)
 * Supports Edit, Delete, and Add More for Theory and Tricks with localStorage persistence!
 */

import { store } from "./store.js";
import { notesManager } from "./notesManager.js";
import { dataManager } from "./dataManager.js";
import { questionsManager } from "./questionsManager.js";
import { binManager } from "./binManager.js";
import { RichEditor } from "./richEditor.js";

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

function escapeAttr(str) {
  if (!str) return "";
  return String(str).replace(/"/g, "&quot;");
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

    // Bin Elements
    this.tabBinCountBadge = document.getElementById("tabBinCountBadge");
    this.binSection = document.getElementById("binSection");
    this.binCountBadge = document.getElementById("binCountBadge");
    this.btnEmptyBin = document.getElementById("btnEmptyBin");
    this.binSearchInput = document.getElementById("binSearchInput");
    this.binItemsContainer = document.getElementById("binItemsContainer");
    this.binPaperFilter = "all";
    this.binTypeFilter = "all";
    this.binSearchQuery = "";

    // Modals & Overlay
    this.modalOverlay = document.getElementById("modalOverlay");
    this.theoryModal = document.getElementById("theoryModal");
    this.trickModal = document.getElementById("trickModal");
    this.mindMapModal = document.getElementById("mindMapModal");

    // Duplicate Topic Prompt Modal
    this.duplicateTopicModal = document.getElementById("duplicateTopicModal");
    this.duplicateModalMessage = document.getElementById("duplicateModalMessage");
    this.btnCloseDuplicateModal = document.getElementById("btnCloseDuplicateModal");
    this.btnCancelDuplicateModal = document.getElementById("btnCancelDuplicateModal");
    this.btnConfirmDuplicateUpdate = document.getElementById("btnConfirmDuplicateUpdate");

    // Theory Modal elements
    this.theoryModalTitle = document.getElementById("theoryModalTitle");
    this.theoryModalForm = document.getElementById("theoryModalForm");
    this.theoryModalTopicId = document.getElementById("theoryModalTopicId");
    this.theoryModalUnitSelect = document.getElementById("theoryModalUnitSelect");
    this.theoryModalTopicTitle = document.getElementById("theoryModalTopicTitle");
    this.btnCloseTheoryModal = document.getElementById("btnCloseTheoryModal");
    this.btnCancelTheoryModal = document.getElementById("btnCancelTheoryModal");
    const theoryModalEditorBox = document.getElementById("theoryModalEditor");
    if (theoryModalEditorBox) {
      this.theoryModalEditor = new RichEditor({
        container: theoryModalEditorBox,
        placeholder: "Write or paste theory content here (No default bullets, paste as-is, bold, underline, color)...",
        minHeight: 140
      });
    }

    // Trick Modal elements
    this.trickModalTitle = document.getElementById("trickModalTitle");
    this.trickModalForm = document.getElementById("trickModalForm");
    this.trickModalTrickId = document.getElementById("trickModalTrickId");
    this.trickModalUnitSelect = document.getElementById("trickModalUnitSelect");
    this.trickModalTitleInput = document.getElementById("trickModalTitleInput");
    this.trickModalLightbulb = document.getElementById("trickModalLightbulb");
    this.trickModalMnemonic = document.getElementById("trickModalMnemonic");
    this.trickModalProTip = document.getElementById("trickModalProTip");
    this.btnCloseTrickModal = document.getElementById("btnCloseTrickModal");
    this.btnCancelTrickModal = document.getElementById("btnCancelTrickModal");
    const trickModalExpBox = document.getElementById("trickModalExplanationEditor");
    if (trickModalExpBox) {
      this.trickModalExplanationEditor = new RichEditor({
        container: trickModalExpBox,
        placeholder: "Write explanation, shortcut steps, or notes...",
        minHeight: 100
      });
    }

    // Note (Notepad) Modal elements
    this.noteModal = document.getElementById("noteModal");
    this.noteModalTitle = document.getElementById("noteModalTitle");
    this.noteModalForm = document.getElementById("noteModalForm");
    this.noteModalNoteId = document.getElementById("noteModalNoteId");
    this.noteModalUnitSelect = document.getElementById("noteModalUnitSelect");
    this.noteModalTitleInput = document.getElementById("noteModalTitleInput");
    this.noteModalColorDots = document.getElementById("noteModalColorDots");
    this.btnCloseNoteModal = document.getElementById("btnCloseNoteModal");
    this.btnCancelNoteModal = document.getElementById("btnCancelNoteModal");
    const noteModalEditorBox = document.getElementById("noteModalEditor");
    if (noteModalEditorBox) {
      this.noteModalEditor = new RichEditor({
        container: noteModalEditorBox,
        placeholder: "Write your study points and notes here...",
        minHeight: 130
      });
    }

    // Notepad Main Form Rich Editor
    const createNoteEditorBox = document.getElementById("createNoteEditor");
    if (createNoteEditorBox) {
      this.createNoteEditor = new RichEditor({
        container: createNoteEditorBox,
        placeholder: "Write your notes freely (paste as-is, underline, bold, highlight, change color like Word)...",
        minHeight: 90
      });
    }

    // Mind Map Modal elements
    this.mindMapModalTitle = document.getElementById("mindMapModalTitle");
    this.mindMapModalForm = document.getElementById("mindMapModalForm");
    this.mindMapTopicId = document.getElementById("mindMapTopicId");
    this.mindMapCentralTopic = document.getElementById("mindMapCentralTopic");
    this.mindMapBranchesContainer = document.getElementById("mindMapBranchesContainer");
    this.btnAddMindMapBranch = document.getElementById("btnAddMindMapBranch");
    this.btnCloseMindMapModal = document.getElementById("btnCloseMindMapModal");
    this.btnCancelMindMapModal = document.getElementById("btnCancelMindMapModal");
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
           (this.noteModal && this.noteModal.style.display === "flex") ||
           (this.mindMapModal && this.mindMapModal.style.display === "flex") ||
           (this.duplicateTopicModal && this.duplicateTopicModal.style.display === "flex");
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
      notepad: "Notepad",
      bin: "Recycle Bin"
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
      this.stickyHeaderSummaryText.textContent = `SMP • ${paperLabel}`;
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

    // Mind Map Modal triggers & submit
    if (this.btnCloseMindMapModal) this.btnCloseMindMapModal.addEventListener("click", closeModals);
    if (this.btnCancelMindMapModal) this.btnCancelMindMapModal.addEventListener("click", closeModals);
    if (this.mindMapModalForm) {
      this.mindMapModalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleMindMapModalSubmit();
      });
    }
    if (this.btnAddMindMapBranch) {
      this.btnAddMindMapBranch.addEventListener("click", () => {
        this.addMindMapBranchRow();
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

    // Duplicate Modal Actions
    if (this.btnCloseDuplicateModal) {
      this.btnCloseDuplicateModal.addEventListener("click", () => {
        this.closeDuplicateModal();
        if (this._onDuplicateCancel) this._onDuplicateCancel();
      });
    }
    if (this.btnCancelDuplicateModal) {
      this.btnCancelDuplicateModal.addEventListener("click", () => {
        this.closeDuplicateModal();
        if (this._onDuplicateCancel) this._onDuplicateCancel();
      });
    }

    // Check duplicate when topic title input loses focus (blur)
    if (this.theoryModalTopicTitle) {
      this.theoryModalTopicTitle.addEventListener("blur", () => {
        const title = this.theoryModalTopicTitle.value.trim();
        const topicId = this.theoryModalTopicId.value;
        if (!title) return;

        const state = store.getState();
        const existing = dataManager.findTheoryTopicByTitle(state.activePaper, title, topicId || null);
        if (existing) {
          showToast(`⚠️ Topic "${title}" already exists in ${existing.unit.name || existing.unit.title}. Duplicates not allowed.`, "warning");
        }
      });
    }

    // Bin: Empty Bin Button
    if (this.btnEmptyBin) {
      this.btnEmptyBin.addEventListener("click", () => {
        const filter = this.binPaperFilter || "all";
        const count = binManager.getCount(filter);
        if (count === 0) {
          showToast("Recycle Bin is already empty.", "info");
          return;
        }
        const scopeStr = filter === "all" ? "all" : filter === "paper1" ? "Paper 1" : "Paper 2";
        if (confirm(`Permanently delete ${count} ${scopeStr} item(s) from the Recycle Bin? This action cannot be undone.`)) {
          binManager.emptyBin(filter);
          showToast("Recycle Bin emptied.", "info");
        }
      });
    }

    // Bin: Paper Filter Pills
    document.querySelectorAll(".bin-paper-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".bin-paper-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.binPaperFilter = btn.getAttribute("data-paper") || "all";
        this.renderBinSection();
      });
    });

    // Bin: Type Filter Pills
    document.querySelectorAll(".bin-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".bin-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.binTypeFilter = btn.getAttribute("data-filter");
        this.renderBinSection();
      });
    });

    // Bin: Live Search Input
    if (this.binSearchInput) {
      this.binSearchInput.addEventListener("input", (e) => {
        this.binSearchQuery = e.target.value.trim();
        this.renderBinSection();
      });
    }

    // Subscribe to BinManager changes
    binManager.subscribe(() => {
      this.updateBinBadge();
      if (store.getState().activeSection === "bin") {
        this.renderBinSection();
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

    // Lightbox modal elements & Interactive Zoom Engine
    const lightboxModal = document.getElementById("imageLightboxModal");
    const lightboxViewport = document.getElementById("lightboxViewport");
    const lightboxImageWrap = document.getElementById("lightboxImageWrap");
    const lightboxImg = document.getElementById("lightboxImage");
    const btnCloseLightbox = document.getElementById("btnCloseLightbox");
    const btnZoomIn = document.getElementById("btnLightboxZoomIn");
    const btnZoomOut = document.getElementById("btnLightboxZoomOut");
    const btnZoomBadge = document.getElementById("btnLightboxZoomBadge");
    const zoomLevelText = document.getElementById("lightboxZoomLevel");
    const btnReset = document.getElementById("btnLightboxReset");
    const btnRotate = document.getElementById("btnLightboxRotate");
    const btnDownload = document.getElementById("btnLightboxDownload");

    // Zoom & Pan State
    let zoomScale = 1.0;
    let panX = 0;
    let panY = 0;
    let imgRotation = 0;
    let isPanning = false;
    let panStartX = 0;
    let panStartY = 0;
    let pointerDownX = 0;
    let pointerDownY = 0;
    let initialPinchDistance = 0;
    let initialPinchScale = 1.0;

    const updateTransform = () => {
      if (!lightboxImageWrap) return;
      lightboxImageWrap.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${zoomScale}) rotate(${imgRotation}deg)`;
      if (zoomLevelText) {
        zoomLevelText.textContent = `${Math.round(zoomScale * 100)}%`;
      }
      if (lightboxModal) {
        if (zoomScale > 1.05) {
          lightboxModal.classList.add("is-zoomed");
        } else {
          lightboxModal.classList.remove("is-zoomed");
        }
      }
    };

    const zoomTo = (newScale, focalX = null, focalY = null) => {
      // Clamped zoom range: 0.25x to 8.0x
      const clamped = Math.max(0.25, Math.min(8.0, Number(newScale.toFixed(2))));
      if (focalX !== null && focalY !== null && zoomScale > 0) {
        const factor = clamped / zoomScale;
        panX = focalX - (focalX - panX) * factor;
        panY = focalY - (focalY - panY) * factor;
      }
      zoomScale = clamped;
      if (zoomScale <= 1.05) {
        panX = 0;
        panY = 0;
      }
      updateTransform();
    };

    const zoomIn = () => zoomTo(zoomScale < 1.0 ? 1.0 : zoomScale * 1.25);
    const zoomOut = () => zoomTo(zoomScale / 1.25);
    const resetZoom = () => {
      zoomScale = 1.0;
      panX = 0;
      panY = 0;
      imgRotation = 0;
      updateTransform();
    };
    const rotateClockwise = () => {
      imgRotation = (imgRotation + 90) % 360;
      updateTransform();
    };

    const downloadCurrentImage = () => {
      if (!lightboxImg || !lightboxImg.src) return;
      try {
        const a = document.createElement("a");
        a.href = lightboxImg.src;
        a.download = lightboxImg.getAttribute("alt") ? `${lightboxImg.getAttribute("alt").replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png` : "smp-study-image.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (err) {
        window.open(lightboxImg.src, "_blank");
      }
    };

    const closeLightbox = () => {
      if (lightboxModal) {
        lightboxModal.style.display = "none";
        lightboxModal.classList.remove("is-zoomed", "is-dragging");
      }
      resetZoom();
      if (lightboxImg) lightboxImg.src = "";
    };

    const openLightbox = (src, altText = "Enlarged Diagram / Image") => {
      if (!lightboxModal || !lightboxImg || !src) return;
      lightboxImg.src = src;
      lightboxImg.alt = altText || "Enlarged Diagram / Image";
      resetZoom();
      lightboxModal.style.display = "flex";
    };

    // Toolbar button interactions
    if (btnCloseLightbox) btnCloseLightbox.addEventListener("click", closeLightbox);
    if (btnZoomIn) btnZoomIn.addEventListener("click", (e) => { e.stopPropagation(); zoomIn(); });
    if (btnZoomOut) btnZoomOut.addEventListener("click", (e) => { e.stopPropagation(); zoomOut(); });
    if (btnZoomBadge) btnZoomBadge.addEventListener("click", (e) => { e.stopPropagation(); resetZoom(); });
    if (btnReset) btnReset.addEventListener("click", (e) => { e.stopPropagation(); resetZoom(); });
    if (btnRotate) btnRotate.addEventListener("click", (e) => { e.stopPropagation(); rotateClockwise(); });
    if (btnDownload) btnDownload.addEventListener("click", (e) => { e.stopPropagation(); downloadCurrentImage(); });

    // Mouse Wheel Zoom (centered on mouse cursor position)
    if (lightboxViewport) {
      lightboxViewport.addEventListener("wheel", (e) => {
        e.preventDefault();
        const rect = lightboxViewport.getBoundingClientRect();
        const focalX = e.clientX - (rect.left + rect.width / 2);
        const focalY = e.clientY - (rect.top + rect.height / 2);
        const delta = e.deltaY < 0 ? 1.18 : 0.847;
        zoomTo(zoomScale * delta, focalX, focalY);
      }, { passive: false });

      // Click & Drag Pan when Zoomed
      lightboxViewport.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return; // Left-click only
        pointerDownX = e.clientX;
        pointerDownY = e.clientY;
        if (zoomScale > 1.05) {
          isPanning = true;
          panStartX = e.clientX - panX;
          panStartY = e.clientY - panY;
          if (lightboxImageWrap) lightboxImageWrap.classList.add("is-dragging");
          if (lightboxModal) lightboxModal.classList.add("is-dragging");
        }
      });

      // Double-click to toggle Zoom (1x <-> 2.5x)
      lightboxViewport.addEventListener("dblclick", (e) => {
        if (e.target.closest(".lightbox-toolbar") || e.target.closest(".lightbox-close-btn")) return;
        e.preventDefault();
        if (zoomScale > 1.1) {
          resetZoom();
        } else {
          const rect = lightboxViewport.getBoundingClientRect();
          const focalX = e.clientX - (rect.left + rect.width / 2);
          const focalY = e.clientY - (rect.top + rect.height / 2);
          zoomTo(2.5, focalX, focalY);
        }
      });

      // Click on backdrop to close (only if didn't drag)
      lightboxViewport.addEventListener("click", (e) => {
        const moved = Math.hypot(e.clientX - pointerDownX, e.clientY - pointerDownY);
        if (moved > 6) return; // was a drag/pan
        if (e.target === lightboxViewport || e.target === lightboxModal) {
          closeLightbox();
        } else if (e.target === lightboxImg && zoomScale <= 1.05) {
          // Single click on fit image zooms into 2x
          const rect = lightboxViewport.getBoundingClientRect();
          const focalX = e.clientX - (rect.left + rect.width / 2);
          const focalY = e.clientY - (rect.top + rect.height / 2);
          zoomTo(2.0, focalX, focalY);
        }
      });
    }

    window.addEventListener("mousemove", (e) => {
      if (!isPanning) return;
      panX = e.clientX - panStartX;
      panY = e.clientY - panStartY;
      updateTransform();
    });

    window.addEventListener("mouseup", () => {
      if (isPanning) {
        isPanning = false;
        if (lightboxImageWrap) lightboxImageWrap.classList.remove("is-dragging");
        if (lightboxModal) lightboxModal.classList.remove("is-dragging");
      }
    });

    // Mobile / Touchscreen Support: Pinch-to-zoom & 1-finger drag
    if (lightboxViewport) {
      lightboxViewport.addEventListener("touchstart", (e) => {
        if (e.touches.length === 2) {
          // Pinch start
          initialPinchDistance = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          initialPinchScale = zoomScale;
        } else if (e.touches.length === 1 && zoomScale > 1.05) {
          // Single-finger drag start
          isPanning = true;
          panStartX = e.touches[0].clientX - panX;
          panStartY = e.touches[0].clientY - panY;
          if (lightboxImageWrap) lightboxImageWrap.classList.add("is-dragging");
        }
      }, { passive: true });

      lightboxViewport.addEventListener("touchmove", (e) => {
        if (e.touches.length === 2 && initialPinchDistance > 0) {
          e.preventDefault();
          const currentDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          const ratio = currentDist / initialPinchDistance;
          zoomTo(initialPinchScale * ratio);
        } else if (e.touches.length === 1 && isPanning && zoomScale > 1.05) {
          e.preventDefault();
          panX = e.touches[0].clientX - panStartX;
          panY = e.touches[0].clientY - panStartY;
          updateTransform();
        }
      }, { passive: false });

      lightboxViewport.addEventListener("touchend", (e) => {
        if (e.touches.length < 2) {
          initialPinchDistance = 0;
        }
        if (e.touches.length === 0 && isPanning) {
          isPanning = false;
          if (lightboxImageWrap) lightboxImageWrap.classList.remove("is-dragging");
        }
      });
    }

    // Keyboard Controls: +, -, 0, R, Arrows, Escape
    window.addEventListener("keydown", (e) => {
      if (lightboxModal && lightboxModal.style.display === "flex") {
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopImmediatePropagation();
          closeLightbox();
          return;
        }
        if (e.key === "+" || e.key === "=") {
          e.preventDefault();
          zoomIn();
          return;
        }
        if (e.key === "-" || e.key === "_") {
          e.preventDefault();
          zoomOut();
          return;
        }
        if (e.key === "0" || e.key === "r" || e.key === "R") {
          e.preventDefault();
          resetZoom();
          return;
        }
        if (zoomScale > 1.05) {
          const step = 40;
          if (e.key === "ArrowLeft") { e.preventDefault(); panX += step; updateTransform(); return; }
          if (e.key === "ArrowRight") { e.preventDefault(); panX -= step; updateTransform(); return; }
          if (e.key === "ArrowUp") { e.preventDefault(); panY += step; updateTransform(); return; }
          if (e.key === "ArrowDown") { e.preventDefault(); panY -= step; updateTransform(); return; }
        }
      }

      // Default Escape handler for other modals
      if (e.key === "Escape") {
        closeModals();
        this.closeStickyDropdown();
      }
    });

    // Delegated click handler: Click ANY content image anywhere to zoom!
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "IMG" && !target.classList.contains("lightbox-img")) {
        // Exclude system UI buttons or header icons if any
        if (target.closest("button") || target.closest(".lightbox-toolbar") || target.closest(".brand-logo")) {
          return;
        }
        const src = target.getAttribute("src");
        if (src) {
          const alt = target.getAttribute("alt") || "Enlarged Diagram / Image";
          openLightbox(src, alt);
        }
      }
    });
  }

  async triggerManualSync() {
    if (this.cloudSyncBtn) this.cloudSyncBtn.classList.add("syncing");
    if (this.stickyCloudSyncBtn) this.stickyCloudSyncBtn.classList.add("syncing");
    if (this.syncStatusText) this.syncStatusText.textContent = "Syncing...";
    try {
      const [notesUpdated, dataUpdated, binUpdated] = await Promise.all([
        notesManager.syncFromCloud(),
        dataManager.syncFromCloud(),
        binManager.syncFromCloud()
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
    if (this.mindMapModal) this.mindMapModal.style.display = "none";
    if (this.duplicateTopicModal) this.duplicateTopicModal.style.display = "none";
    const lightboxModal = document.getElementById("imageLightboxModal");
    if (lightboxModal) lightboxModal.style.display = "none";

    if (triggerHistoryBack && window.history.state && window.history.state.isModal) {
      this._ignoreNextPopstate = true;
      window.history.back();
    }
  }

  closeDuplicateModal() {
    if (this.duplicateTopicModal) this.duplicateTopicModal.style.display = "none";
    if ((!this.theoryModal || this.theoryModal.style.display === "none") &&
        (!this.trickModal || this.trickModal.style.display === "none") &&
        (!this.noteModal || this.noteModal.style.display === "none")) {
      if (this.modalOverlay) this.modalOverlay.style.display = "none";
    }
  }

  showDuplicateTopicPrompt({ title, unitTitle, onCancel }) {
    this._onDuplicateCancel = onCancel;

    if (this.duplicateModalMessage) {
      this.duplicateModalMessage.innerHTML = `The topic <strong>"${escapeHtml(title)}"</strong> already exists in <em>${escapeHtml(unitTitle)}</em>.<br><br>Duplicate topics are not allowed in the same paper. Please choose a different topic title.`;
    }

    if (this.modalOverlay) this.modalOverlay.style.display = "block";
    if (this.duplicateTopicModal) this.duplicateTopicModal.style.display = "flex";
  }

  populateModalUnitOptions(selectElement, defaultUnitId) {
    const paperData = store.getCurrentPaperData();
    let html = `<option value="general" ${defaultUnitId === "general" ? "selected" : ""}>📌 General Points</option>`;
    paperData.units.forEach(u => {
      if (u.id === "general") return;
      const selected = u.id === defaultUnitId ? "selected" : "";
      html += `<option value="${u.id}" ${selected}>Unit ${u.unitNumber}: ${escapeHtml(u.name)}</option>`;
    });
    selectElement.innerHTML = html;
  }

  openAddTheoryModal() {
    const state = store.getState();
    const paperData = store.getCurrentPaperData();
    const defaultUnitId = state.selectedUnitId !== "all" ? state.selectedUnitId : "general";

    this.populateModalUnitOptions(this.theoryModalUnitSelect, defaultUnitId);
    this.theoryModalTitle.textContent = "➕ Add Theory Topic";
    this.theoryModalTopicId.value = "";
    this.theoryModalTopicTitle.value = "";
    if (this.theoryModalEditor) this.theoryModalEditor.clear();
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

    if (this.theoryModalEditor) {
      if (topic.content) {
        this.theoryModalEditor.setHtml(topic.content);
      } else if (topic.points && topic.points.length > 0) {
        const cleanLines = topic.points
          .map(p => `<div>${escapeHtml(p.replace(/^[•\-\*\s]+/, "").trim())}</div>`)
          .join("");
        this.theoryModalEditor.setHtml(cleanLines);
      } else {
        this.theoryModalEditor.clear();
      }
    }
    // Allow changing the unit while editing!
    this.theoryModalUnitSelect.disabled = false;

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
    const content = this.theoryModalEditor ? this.theoryModalEditor.getHtml() : "";

    if (!title || !content) {
      showToast("Please enter title and theory content!", "info");
      return;
    }

    // Check duplicate topic title: strictly do not allow duplicate topics
    const existing = dataManager.findTheoryTopicByTitle(state.activePaper, title, topicId || null);
    if (existing) {
      this.showDuplicateTopicPrompt({
        title,
        unitTitle: existing.unit.name || existing.unit.title,
        onCancel: () => {
          this.theoryModalTopicTitle.focus();
          this.theoryModalTopicTitle.select();
        }
      });
      return;
    }

    if (topicId) {
      const match = dataManager.getTheoryTopic(state.activePaper, topicId);
      const oldUnitId = match ? match.unit.id : null;
      const updated = dataManager.updateTheoryTopic(state.activePaper, topicId, { unitId, title, content });
      if (updated) {
        if (oldUnitId && oldUnitId !== unitId) {
          const newUnit = store.getCurrentPaperData().units.find(u => u.id === unitId);
          const uLabel = newUnit ? (newUnit.id === "general" ? "General Points" : `Unit ${newUnit.unitNumber}`) : "new unit";
          showToast(`Topic updated and moved to ${uLabel}!`, "success");
        } else {
          showToast("Theory topic updated successfully!", "success");
        }
      } else {
        showToast("Could not update topic.", "error");
      }
    } else {
      const added = dataManager.addTheoryTopic(state.activePaper, unitId, { title, content });
      if (added) {
        showToast("New theory topic added!", "success");
      } else {
        showToast("Could not add topic. Duplicate title exists.", "warning");
      }
    }

    this.closeAllModals();
  }

  openAddTrickModal() {
    const state = store.getState();
    const paperData = store.getCurrentPaperData();
    const defaultUnitId = state.selectedUnitId !== "all" ? state.selectedUnitId : "general";

    this.populateModalUnitOptions(this.trickModalUnitSelect, defaultUnitId);
    this.trickModalTitle.textContent = "➕ Add Short Trick";
    this.trickModalTrickId.value = "";
    this.trickModalTitleInput.value = "";
    if (this.trickModalLightbulb) this.trickModalLightbulb.value = "";
    this.trickModalMnemonic.value = "";
    if (this.trickModalExplanationEditor) this.trickModalExplanationEditor.clear();
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
    if (this.trickModalLightbulb) {
      this.trickModalLightbulb.value = trick.lightbulb || "";
    }
    this.trickModalMnemonic.value = trick.mnemonic;
    if (this.trickModalExplanationEditor) {
      this.trickModalExplanationEditor.setHtml(trick.explanation || "");
    }
    this.trickModalProTip.value = trick.proTip || "";
    // Allow changing unit while editing!
    this.trickModalUnitSelect.disabled = false;

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
    const lightbulb = this.trickModalLightbulb ? this.trickModalLightbulb.value.trim() : "";
    const mnemonic = this.trickModalMnemonic.value.trim();
    const explanation = this.trickModalExplanationEditor ? this.trickModalExplanationEditor.getHtml() : "";
    const proTip = this.trickModalProTip.value.trim();

    if (!title || !mnemonic || !explanation) {
      showToast("Please enter title, mnemonic, and explanation!", "info");
      return;
    }

    // Check duplicate trick: strictly prevent duplicates
    const existingTrick = dataManager.findTrickByTitle(state.activePaper, title, trickId || null);
    if (existingTrick) {
      showToast(`A trick titled "${title}" already exists in ${existingTrick.unit.name || existingTrick.unit.title}! Duplicates not allowed.`, "warning");
      this.trickModalTitleInput.focus();
      this.trickModalTitleInput.select();
      return;
    }

    if (trickId) {
      const match = dataManager.getTrick(state.activePaper, trickId);
      const oldUnitId = match ? match.unit.id : null;
      const updated = dataManager.updateTrick(state.activePaper, trickId, { unitId, title, lightbulb, mnemonic, explanation, proTip });
      if (updated) {
        if (oldUnitId && oldUnitId !== unitId) {
          const newUnit = store.getCurrentPaperData().units.find(u => u.id === unitId);
          const uLabel = newUnit ? (newUnit.id === "general" ? "General Points" : `Unit ${newUnit.unitNumber}`) : "new unit";
          showToast(`Trick updated and moved to ${uLabel}!`, "success");
        } else {
          showToast("Trick updated successfully!", "success");
        }
      } else {
        showToast("Could not update trick.", "error");
      }
    } else {
      const added = dataManager.addTrick(state.activePaper, unitId, { title, lightbulb, mnemonic, explanation, proTip });
      if (added) {
        showToast("New trick added successfully!", "success");
      } else {
        showToast("Could not add trick. Duplicate title exists.", "warning");
      }
    }

    this.closeAllModals();
  }

  populateNoteModalUnitOptions(selectElement, defaultUnitId) {
    const paperData = store.getCurrentPaperData();
    let html = `<option value="general" ${defaultUnitId === "general" || !defaultUnitId ? "selected" : ""}>📌 General Points</option>`;
    paperData.units.forEach(u => {
      if (u.id === "general") return;
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
    if (this.noteModalEditor) {
      this.noteModalEditor.setHtml(note.content || "");
    }

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
    const content = this.noteModalEditor ? this.noteModalEditor.getHtml() : "";
    const activeColorDot = this.noteModalColorDots?.querySelector(".color-dot.active");
    const color = activeColorDot ? activeColorDot.getAttribute("data-color") : "#8b5cf6";

    if (!content) {
      showToast("Please enter points or notes!", "info");
      return;
    }

    const state = store.getState();
    const existing = notesManager.findNoteByTitle(state.activePaper, title, noteId);
    if (existing) {
      showToast(`A study point titled "${title}" already exists! Duplicates not allowed.`, "warning");
      this.noteModalTitleInput.focus();
      this.noteModalTitleInput.select();
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
    const activeColorDot = form.querySelector(".color-dot.active");

    const title = titleInput.value.trim() || "My Study Point";
    const content = this.createNoteEditor ? this.createNoteEditor.getHtml() : "";
    const color = activeColorDot ? activeColorDot.getAttribute("data-color") : "#8b5cf6";

    if (!content) {
      showToast("Please enter points or notes!", "info");
      return;
    }

    const state = store.getState();
    const unitId = unitSelect.value;
    const unitName = unitSelect.options[unitSelect.selectedIndex]?.text || "General";

    // Duplicate check for study point: strictly prevent duplicates
    const existingNote = notesManager.findNoteByTitle(state.activePaper, title);
    if (existingNote) {
      showToast(`A study point titled "${title}" already exists! Duplicates not allowed.`, "warning");
      titleInput.focus();
      titleInput.select();
      return;
    }

    notesManager.addNote({
      paper: state.activePaper,
      unitId,
      unitName,
      title,
      content,
      color
    });

    titleInput.value = "";
    if (this.createNoteEditor) this.createNoteEditor.clear();
    showToast("Saved! Point displayed at the top.", "success");
  }

  // --- MIND MAP MODAL CONTROLLER ---

  openEditMindMapModal(topicId) {
    const state = store.getState();
    const match = dataManager.getTheoryTopic(state.activePaper, topicId);
    if (!match) return;

    const { topic } = match;
    this.mindMapTopicId.value = topic.id;
    const defaultTopicTitle = topic.mindMap?.centralTopic || topic.title;
    this.mindMapCentralTopic.value = defaultTopicTitle;

    // Build branch list
    let branches = [];
    if (topic.mindMap && Array.isArray(topic.mindMap.branches) && topic.mindMap.branches.length > 0) {
      branches = JSON.parse(JSON.stringify(topic.mindMap.branches));
    } else {
      const colors = ["#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ec4899", "#3b82f6"];
      const icons = ["💡", "🎯", "📌", "⚡", "🔍", "📖"];
      const pts = topic.points || [];
      if (pts.length > 0) {
        pts.forEach((pt, idx) => {
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
              title: `Branch ${idx + 1}`,
              color: colors[branches.length % colors.length],
              icon: icons[branches.length % icons.length],
              items: [clean]
            });
          }
        });
      } else {
        branches = [
          { title: "Core Concepts", color: "#8b5cf6", icon: "💡", items: ["Key Definition", "Importance"] },
          { title: "Applications", color: "#06b6d4", icon: "🎯", items: ["Exam Priority Area"] }
        ];
      }
    }

    this.renderMindMapBranchesEditor(branches);

    this.pushModalState("editMindMap");
    this.modalOverlay.style.display = "block";
    this.mindMapModal.style.display = "flex";
    this.mindMapCentralTopic.focus();
  }

  renderMindMapBranchesEditor(branches) {
    if (!this.mindMapBranchesContainer) return;
    this.mindMapBranchesContainer.innerHTML = "";
    branches.forEach(b => this.addMindMapBranchRow(b));
  }

  addMindMapBranchRow(branchData = {}) {
    if (!this.mindMapBranchesContainer) return;
    const colors = ["#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ec4899", "#3b82f6"];
    const icons = ["💡", "🎯", "📌", "⚡", "🔍", "📖", "🧠", "🚀"];
    const branchColor = branchData.color || colors[this.mindMapBranchesContainer.children.length % colors.length];
    const branchIcon = branchData.icon || "📌";
    const branchTitle = branchData.title || `Branch ${this.mindMapBranchesContainer.children.length + 1}`;
    const items = Array.isArray(branchData.items) ? branchData.items : ["Key detail"];

    const card = document.createElement("div");
    card.className = "mindmap-branch-edit-card";
    card.style.borderLeft = `4px solid ${branchColor}`;

    let iconOptionsHtml = icons.map(ic => `<option value="${ic}" ${ic === branchIcon ? 'selected' : ''}>${ic}</option>`).join("");

    let colorDotsHtml = colors.map(c => `
      <span class="color-dot ${c === branchColor ? 'active' : ''}" data-color="${c}" style="background: ${c};"></span>
    `).join("");

    card.innerHTML = `
      <div class="mindmap-branch-edit-header">
        <select class="mindmap-branch-icon-select" title="Branch Icon">
          ${iconOptionsHtml}
        </select>
        <input type="text" class="mindmap-branch-title-input" value="${escapeAttr(branchTitle)}" placeholder="Branch Title" required>
        <button type="button" class="btn-del-branch" title="Delete Branch">🗑️</button>
      </div>
      <div class="mindmap-color-picker-row">
        <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700;">Color:</span>
        ${colorDotsHtml}
      </div>
      <div class="mindmap-subitems-edit-list">
        <!-- Sub-items -->
      </div>
      <button type="button" class="btn-add-subitem">➕ Add Sub-Node</button>
    `;

    const subitemsList = card.querySelector(".mindmap-subitems-edit-list");
    const addSubItemBtn = card.querySelector(".btn-add-subitem");
    const delBranchBtn = card.querySelector(".btn-del-branch");

    const renderSubItem = (val = "") => {
      const row = document.createElement("div");
      row.className = "mindmap-subitem-edit-row";
      row.innerHTML = `
        <input type="text" class="mindmap-subitem-input" value="${escapeAttr(val)}" placeholder="Sub-node detail...">
        <button type="button" class="btn-del-subitem" title="Remove">✕</button>
      `;
      row.querySelector(".btn-del-subitem").addEventListener("click", () => row.remove());
      subitemsList.appendChild(row);
    };

    items.forEach(it => renderSubItem(it));

    addSubItemBtn.addEventListener("click", () => {
      renderSubItem("");
    });

    delBranchBtn.addEventListener("click", () => {
      if (this.mindMapBranchesContainer.children.length <= 1) {
        showToast("Mind map must have at least one branch!", "info");
        return;
      }
      card.remove();
    });

    // Color selector
    card.querySelectorAll(".color-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        card.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
        const chosenColor = dot.getAttribute("data-color");
        card.style.borderLeftColor = chosenColor;
      });
    });

    this.mindMapBranchesContainer.appendChild(card);
  }

  handleMindMapModalSubmit() {
    const state = store.getState();
    const topicId = this.mindMapTopicId.value;
    const centralTopic = this.mindMapCentralTopic.value.trim();

    if (!centralTopic) {
      showToast("Please enter a central topic!", "info");
      return;
    }

    const branches = [];
    const branchCards = this.mindMapBranchesContainer.querySelectorAll(".mindmap-branch-edit-card");
    branchCards.forEach(card => {
      const title = card.querySelector(".mindmap-branch-title-input").value.trim() || "Branch";
      const icon = card.querySelector(".mindmap-branch-icon-select").value || "📌";
      const activeDot = card.querySelector(".color-dot.active");
      const color = activeDot ? activeDot.getAttribute("data-color") : "#8b5cf6";

      const items = [];
      card.querySelectorAll(".mindmap-subitem-input").forEach(inp => {
        const val = inp.value.trim();
        if (val) items.push(val);
      });

      branches.push({
        title,
        icon,
        color,
        items: items.length > 0 ? items : [title]
      });
    });

    if (branches.length === 0) {
      showToast("Please add at least one branch!", "info");
      return;
    }

    const updated = dataManager.updateTopicMindMap(state.activePaper, topicId, {
      centralTopic,
      branches
    });

    if (updated) {
      showToast("Mind Map updated successfully!", "success");
      this.closeAllModals();
      this.renderTheorySection(store.getCurrentPaperData());
      setTimeout(() => {
        const mapContainer = document.getElementById(`mindmap-${topicId}`);
        const toggleBtn = document.querySelector(`.btn-toggle-mindmap[data-topic-id="${topicId}"]`);
        if (mapContainer) {
          mapContainer.style.display = "flex";
          if (toggleBtn) toggleBtn.innerHTML = "✕ Close Map";
        }
      }, 50);
    }
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

    // Filter Bar visibility (Units, Theory, Tricks, Questions)
    const showFilterBar = state.activeSection === "units" || state.activeSection === "theory" || state.activeSection === "tricks" || state.activeSection === "questions";
    if (this.filterBar) {
      this.filterBar.style.display = showFilterBar ? "flex" : "none";
    }

    // Sections visibility
    this.unitsSection.style.display = state.activeSection === "units" ? "flex" : "none";
    this.theorySection.style.display = state.activeSection === "theory" ? "flex" : "none";
    this.tricksSection.style.display = state.activeSection === "tricks" ? "flex" : "none";
    this.questionsSection.style.display = state.activeSection === "questions" ? "flex" : "none";
    this.notepadSection.style.display = state.activeSection === "notepad" ? "flex" : "none";
    if (this.binSection) {
      this.binSection.style.display = state.activeSection === "bin" ? "flex" : "none";
    }

    // Render Sub-components
    this.renderUnitDropdownOptions(paperData);
    this.renderUnitsSection(paperData);
    this.renderTheorySection(paperData);
    this.renderTricksSection(paperData);
    this.renderQuestionsSection();
    this.updateQuestionsBadge();
    this.renderNotepadSection();
    this.updateNotesBadge();
    this.updateBinBadge();
    if (state.activeSection === "bin") {
      this.renderBinSection();
    }
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
    const isGenSelected = state.selectedUnitId === "general" ? "selected" : "";
    optionsHtml += `<option value="general" ${isGenSelected}>📌 General Points</option>`;

    paperData.units.forEach(u => {
      if (u.id === "general") return;
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
      let formHtml = `<option value="general">📌 General Points</option>`;
      paperData.units.forEach(u => {
        if (u.id === "general") return;
        formHtml += `<option value="${u.id}">Unit ${u.unitNumber}: ${escapeHtml(u.name)}</option>`;
      });
      formUnitSelect.innerHTML = formHtml;
    }
  }

  renderUnitsSection(paperData) {
    const state = store.getState();
    const isP1 = state.activePaper === "paper1";
    this.unitsSectionTitle.textContent = isP1 ? "Paper 1 Units" : "Paper 2 (CS) Units";

    let unitsList = paperData.units;
    if (state.selectedUnitId !== "all") {
      unitsList = unitsList.filter(u => u.id === state.selectedUnitId);
    }
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      unitsList = unitsList.filter(u =>
        u.name.toLowerCase().includes(q) ||
        `unit ${u.unitNumber}`.includes(q) ||
        (u.theoryNotes && u.theoryNotes.some(t => t.title.toLowerCase().includes(q))) ||
        (u.shortTricks && u.shortTricks.some(tr => tr.title.toLowerCase().includes(q)))
      );
    }

    if (unitsList.length === 0) {
      this.unitsListContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📚</div>
          <p>No units matching the current filter or search.</p>
        </div>
      `;
      return;
    }

    let html = "";
    unitsList.forEach(u => {
      const theoryCount = u.theoryNotes ? u.theoryNotes.length : 0;
      const tricksCount = u.shortTricks ? u.shortTricks.length : 0;
      const isGeneral = u.id === "general";
      const unitTag = isGeneral ? "📌 General Points" : `Unit ${u.unitNumber}`;

      html += `
        <div class="unit-card">
          <div class="unit-card-header">
            <div class="unit-icon">${u.icon || (isGeneral ? "📌" : "📚")}</div>
            <div class="unit-info">
              <span class="unit-number-tag">${unitTag}</span>
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
            ${!isGeneral ? `
            <button class="unit-action-btn btn-go-questions" data-unit-id="${u.id}">
              🎯 PYQs (${questionsManager.getUnitQuestionCount(state.activePaper, u.id)})
            </button>` : ''}
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
      let contentHtml = "";
      if (item.content) {
        contentHtml = `<div class="theory-content-body">${item.content}</div>`;
      } else if (item.points && item.points.length > 0) {
        contentHtml = `
          <div class="theory-content-body">
            ${item.points.map(p => `
              <div class="theory-clean-point">${formatBulletText(p)}</div>
            `).join("")}
          </div>
        `;
      }

      html += `
        <div class="theory-card" data-topic-id="${item.id}">
          <div class="theory-card-top">
            <span class="theory-unit-label">${item.unitId === "general" ? "📌 General Points" : `Unit ${item.unitNumber}: ${escapeHtml(item.unitName)}`}</span>
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

          ${contentHtml}

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

    // Attach Edit Mind Map events
    this.theoryCardsContainer.querySelectorAll(".btn-edit-mindmap").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const topicId = btn.getAttribute("data-topic-id");
        this.openEditMindMapModal(topicId);
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
        if (confirm("Move this theory topic to Recycle Bin?")) {
          const deleted = dataManager.deleteTheoryTopic(state.activePaper, topicId);
          if (deleted) {
            binManager.addItem({
              type: "theory",
              typeName: "Theory Topic",
              paper: state.activePaper,
              unitId: deleted.unit.id,
              unitName: deleted.unit.name || deleted.unit.title,
              title: deleted.topic.title,
              data: deleted.topic
            });
            showToast(`Moved "${deleted.topic.title}" to Recycle Bin.`, "info");
          }
        }
      });
    });
  }

  renderMindMapHtml(item) {
    // 1. Explicit diagram object if not overridden by custom mindMap
    if (item.diagram && !item.mindMap) {
      if (item.diagram.type === "stack") {
        return `
          <div class="mindmap-top-bar">
            <span class="mindmap-heading">📐 ${escapeHtml(item.diagram.title || item.title)}</span>
            <div class="mindmap-top-actions">
              <button class="btn-edit-mindmap" data-topic-id="${item.id}" type="button" title="Edit Mind Map">
                ✏️ Edit Map
              </button>
              <span class="mindmap-badge">${escapeHtml(item.diagram.badge || "Layered Hierarchy")}</span>
            </div>
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
            <div class="mindmap-top-actions">
              <button class="btn-edit-mindmap" data-topic-id="${item.id}" type="button" title="Edit Mind Map">
                ✏️ Edit Map
              </button>
              <span class="mindmap-badge">Sequential Pipeline</span>
            </div>
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
            <div class="mindmap-top-actions">
              <button class="btn-edit-mindmap" data-topic-id="${item.id}" type="button" title="Edit Mind Map">
                ✏️ Edit Map
              </button>
              <span class="mindmap-badge">Relationship Matrix</span>
            </div>
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

    // 2. Mind Map: Colorful, smooth, modern infographic
    const centralTopic = item.mindMap?.centralTopic || item.title;
    let branches = [];

    if (item.mindMap && Array.isArray(item.mindMap.branches) && item.mindMap.branches.length > 0) {
      branches = item.mindMap.branches;
    } else {
      const colors = ["#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ec4899", "#3b82f6"];
      const icons = ["💡", "🎯", "📌", "⚡", "🔍", "📖"];
      const pts = item.points || [];
      pts.forEach((pt, idx) => {
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
            title: `Branch ${idx + 1}`,
            color: colors[branches.length % colors.length],
            icon: icons[branches.length % icons.length],
            items: [clean]
          });
        }
      });
      if (branches.length === 0) {
        branches = [
          { title: "Key Principles", color: "#8b5cf6", icon: "💡", items: ["Core Concepts"] }
        ];
      }
    }

    return `
      <div class="mindmap-top-bar">
        <span class="mindmap-heading">🗺️ ${escapeHtml(centralTopic)}</span>
        <div class="mindmap-top-actions">
          <button class="btn-edit-mindmap" data-topic-id="${item.id}" type="button" title="Edit Mind Map">
            ✏️ Edit Mind Map
          </button>
          <span class="mindmap-badge">Interactive Map</span>
        </div>
      </div>
      <div class="mindmap-root-node">
        <span>⭐</span>
        <span>${escapeHtml(centralTopic)}</span>
      </div>
      <div class="mindmap-tree-stem-wrap">
        <div class="mindmap-tree-stem"></div>
      </div>
      <div class="mindmap-branches-grid">
        ${branches.map(b => `
          <div class="mindmap-branch-card" style="border-top: 3.5px solid ${b.color || 'var(--accent-current)'};">
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
      const q = state.searchQuery.toLowerCase();
      allTricks = allTricks.filter(t =>
        t.title.toLowerCase().includes(q) ||
        (t.lightbulb && t.lightbulb.toLowerCase().includes(q)) ||
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
      const directBulbText = tr.lightbulb ? tr.lightbulb : `${tr.title} Key Trick`;

      html += `
        <div class="trick-card theme-${colorTheme}" data-trick-id="${tr.id}">
          <div class="trick-header">
            <div>
              <span class="trick-unit-tag">${tr.unitId === "general" ? "📌 General Points" : `Unit ${tr.unitNumber}: ${escapeHtml(tr.unitName)}`}</span>
              <h3 class="trick-title">${escapeHtml(tr.title)}</h3>
            </div>
            <div class="card-action-btns">
              <button class="card-btn-action copy-trick-btn" data-text="${escapeAttr(tr.mnemonic + ' - ' + tr.explanation)}">
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

          <!-- Direct 💡 Box: Displays directly written content without forced mnemonic splitting! -->
          <div class="trick-direct-lightbulb-box">
            <span class="trick-direct-bulb-icon">💡</span>
            <div class="trick-direct-bulb-text">${escapeHtml(directBulbText)}</div>
          </div>

          <!-- Mnemonic / Shortcut Rule: preserved completely -->
          <div class="trick-mnemonic-clean-box">
            <span class="trick-mnemonic-clean-title">Mnemonic / Shortcut Rule</span>
            <div class="trick-mnemonic-clean-rule">${escapeHtml(tr.mnemonic)}</div>
          </div>

          <!-- Explanation: formatted content without default bullets -->
          <div class="trick-explanation-clean-body">
            ${tr.explanation || ""}
          </div>

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
        if (confirm("Move this trick to Recycle Bin?")) {
          const deleted = dataManager.deleteTrick(state.activePaper, trickId);
          if (deleted) {
            binManager.addItem({
              type: "trick",
              typeName: "Short Trick",
              paper: state.activePaper,
              unitId: deleted.unit.id,
              unitName: deleted.unit.name || deleted.unit.title,
              title: deleted.trick.title,
              data: deleted.trick
            });
            showToast(`Moved "${deleted.trick.title}" to Recycle Bin.`, "info");
          }
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
      // Date ONLY display - No time!
      const dateObj = new Date(n.updatedAt || n.createdAt);
      const timeStr = isNaN(dateObj.getTime())
        ? ""
        : dateObj.toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric"
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
          <div class="saved-point-body">${n.content || ""}</div>
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
        if (confirm("Move this study point to Recycle Bin?")) {
          const deleted = notesManager.deleteNote(id);
          if (deleted) {
            binManager.addItem({
              type: "note",
              typeName: "Notepad Point",
              paper: deleted.paper || state.activePaper,
              unitId: deleted.unitId,
              unitName: deleted.unitName,
              title: deleted.title,
              data: deleted
            });
            showToast(`Moved "${deleted.title}" to Recycle Bin.`, "info");
          }
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

  // --- RECYCLE BIN CONTROLLER ---

  renderBinSection() {
    if (!this.binItemsContainer) return;
    const paperFilter = this.binPaperFilter || "all";
    const typeFilter = this.binTypeFilter || "all";
    const searchQuery = this.binSearchQuery || "";

    const items = binManager.getItems({
      paper: paperFilter,
      type: typeFilter,
      searchQuery: searchQuery
    });

    this.updateBinBadge();

    if (items.length === 0) {
      let emptyMsg = "Items you delete from Theory, Tricks, or Notepad will safely appear here.";
      if (searchQuery || (typeFilter && typeFilter !== "all") || (paperFilter && paperFilter !== "all")) {
        emptyMsg = "No deleted items match your search or filter.";
      }
      this.binItemsContainer.innerHTML = `
        <div class="bin-empty-state">
          <div class="bin-empty-icon">🗑️</div>
          <div class="bin-empty-title">Recycle Bin is Empty</div>
          <div class="bin-empty-desc">${emptyMsg}</div>
        </div>
      `;
      return;
    }

    let html = "";
    items.forEach(it => {
      const dateStr = this.formatRelativeTime(it.deletedAt);
      const paperBadge = it.paper === "paper1" ? "Paper 1" : "Paper 2";

      let preview = "";
      if (it.data) {
        if (it.data.content) {
          preview = it.data.content.replace(/<[^>]*>/g, " ").trim();
        } else if (it.data.points && Array.isArray(it.data.points)) {
          preview = it.data.points.join(" • ");
        } else if (it.data.mnemonic || it.data.explanation) {
          preview = (it.data.mnemonic ? `💡 ${it.data.mnemonic} ` : "") + (it.data.explanation ? it.data.explanation.replace(/<[^>]*>/g, " ") : "");
        }
      }
      if (!preview) preview = "No preview content available.";

      html += `
        <div class="bin-card" data-bin-id="${it.id}">
          <div class="bin-card-header">
            <div class="bin-card-tags">
              <span class="bin-type-pill ${it.type}">${escapeHtml(it.typeName || it.type)}</span>
              <span class="bin-paper-pill ${it.paper}">${paperBadge}</span>
              ${it.unitName ? `<span class="bin-unit-pill" title="${escapeHtml(it.unitName)}">${escapeHtml(it.unitName)}</span>` : ""}
            </div>
            <span class="bin-deleted-time" title="${escapeHtml(new Date(it.deletedAt).toLocaleString())}">🕒 ${dateStr}</span>
          </div>

          <h4 class="bin-card-title">${escapeHtml(it.title)}</h4>
          <div class="bin-card-preview">${escapeHtml(preview)}</div>

          <div class="bin-card-actions">
            <button class="btn-bin-delete" data-bin-id="${it.id}" type="button" title="Permanently Delete">
              🗑️ Delete Forever
            </button>
            <button class="btn-bin-restore" data-bin-id="${it.id}" type="button" title="Restore to original unit">
              ↺ Restore
            </button>
          </div>
        </div>
      `;
    });

    this.binItemsContainer.innerHTML = html;

    // Attach Restore listeners
    this.binItemsContainer.querySelectorAll(".btn-bin-restore").forEach(btn => {
      btn.addEventListener("click", () => {
        const binId = btn.getAttribute("data-bin-id");
        const restored = binManager.restoreItem(binId);
        if (restored) {
          const pName = restored.paper === "paper1" ? "Paper 1" : "Paper 2";
          const uName = restored.unitName ? ` (${restored.unitName})` : "";
          showToast(`Restored "${restored.title}" to ${pName}${uName}!`, "success");
          this.render();
        } else {
          showToast("Failed to restore item.", "error");
        }
      });
    });

    // Attach Permanent Delete listeners
    this.binItemsContainer.querySelectorAll(".btn-bin-delete").forEach(btn => {
      btn.addEventListener("click", () => {
        const binId = btn.getAttribute("data-bin-id");
        const item = items.find(i => i.id === binId);
        const name = item ? item.title : "this item";
        if (confirm(`Permanently delete "${name}"? This cannot be undone.`)) {
          binManager.deletePermanently(binId);
          showToast("Item permanently deleted.", "info");
        }
      });
    });
  }

  updateBinBadge() {
    const totalCount = binManager.getCount("all");
    const paperFilter = this.binPaperFilter || "all";
    const filteredCount = binManager.getCount(paperFilter);
    if (this.tabBinCountBadge) {
      this.tabBinCountBadge.textContent = `(${totalCount})`;
    }
    if (this.binCountBadge) {
      this.binCountBadge.textContent = `${filteredCount} ${filteredCount === 1 ? "Item" : "Items"}`;
    }
  }

  formatRelativeTime(isoString) {
    if (!isoString) return "";
    const diffMs = Date.now() - new Date(isoString).getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return new Date(isoString).toLocaleDateString(undefined, { month: "short", day: "numeric" });
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

      const matchedUnit = paperData.units.find(u => u.id === q.unitId);
      const unitLabel = matchedUnit ? matchedUnit.name : q.unitName;

      html += `
        <div class="question-card" id="q_card_${q.id}" style="${isAnswered ? (isCorrect ? 'border-left-color: #10b981;' : 'border-left-color: #ef4444;') : ''}">
          <div class="question-card-header">
            <div class="question-tags">
              <span class="question-unit-tag">Unit ${q.unitNumber}: ${escapeHtml(unitLabel)}</span>
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

