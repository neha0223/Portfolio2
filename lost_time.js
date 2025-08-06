// ------------------------------
// Smooth Scrolling for Internal Links
// ------------------------------
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href) return;

        // Internal links start with '#'
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // External/page links: default behavior
    });
});

// ------------------------------
// Fullscreen Gallery with Arrows / Keys / Swipe
// ------------------------------
let images = [];
let currentIndex = 0;

const overlay = document.getElementById('fullscreenOverlay');
const fullscreenImg = document.getElementById('fullscreenImg');

// Optional: if you added nav buttons in your HTML as suggested
const leftBtn  = document.querySelector('.nav-btn.left');
const rightBtn = document.querySelector('.nav-btn.right');

// Build a flat list of all gallery images once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    images = Array.from(document.querySelectorAll('.gallery-image'));

    // If you *didn't* use inline onclick="openFullscreen(this)" in HTML,
    // uncomment this to attach clicks in JS:
    // images.forEach((img, idx) => {
    //     img.addEventListener('click', () => openFullscreen(img));
    // });

    // Wire arrow buttons if present
    if (leftBtn)  leftBtn.addEventListener('click', () => changeImage(-1));
    if (rightBtn) rightBtn.addEventListener('click', () => changeImage(1));
});

// Open Fullscreen from a clicked <img>
function openFullscreen(img) {
    if (!img) return;

    // Track which image is open
    currentIndex = images.indexOf(img);

    // Fallback in case the clicked element isn't in the images array
    if (currentIndex === -1) {
        // Try to match by src
        const found = images.findIndex(i => i.src === img.src);
        currentIndex = found !== -1 ? found : 0;
    }

    setFullscreenSrc(images[currentIndex]?.src || img.src);

    // Show overlay
    overlay.style.display = 'flex';

    // Optional: lock background scroll while modal open
    document.body.style.overflow = 'hidden';
}

// Helper to set the fullscreen image with safe sizing
function setFullscreenSrc(src) {
    if (!fullscreenImg) return;
    fullscreenImg.src = src;
    fullscreenImg.style.width = 'auto';
    fullscreenImg.style.height = 'auto';
    fullscreenImg.style.maxWidth = '95vw';
    fullscreenImg.style.maxHeight = '95vh';
    fullscreenImg.style.objectFit = 'contain';
    fullscreenImg.style.imageRendering = 'auto';
}

// Close Fullscreen
function closeFullscreen() {
    overlay.style.display = 'none';
    document.body.style.overflow = ''; // restore scroll
}

// Change image by direction: -1 = prev, 1 = next
function changeImage(direction) {
    if (!images.length) return;
    currentIndex = (currentIndex + direction + images.length) % images.length;
    setFullscreenSrc(images[currentIndex].src);
}

// Close fullscreen when clicking the backdrop (not image or buttons)
overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
        closeFullscreen();
    }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (overlay.style.display !== 'flex') return;
    if (e.key === 'Escape') closeFullscreen();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});

// Basic swipe support for touch devices
let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 40; // px

overlay.addEventListener('touchstart', (e) => {
    if (!e.touches || !e.touches.length) return;
    touchStartX = e.touches[0].clientX;
}, { passive: true });

overlay.addEventListener('touchmove', (e) => {
    if (!e.touches || !e.touches.length) return;
    touchEndX = e.touches[0].clientX;
}, { passive: true });

overlay.addEventListener('touchend', () => {
    const dx = touchEndX - touchStartX;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
        if (dx < 0) {
            // Swipe left -> next
            changeImage(1);
        } else {
            // Swipe right -> prev
            changeImage(-1);
        }
    }
    touchStartX = 0;
    touchEndX = 0;
});

// Expose functions if you're calling them inline from HTML
window.openFullscreen = openFullscreen;
window.closeFullscreen = closeFullscreen;
window.changeImage = changeImage;
