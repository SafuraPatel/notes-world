/**
 * RICH EDITOR - Notes World
 * Word-like rich text editor with formatting toolbar:
 * - Bold, Italic, Underline, Strikethrough
 * - Text color palette & Highlighter / marker palette
 * - Full Image support: Upload from device, URL, Clipboard Paste (Ctrl+V), Drag & Drop
 * - Smart client-side canvas compression for images
 * - Paste as-is preservation: math symbols, Greek letters, special characters, formulas, tables
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
          <!-- Optional Lists -->
          <button type="button" class="rich-tool-btn" data-command="insertUnorderedList" title="Bullet list">
            <span>•≡</span>
          </button>
          <button type="button" class="rich-tool-btn" data-command="insertOrderedList" title="Numbered list">
            <span>1≡</span>
          </button>
          <button type="button" class="rich-tool-btn" data-command="removeFormat" title="Clear Formatting">
            <span>🧹</span>
          </button>
        </div>

        <!-- IMAGE INSERTION GROUP -->
        <div class="rich-btn-group">
          <div class="rich-dropdown-wrap">
            <button type="button" class="rich-tool-btn rich-btn-insert-image" data-action="toggle-image-dialog" title="Insert Image / Diagram (Upload or URL)">
              <span>🖼️ Image</span>
            </button>
            <div class="rich-image-dialog" style="display: none;">
              <div class="rich-image-dialog-header">
                <span class="rich-image-dialog-title">🖼️ Add Image / Diagram</span>
                <button type="button" class="btn-close-image-dialog" title="Close">✕</button>
              </div>
              <div class="rich-image-dialog-body">
                <button type="button" class="btn-upload-file-trigger">
                  📁 Upload from Device
                </button>
                <div class="rich-dialog-divider">
                  <span>OR PASTE IMAGE URL</span>
                </div>
                <input type="url" class="rich-image-url-input" placeholder="https://example.com/diagram.png" autocomplete="off">
                <button type="button" class="btn-insert-image-url">
                  Insert Image URL
                </button>
              </div>
            </div>
          </div>
          <input type="file" class="rich-file-input" accept="image/*" style="display: none;">
        </div>
      </div>

      <div class="rich-editable-area" contenteditable="true" spellcheck="false"
        style="min-height: ${this.minHeight}px;"
        data-placeholder="${escapeAttr(this.placeholder)}"></div>
    `;

    this.toolbar = this.container.querySelector(".rich-toolbar");
    this.editorArea = this.container.querySelector(".rich-editable-area");
    this.fileInput = this.container.querySelector(".rich-file-input");
    this.imageDialog = this.container.querySelector(".rich-image-dialog");

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
    const imageDropdownBtn = this.toolbar.querySelector('[data-action="toggle-image-dialog"]');
    const imageDialog = this.imageDialog;

    const closeAllPalettes = () => {
      if (textPalette) textPalette.style.display = "none";
      if (highlightPalette) highlightPalette.style.display = "none";
      if (imageDialog) imageDialog.style.display = "none";
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

    // Image Dialog Actions
    if (imageDropdownBtn && imageDialog) {
      imageDropdownBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isShown = imageDialog.style.display === "block";
        closeAllPalettes();
        if (!isShown) imageDialog.style.display = "block";
      });

      const btnClose = imageDialog.querySelector(".btn-close-image-dialog");
      if (btnClose) {
        btnClose.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          imageDialog.style.display = "none";
        });
      }

      const btnUpload = imageDialog.querySelector(".btn-upload-file-trigger");
      if (btnUpload && this.fileInput) {
        btnUpload.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.fileInput.click();
        });
      }

      const urlInput = imageDialog.querySelector(".rich-image-url-input");
      const btnInsertUrl = imageDialog.querySelector(".btn-insert-image-url");
      if (btnInsertUrl && urlInput) {
        btnInsertUrl.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const url = urlInput.value.trim();
          if (url) {
            this.insertImage(url, "Inserted image");
            urlInput.value = "";
            imageDialog.style.display = "none";
          }
        });

        urlInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            btnInsertUrl.click();
          }
        });
      }

      // Prevent dialog clicks from closing itself
      imageDialog.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }

    // File Input change (device upload)
    if (this.fileInput) {
      this.fileInput.addEventListener("change", async (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          await this.compressAndInsertImage(file);
          this.fileInput.value = "";
          closeAllPalettes();
        }
      });
    }

    // Drag and Drop Images directly into editor area
    this.editorArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      this.editorArea.classList.add("drag-over");
    });

    this.editorArea.addEventListener("dragleave", () => {
      this.editorArea.classList.remove("drag-over");
    });

    this.editorArea.addEventListener("drop", async (e) => {
      e.preventDefault();
      this.editorArea.classList.remove("drag-over");
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        for (let i = 0; i < e.dataTransfer.files.length; i++) {
          const file = e.dataTransfer.files[i];
          if (file.type.startsWith("image/")) {
            await this.compressAndInsertImage(file);
          }
        }
      }
    });

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

    // Paste as-is handler: preserves special characters, Unicode, formatting, tables, and images
    this.editorArea.addEventListener("paste", async (e) => {
      const clipboardData = e.clipboardData || window.clipboardData;
      if (!clipboardData) return;

      // 1. Check for clipboard image files or items (screenshots, copied images)
      let imageFile = null;
      if (clipboardData.files && clipboardData.files.length > 0) {
        for (let i = 0; i < clipboardData.files.length; i++) {
          if (clipboardData.files[i].type.startsWith("image/")) {
            imageFile = clipboardData.files[i];
            break;
          }
        }
      }
      if (!imageFile && clipboardData.items) {
        for (let i = 0; i < clipboardData.items.length; i++) {
          if (clipboardData.items[i].type && clipboardData.items[i].type.startsWith("image/")) {
            imageFile = clipboardData.items[i].getAsFile();
            break;
          }
        }
      }

      if (imageFile) {
        e.preventDefault();
        await this.compressAndInsertImage(imageFile);
        return;
      }

      // 2. HTML content or Plain Text
      const html = clipboardData.getData("text/html");
      const text = clipboardData.getData("text/plain");

      if (html) {
        e.preventDefault();
        // Sanitize while fully preserving formatting, special characters, tables, and images
        const sanitized = sanitizePasteHtml(html);
        document.execCommand("insertHTML", false, sanitized);
      } else if (text) {
        e.preventDefault();
        // Plain text pasted as-is with all Unicode, special symbols, math operators, tabs preserved
        const formattedText = text
          .split("\n")
          .map(line => {
            if (!line.trim()) return "<div><br></div>";
            const preserved = line
              .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
              .replace(/^( +)/, m => "&nbsp;".repeat(m.length));
            return `<div>${escapeHtmlExceptEntities(preserved)}</div>`;
          })
          .join("");
        document.execCommand("insertHTML", false, formattedText);
      }

      if (this.onChange) this.onChange(this.getHtml());
    });
  }

  /**
   * Automatically compresses images using Canvas to keep localStorage light & fast
   */
  async compressImageFile(file, maxWidth = 1200, maxHeight = 1200, quality = 0.82) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            if (width > height) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            } else {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          // Use PNG if small transparent image, else JPEG
          const isSmallPng = file.type === "image/png" && file.size < 120000;
          const mime = isSmallPng ? "image/png" : "image/jpeg";
          const dataUrl = canvas.toDataURL(mime, quality);
          resolve(dataUrl);
        };
        img.onerror = () => resolve(e.target.result);
        img.src = e.target.result;
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
  }

  async compressAndInsertImage(file) {
    if (!file || !file.type.startsWith("image/")) return;
    try {
      const dataUrl = await this.compressImageFile(file);
      if (dataUrl) {
        this.insertImage(dataUrl, file.name || "Uploaded Image");
      }
    } catch (e) {
      console.error("Failed to compress/insert image:", e);
    }
  }

  insertImage(src, alt = "Image") {
    if (!src) return;
    this.editorArea.focus();
    const imgHtml = `<div class="editor-image-container"><img src="${src}" alt="${escapeAttr(alt)}" class="rich-editor-image" /></div><div><br></div>`;
    try {
      document.execCommand("insertHTML", false, imgHtml);
    } catch (e) {
      this.editorArea.innerHTML += imgHtml;
    }
    this.updateActiveStates();
    if (this.onChange) this.onChange(this.getHtml());
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
    if (typeof html === "string" && !/<[a-z][\s\S]*>/i.test(html)) {
      const formatted = html
        .split("\n")
        .map(line => line.trim() ? `<div>${escapeHtmlExceptEntities(line)}</div>` : `<div><br></div>`)
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

function escapeAttr(str) {
  if (!str) return "";
  return String(str).replace(/"/g, "&quot;");
}

function escapeHtmlExceptEntities(str) {
  if (!str) return "";
  // Do NOT escape already valid HTML entities like &alpha;, &#955;, &nbsp;, etc.
  return String(str)
    .replace(/&(?!(?:[a-zA-Z0-9]+|#[0-9]+|#[xX][0-9a-fA-F]+);)/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Sanitizes pasted HTML while preserving formatting:
 * Bold, Italic, Underline, Strikethrough, Highlights, Text Color, Paragraphs, Lists,
 * Special characters, Math symbols, Tables, and Images!
 */
export function sanitizePasteHtml(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Remove dangerous executable or external elements
  const forbidden = doc.querySelectorAll("script, style, link, meta, object, embed, iframe, applet");
  forbidden.forEach(el => el.remove());

  // Allowable elements: includes text, math, tables, and images
  const allowed = [
    "b", "strong", "i", "em", "u", "s", "strike", "mark", "span",
    "p", "br", "div", "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6",
    "blockquote", "code", "pre", "sub", "sup",
    "table", "thead", "tbody", "tfoot", "tr", "td", "th",
    "img", "a", "hr", "kbd", "var", "samp", "small"
  ];

  const allElements = doc.body.querySelectorAll("*");
  allElements.forEach(el => {
    const tagName = el.tagName.toLowerCase();

    if (!allowed.includes(tagName)) {
      const parent = el.parentNode;
      if (parent) {
        while (el.firstChild) {
          parent.insertBefore(el.firstChild, el);
        }
        parent.removeChild(el);
      }
      return;
    }

    // Special handling for images: preserve src, alt, title, and add rich-editor-image class
    if (tagName === "img") {
      const src = el.getAttribute("src") || "";
      const alt = el.getAttribute("alt") || "Image";
      const title = el.getAttribute("title") || "";
      const style = el.getAttribute("style") || "";

      while (el.attributes.length > 0) {
        el.removeAttribute(el.attributes[0].name);
      }

      if (src) {
        el.setAttribute("src", src);
        el.setAttribute("alt", alt);
        if (title) el.setAttribute("title", title);
        el.setAttribute("class", "rich-editor-image");
        if (style) el.setAttribute("style", style);
      } else {
        el.remove();
      }
      return;
    }

    // Special handling for links
    if (tagName === "a") {
      const href = el.getAttribute("href") || "#";
      while (el.attributes.length > 0) {
        el.removeAttribute(el.attributes[0].name);
      }
      el.setAttribute("href", href);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
      return;
    }

    // Special handling for table cells
    if (tagName === "td" || tagName === "th") {
      const colspan = el.getAttribute("colspan");
      const rowspan = el.getAttribute("rowspan");
      const style = el.getAttribute("style") || "";

      while (el.attributes.length > 0) {
        el.removeAttribute(el.attributes[0].name);
      }
      if (colspan) el.setAttribute("colspan", colspan);
      if (rowspan) el.setAttribute("rowspan", rowspan);
      if (style) el.setAttribute("style", style);
      return;
    }

    // Keep safe CSS styles (color, background, font-weight, font-style, text-align, text-decoration)
    const styleAttr = el.getAttribute("style");
    if (styleAttr) {
      const allowedStyles = [];
      const colorMatch = styleAttr.match(/(?:^|;)\s*color\s*:\s*([^;]+)/i);
      const bgMatch = styleAttr.match(/(?:^|;)\s*background(?:-color)?\s*:\s*([^;]+)/i);
      const weightMatch = styleAttr.match(/(?:^|;)\s*font-weight\s*:\s*([^;]+)/i);
      const styleMatch = styleAttr.match(/(?:^|;)\s*font-style\s*:\s*([^;]+)/i);
      const alignMatch = styleAttr.match(/(?:^|;)\s*text-align\s*:\s*([^;]+)/i);
      const decoMatch = styleAttr.match(/(?:^|;)\s*text-decoration\s*:\s*([^;]+)/i);

      if (colorMatch) allowedStyles.push(`color: ${colorMatch[1].trim()}`);
      if (bgMatch) allowedStyles.push(`background-color: ${bgMatch[1].trim()}`);
      if (weightMatch) allowedStyles.push(`font-weight: ${weightMatch[1].trim()}`);
      if (styleMatch) allowedStyles.push(`font-style: ${styleMatch[1].trim()}`);
      if (alignMatch) allowedStyles.push(`text-align: ${alignMatch[1].trim()}`);
      if (decoMatch) allowedStyles.push(`text-decoration: ${decoMatch[1].trim()}`);

      while (el.attributes.length > 0) {
        el.removeAttribute(el.attributes[0].name);
      }

      if (allowedStyles.length > 0) {
        el.setAttribute("style", allowedStyles.join("; "));
      }
    } else {
      while (el.attributes.length > 0) {
        el.removeAttribute(el.attributes[0].name);
      }
    }
  });

  return doc.body.innerHTML;
}
