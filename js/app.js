/**
 * APP.JS - Notes World Application Controller
 * Sections: Units, Theory (Attractive Bullet Notes), Tricks, Notepad (My Points)
 * Supports Edit, Delete, and Add More for Theory and Tricks with localStorage persistence!
 */

import { store } from "./store.js";
import { notesManager } from "./notesManager.js";
import { dataManager } from "./dataManager.js";

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
    this.bindEvents();
    this.initTheme();
    this.render();

    // Reactive store updates
    store.subscribe(() => this.render());
    // Reactive notes updates
    notesManager.subscribe(() => {
      this.renderNotepadSection();
      this.updateNotesBadge();
    });
  }

  initElements() {
    // Header controls
    this.btnPaper1 = document.getElementById("btnPaper1");
    this.btnPaper2 = document.getElementById("btnPaper2");
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
    this.themeIcon = document.getElementById("themeIcon");
    this.navTabBtns = document.querySelectorAll(".tab-btn");

    // Filter bar
    this.filterBar = document.getElementById("filterBar");
    this.unitSelectDropdown = document.getElementById("unitSelectDropdown");
    this.globalSearchInput = document.getElementById("globalSearchInput");

    // Main sections
    this.unitsSection = document.getElementById("unitsSection");
    this.theorySection = document.getElementById("theorySection");
    this.tricksSection = document.getElementById("tricksSection");
    this.notepadSection = document.getElementById("notepadSection");

    // Dynamic containers
    this.unitsSectionTitle = document.getElementById("unitsSectionTitle");
    this.unitsListContainer = document.getElementById("unitsListContainer");
    this.theoryCardsContainer = document.getElementById("theoryCardsContainer");
    this.tricksContainer = document.getElementById("tricksContainer");
    this.userNotesGrid = document.getElementById("userNotesGrid");

    // Badges & Titles
    this.theoryCountBadge = document.getElementById("theoryCountBadge");
    this.tricksCountBadge = document.getElementById("tricksCountBadge");
    this.notesCountBadge = document.getElementById("notesCountBadge");
    this.notepadSectionTitle = document.getElementById("notepadSectionTitle");

    // Bottom Action Buttons
    this.btnOpenAddTheoryModal = document.getElementById("btnOpenAddTheoryModal");
    this.btnOpenAddTrickModal = document.getElementById("btnOpenAddTrickModal");

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
  }

  initTheme() {
    const theme = store.getState().theme;
    document.documentElement.setAttribute("data-theme", theme);
    this.updateThemeIcon(theme);
  }

  updateThemeIcon(theme) {
    if (this.themeIcon) {
      this.themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
    }
  }

  bindEvents() {
    // Paper 1 switch
    this.btnPaper1.addEventListener("click", () => {
      store.setActivePaper("paper1");
    });

    // Paper 2 switch
    this.btnPaper2.addEventListener("click", () => {
      store.setActivePaper("paper2");
    });

    // Theme toggle
    this.themeToggleBtn.addEventListener("click", () => {
      store.toggleTheme();
      this.updateThemeIcon(store.getState().theme);
    });

    // Tab buttons (Units, Theory, Tricks, Notepad)
    this.navTabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const section = btn.getAttribute("data-section");
        store.setActiveSection(section);
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
    if (this.btnOpenAddTheoryModal) {
      this.btnOpenAddTheoryModal.addEventListener("click", () => {
        this.openAddTheoryModal();
      });
    }

    // Modals: Open Add Trick
    if (this.btnOpenAddTrickModal) {
      this.btnOpenAddTrickModal.addEventListener("click", () => {
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
  }

  // --- MODAL CONTROLLERS ---

  closeAllModals() {
    if (this.modalOverlay) this.modalOverlay.style.display = "none";
    if (this.theoryModal) this.theoryModal.style.display = "none";
    if (this.trickModal) this.trickModal.style.display = "none";
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
    const showFilterBar = state.activeSection === "theory" || state.activeSection === "tricks";
    this.filterBar.style.display = showFilterBar ? "flex" : "none";

    // Sections visibility
    this.unitsSection.style.display = state.activeSection === "units" ? "flex" : "none";
    this.theorySection.style.display = state.activeSection === "theory" ? "flex" : "none";
    this.tricksSection.style.display = state.activeSection === "tricks" ? "flex" : "none";
    this.notepadSection.style.display = state.activeSection === "notepad" ? "flex" : "none";

    // Render Sub-components
    this.renderUnitDropdownOptions(paperData);
    this.renderUnitsSection(paperData);
    this.renderTheorySection(paperData);
    this.renderTricksSection(paperData);
    this.renderNotepadSection();
    this.updateNotesBadge();
  }

  renderUnitDropdownOptions(paperData) {
    const state = store.getState();
    let optionsHtml = `<option value="all">All Units (1 to 10)</option>`;

    paperData.units.forEach(u => {
      const selected = state.selectedUnitId === u.id ? "selected" : "";
      optionsHtml += `<option value="${u.id}" ${selected}>Unit ${u.unitNumber}: ${escapeHtml(u.name)}</option>`;
    });

    this.unitSelectDropdown.innerHTML = optionsHtml;

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
          </div>
        </div>
      `;
    });

    this.unitsListContainer.innerHTML = html;

    // Attach click events
    this.unitsListContainer.querySelectorAll(".btn-go-theory").forEach(btn => {
      btn.addEventListener("click", () => {
        const unitId = btn.getAttribute("data-unit-id");
        store.setSelectedUnitId(unitId);
        store.setActiveSection("theory");
      });
    });

    this.unitsListContainer.querySelectorAll(".btn-go-tricks").forEach(btn => {
      btn.addEventListener("click", () => {
        const unitId = btn.getAttribute("data-unit-id");
        store.setSelectedUnitId(unitId);
        store.setActiveSection("tricks");
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
        </div>
      `;
    });

    this.theoryCardsContainer.innerHTML = html;

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

    let html = "";
    allTricks.forEach(tr => {
      html += `
        <div class="trick-card" data-trick-id="${tr.id}">
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

          <div class="mnemonic-box">
            <span class="mnemonic-badge">High-Yield Mnemonic</span>
            <div class="mnemonic-text">${escapeHtml(tr.mnemonic)}</div>
            <div class="mnemonic-desc">${escapeHtml(tr.explanation)}</div>
          </div>

          ${tr.proTip ? `
            <div class="trick-tip">
              <span>⚡ Tip:</span>
              <span>${escapeHtml(tr.proTip)}</span>
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
        navigator.clipboard.writeText(text).then(() => {
          showToast("Mnemonic copied to clipboard!", "success");
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
            <button class="btn-delete-point" data-id="${n.id}" title="Delete Point">🗑️</button>
          </div>
          <h4 class="saved-point-title">${escapeHtml(n.title)}</h4>
          <div class="saved-point-body">${escapeHtml(n.content)}</div>
          <div class="saved-point-footer">${timeStr}</div>
        </div>
      `;
    });

    this.userNotesGrid.innerHTML = html;

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
}

document.addEventListener("DOMContentLoaded", () => {
  window.appController = new AppController();
});
