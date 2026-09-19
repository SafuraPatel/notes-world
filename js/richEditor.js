/**
 * RICH EDITOR - Notes World
 * Word-like rich text editor with formatting toolbar:
 * - Bold, Italic, Underline, Strikethrough
 * - Text color palette
 * - Highlighter / marker palette
 * - Paste as-is preservation (preserves formatting without forcing bullets)
 * - Optional list toggles (bullets / numbers only when requested)
 */

export class RichEditor {
  /**
   * Initializes a rich editor on a target element
   * @param {Object} options
   * @param {HTMLElement} options.container - The wrapper element where toolbar and editor will reside
   * @param {string} options.placeholder - Placeholder text
   * @param {string} options.initialContent - Initial HTML or text
   * @param {Function} options.onChange - Change callback
   * @param {number} options.minHeight - Minimum height in px
   */
  constructor({ container, placeholder = "Write your content here...", initialContent = "", onChange = null, minHeight = 120 }) {
    this.container = container;
    this.placeholder = placeholder;
    this.onChange = onChange;
    this.minHeight = minHeight;
    this.init();
    if (initialContent) {
      this.setHtml(initialContent);
    }
  }

  init() {
    this.container.classList.add("rich-editor-wrapper");
    this.container.innerHTML = `
      <div class="rich-toolbar" role="toolbar" aria-label="Text formatting toolbar">
        <div class="rich-btn-group">
          <button type="button" class="rich-tool-btn" data-command="bold" title="Bold (Ctrl+B)">
            <span style="font-weight: 800;">B</span>
          </button>
          <button type="button" class="rich-tool-btn" data-command="italic" title="Italic (Ctrl+I)">
            <span style="font-style: italic; font-weight: 600;">I</span>
          </button>
          <button type="button" class="rich-tool-btn" data-command="underline" title="Underline (Ctrl+U)">
            <span style="text-decoration: underline; font-weight: 600;">U</span>
          </button>
          <button type="button" class="rich-tool-btn" data-command="strikeThrough" title="Strikethrough">
            <span style="text-decoration: line-through;">S</span>
          </button>
        </div>

        <div class="rich-btn-group">
          <!-- Text Color Dropdown -->
          <div class="rich-dropdown-wrap">
            <button type="button" class="rich-tool-btn rich-dropdown-btn" data-action="toggle-color-picker" title="Text Color">
              <span class="color-indicator-icon" style="font-weight: 800; border-bottom: 3px solid var(--accent-current);">A</span>
              <span class="dropdown-caret">▾</span>
            </button>
            <div class="rich-color-palette text-colors-palette" style="display: none;">
              <span class="palette-title">Text Color</span>
              <div class="palette-grid">
                <button type="button" class="color-swatch default" data-color="inherit" title="Default"></button>
                <button type="button" class="color-swatch" data-color="#ef4444" style="background: #ef4444;" title="Red"></button>
                <button type="button" class="color-swatch" data-color="#f97316" style="background: #f97316;" title="Orange"></button>
                <button type="button" class="color-swatch" data-color="#f59e0b" style="background: #f59e0b;" title="Amber"></button>
                <button type="button" class="color-swatch" data-color="#10b981" style="background: #10b981;" title="Emerald"></button>
                <button type="button" class="color-swatch" data-color="#06b6d4" style="background: #06b6d4;" title="Cyan"></button>
                <button type="button" class="color-swatch" data-color="#3b82f6" style="background: #3b82f6;" title="Blue"></button>
                <button type="button" class="color-swatch" data-color="#8b5cf6" style="background: #8b5cf6;" title="Purple"></button>
                <button type="button" class="color-swatch" data-color="#ec4899" style="background: #ec4899;" title="Pink"></button>
                <button type="button" class="color-swatch" data-color="#ffffff" style="background: #ffffff;" title="White"></button>
              </div>
            </div>
          </div>

          <!-- Highlight / Marker Dropdown -->
          <div class="rich-dropdown-wrap">
            <button type="button" class="rich-tool-btn rich-dropdown-btn" data-action="toggle-highlight-picker" title="Highlight Marker">
              <span style="background: #fef08a; color: #1e293b; padding: 1px 4px; border-radius: 3px; font-weight: 700; font-size: 0.72rem;">🖍️</span>
              <span class="dropdown-caret">▾</span>
            </button>
            <div class="rich-color-palette highlight-colors-palette" style="display: none;">
              <span class="palette-title">Highlight Color</span>
              <div class="palette-grid">
                <button type="button" class="color-swatch default" data-highlight="transparent" title="No Highlight" style="background: transparent; border: 1px dashed var(--text-muted);"></button>
                <button type="button" class="color-swatch" data-highlight="#fef08a" style="background: #fef08a;" title="Yellow"></button>
                <button type="button" class="color-swatch" data-highlight="#bbf7d0" style="background: #bbf7d0;" title="Light Green"></button>
                <button type="button" class="color-swatch" data-highlight="#a5f3fc" style="background: #a5f3fc;" title="Cyan"></button>
                <button type="button" class="color-swatch" data-highlight="#fbcfe8" style="background: #fbcfe8;" title="Pink"></button>
                <button type="button" class="color-swatch" data-highlight="#fed7aa" style="background: #fed7aa;" title="Peach"></button>
                <button type="button" class="color-swatch" data-highlight="#ddd6fe" style="background: #ddd6fe;" title="Lavender"></button>
              </div>
            </div>
          </div>
        </div>

        <div class="rich-btn-group">
          <!-- Optional Lists: ONLY on explicit user click, never default! -->
          <button type="button" class="rich-tool-btn" data-command="insertUnorderedList" title="Bullet list (optional)">
            <span>•≡</span>
          </button>
          <button type="button" class="rich-tool-btn" data-command="insertOrderedList" title="Numbered list (optional)">
            <span>1≡</span>
          </button>
          <button type="button" class="rich-tool-btn" data-command="removeFormat" title="Clear Formatting">
            <span>🧹</span>
          </button>
        </div>
      </div>

      <div class="rich-editable-area" contenteditable="true" spellcheck="false"
        style="min-height: ${this.minHeight}px;"
        data-placeholder="${escapeAttr(this.placeholder)}"></div>
    `;

    this.toolbar = this.container.querySelector(".rich-toolbar");
    this.editorArea = this.container.querySelector(".rich-editable-area");

    this.bindEvents();
  }

