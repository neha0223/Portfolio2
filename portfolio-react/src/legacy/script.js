// src/legacy/script.js

let initialized = false;

/**
 * Call this once after the page/component mounts.
 * Safe to call multiple times (it will no-op after first init).
 */
export function initPortfolioJS(options = {}) {
  if (initialized) return;
  initialized = true;

  const {
    sidebarContainerId = "sidebar-container",
    sidebarUrl = "/sidebar.html", // put sidebar.html in /public to use this
    sidebarSelector = ".sidebar",
    enableFullscreenOverlayClose = true,
  } = options;

  // 1) Load sidebar HTML into the container (if present)
  loadSidebar({ sidebarContainerId, sidebarUrl })
    .then(() => {
      // 2) After sidebar is injected, attach smooth scrolling
      setupSidebarSmoothScroll(sidebarSelector);
    })
    .catch((err) => console.error("Error loading sidebar:", err));

  // 3) Fullscreen overlay click-to-close (if overlay exists)
  if (enableFullscreenOverlayClose) {
    setupFullscreenOverlayClose();
  }

  // 4) Expose functions globally only if your HTML uses onclick="..."
  // (If you don't use inline onclick handlers, you can remove these.)
  window.openFullscreen = openFullscreen;
  window.closeFullscreen = closeFullscreen;
  window.changeDigiImage = changeDigiImage;
}

/* -----------------------------------------
   SMOOTH SCROLLING FOR INTERNAL LINKS
----------------------------------------- */

function setupSidebarSmoothScroll(sidebarSelector = ".sidebar") {
  const sidebar = document.querySelector(sidebarSelector);
  if (!sidebar) return;

  // Use event delegation so we only attach ONE listener
  sidebar.addEventListener("click", (e) => {
    const anchor = e.target.closest("a");
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href) return;

    // Internal section links (#section)
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

/* -----------------------------------------
   FULLSCREEN IMAGE MODAL FUNCTIONALITY
----------------------------------------- */

function openFullscreen(img) {
  const overlay = document.getElementById("fullscreenOverlay");
  const fullscreenImg = document.getElementById("fullscreenImg");

  if (!overlay || !fullscreenImg || !img) return;

  fullscreenImg.src = img.src;

  Object.assign(fullscreenImg.style, {
    width: "auto",
    height: "auto",
    maxWidth: "95vw",
    maxHeight: "95vh",
    objectFit: "contain",
    imageRendering: "auto",
  });

  overlay.style.display = "flex";
}

function closeFullscreen() {
  const overlay = document.getElementById("fullscreenOverlay");
  if (overlay) overlay.style.display = "none";
}

function setupFullscreenOverlayClose() {
  const overlay = document.getElementById("fullscreenOverlay");
  if (!overlay) return;

  // Avoid duplicate listeners even if something re-inits accidentally
  if (overlay.dataset.listenerAttached === "true") return;
  overlay.dataset.listenerAttached = "true";

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeFullscreen();
  });
}

/* -----------------------------------------
   LOAD SIDEBAR DYNAMICALLY FROM sidebar.html
----------------------------------------- */

async function loadSidebar({ sidebarContainerId, sidebarUrl }) {
  const container = document.getElementById(sidebarContainerId);
  if (!container) return;

  // Prevent double-load
  if (container.dataset.sidebarLoaded === "true") return;
  container.dataset.sidebarLoaded = "true";

  const res = await fetch(sidebarUrl);
  if (!res.ok) throw new Error(`Failed to fetch ${sidebarUrl} (${res.status})`);

  const html = await res.text();
  container.innerHTML = html;
}

/* -----------------------------------------
   DIGI CAMERA IMAGE CAROUSEL
----------------------------------------- */

// IMPORTANT: In React/Vite, these should live in /public/assets/... and be referenced with /assets/...
const digiImages = [
  "/assets/images/UI_setup.jpg",
  "/assets/images/digi_pic.png",
  "/assets/images/digi_pic2.png",
  "/assets/images/digi_pic3.png",
];

let digiIndex = 0;

function changeDigiImage(direction) {
  digiIndex = (digiIndex + direction + digiImages.length) % digiImages.length;

  const img = document.getElementById("digiGalleryImage");
  if (img) {
    img.src = digiImages[digiIndex];
  }
}