  bindEvents() {
    // Toolbar button clicks
    this.toolbar.querySelectorAll(".rich-tool-btn[data-command]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const cmd = btn.getAttribute("data-command");
        this.executeCommand(cmd);
      });
    });

    // Dropdown toggles
    const textDropdownBtn = this.toolbar.querySelector('[data-action="toggle-color-picker"]');
    const textPalette = this.toolbar.querySelector(".text-colors-palette");
    const highlightDropdownBtn = this.toolbar.querySelector('[data-action="toggle-highlight-picker"]');
    const highlightPalette = this.toolbar.querySelector(".highlight-colors-palette");

    const closeAllPalettes = () => {
      if (textPalette) textPalette.style.display = "none";
      if (highlightPalette) highlightPalette.style.display = "none";
    };

    if (textDropdownBtn && textPalette) {
      textDropdownBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isShown = textPalette.style.display === "block";
        closeAllPalettes();
        if (!isShown) textPalette.style.display = "block";
      });

      textPalette.querySelectorAll(".color-swatch").forEach(swatch => {
        swatch.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const color = swatch.getAttribute("data-color");
          this.executeCommand("foreColor", color);
          // Update indicator
          const icon = textDropdownBtn.querySelector(".color-indicator-icon");
          if (icon) icon.style.borderBottomColor = color === "inherit" ? "var(--accent-current)" : color;
          closeAllPalettes();
        });
      });
    }

    if (highlightDropdownBtn && highlightPalette) {
      highlightDropdownBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isShown = highlightPalette.style.display === "block";
        closeAllPalettes();
        if (!isShown) highlightPalette.style.display = "block";
      });

      highlightPalette.querySelectorAll(".color-swatch").forEach(swatch => {
        swatch.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const color = swatch.getAttribute("data-highlight");
          if (color === "transparent") {
            this.executeCommand("hiliteColor", "transparent");
            this.executeCommand("removeFormat");
          } else {
            this.executeCommand("hiliteColor", color);
          }
          closeAllPalettes();
        });
      });
    }

    // Document click to close palettes
    document.addEventListener("click", () => {
      closeAllPalettes();
    });

    // Handle typing and change events
    this.editorArea.addEventListener("input", () => {
      this.updateActiveStates();
      if (this.onChange) this.onChange(this.getHtml());
    });

    this.editorArea.addEventListener("keyup", () => {
      this.updateActiveStates();
    });

    this.editorArea.addEventListener("mouseup", () => {
      this.updateActiveStates();
    });

    // Paste as-is handler: retains bold, italic, underline, highlight, colors, paragraphs
    // Prevents inserting default bullets!
    this.editorArea.addEventListener("paste", (e) => {
      e.preventDefault();
      const clipboardData = e.clipboardData || window.clipboardData;
      if (!clipboardData) return;

      const html = clipboardData.getData("text/html");
      const text = clipboardData.getData("text/plain");

      if (html) {
        // Sanitize and preserve rich styles (b, i, u, mark, color, p, br)
        const sanitized = sanitizePasteHtml(html);
        document.execCommand("insertHTML", false, sanitized);
      } else if (text) {
        // Plain text pasted as-is with preserved newlines (no forced bullets!)
        const formattedText = text
          .split("\n")
          .map(line => line ? `<div>${escapeHtml(line)}</div>` : `<div><br></div>`)
          .join("");
        document.execCommand("insertHTML", false, formattedText);
      }

      if (this.onChange) this.onChange(this.getHtml());
    });
  }

  executeCommand(command, value = null) {
    this.editorArea.focus();
    try {
      document.execCommand(command, false, value);
    } catch (err) {
      console.warn("execCommand failed:", command, err);
    }
    this.updateActiveStates();
    if (this.onChange) this.onChange(this.getHtml());
  }

  updateActiveStates() {
    ["bold", "italic", "underline", "strikeThrough", "insertUnorderedList", "insertOrderedList"].forEach(cmd => {
      const btn = this.toolbar.querySelector(`.rich-tool-btn[data-command="${cmd}"]`);
      if (btn) {
        try {
          if (document.queryCommandState(cmd)) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        } catch (e) {
          btn.classList.remove("active");
        }
      }
    });
  }

  getHtml() {
    let html = this.editorArea.innerHTML.trim();
    // If only empty break tags, return empty
    if (html === "<br>" || html === "<div><br></div>" || html === "<p><br></p>") {
      return "";
    }
    return html;
  }

  getText() {
    return this.editorArea.innerText.trim();
  }

  setHtml(html) {
    if (!html) {
      this.editorArea.innerHTML = "";
      return;
    }
    // If plain string without HTML tags, format into natural divs/paragraphs
    if (typeof html === "string" && !/<[a-z][\s\S]*>/i.test(html)) {
      const formatted = html
        .split("\n")
        .map(line => line.trim() ? `<div>${escapeHtml(line)}</div>` : `<div><br></div>`)
        .join("");
      this.editorArea.innerHTML = formatted;
    } else {
      this.editorArea.innerHTML = html;
    }
  }

  clear() {
    this.editorArea.innerHTML = "";
    if (this.onChange) this.onChange("");
  }

  focus() {
    this.editorArea.focus();
  }
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

/**
 * Sanitizes pasted HTML while preserving formatting:
 * Bold, Italic, Underline, Strikethrough, Highlights, Text Color, Paragraphs, Lists
 */
export function sanitizePasteHtml(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Remove script, style, link, meta, object, embed, iframe tags
  const forbidden = doc.querySelectorAll("script, style, link, meta, object, embed, iframe, applet");
  forbidden.forEach(el => el.remove());

  // Walk nodes and clean attributes, keeping styling attributes
  const allElements = doc.body.querySelectorAll("*");
  allElements.forEach(el => {
    const tagName = el.tagName.toLowerCase();
    // Allowable tags
    const allowed = [
      "b", "strong", "i", "em", "u", "s", "strike", "mark", "span",
      "p", "br", "div", "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6",
      "blockquote", "code", "pre", "sub", "sup"
    ];

    if (!allowed.includes(tagName)) {
      // Replace unwrapped tag with its contents
      const parent = el.parentNode;
      if (parent) {
        while (el.firstChild) {
          parent.insertBefore(el.firstChild, el);
        }
        parent.removeChild(el);
      }
      return;
    }

    // Keep only safe styles on span/p/div/mark (color, background-color, font-weight, text-decoration)
    const styleAttr = el.getAttribute("style");
    if (styleAttr) {
      const allowedStyles = [];
      const colorMatch = styleAttr.match(/(?:^|;)\s*color\s*:\s*([^;]+)/i);
      const bgMatch = styleAttr.match(/(?:^|;)\s*background(?:-color)?\s*:\s*([^;]+)/i);
      const weightMatch = styleAttr.match(/(?:^|;)\s*font-weight\s*:\s*([^;]+)/i);
      const decoMatch = styleAttr.match(/(?:^|;)\s*text-decoration\s*:\s*([^;]+)/i);

      if (colorMatch) allowedStyles.push(`color: ${colorMatch[1].trim()}`);
      if (bgMatch) allowedStyles.push(`background-color: ${bgMatch[1].trim()}`);
      if (weightMatch) allowedStyles.push(`font-weight: ${weightMatch[1].trim()}`);
      if (decoMatch) allowedStyles.push(`text-decoration: ${decoMatch[1].trim()}`);

      // Strip all attributes and retain only sanitized style
      while (el.attributes.length > 0) {
        el.removeAttribute(el.attributes[0].name);
      }

      if (allowedStyles.length > 0) {
        el.setAttribute("style", allowedStyles.join("; "));
      }
    } else {
      // Strip other attributes like class, id, on* handlers
      while (el.attributes.length > 0) {
        el.removeAttribute(el.attributes[0].name);
      }
    }
  });

  return doc.body.innerHTML;
}
