/* -----------------------------------------
   SMOOTH SCROLLING FOR INTERNAL LINKS
----------------------------------------- */

function setupSidebarSmoothScroll() {
    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Internal links (#section)
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}


/* -----------------------------------------
   FULLSCREEN IMAGE MODAL FUNCTIONALITY
----------------------------------------- */

function openFullscreen(img) {
    const overlay = document.getElementById("fullscreenOverlay");
    const fullscreenImg = document.getElementById("fullscreenImg");

    if (!overlay || !fullscreenImg) return;

    fullscreenImg.src = img.src;
    fullscreenImg.style.width = "auto";
    fullscreenImg.style.height = "auto";
    fullscreenImg.style.maxWidth = "95vw";
    fullscreenImg.style.maxHeight = "95vh";
    fullscreenImg.style.objectFit = "contain";
    fullscreenImg.style.imageRendering = "auto";

    overlay.style.display = "flex";
}

function closeFullscreen() {
    const overlay = document.getElementById("fullscreenOverlay");
    if (overlay) overlay.style.display = "none";
}

// Add click-to-close only if overlay exists
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("fullscreenOverlay");
    if (overlay) {
        overlay.addEventListener("click", function (event) {
            if (event.target === this) closeFullscreen();
        });
    }
});


/* -----------------------------------------
   LOAD SIDEBAR DYNAMICALLY FROM sidebar.html
----------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebar-container');

    if (sidebarContainer) {
        fetch('sidebar.html')
            .then(res => res.text())
            .then(html => {
                sidebarContainer.innerHTML = html;
                setupSidebarSmoothScroll(); // Now links exist
            })
            .catch(err => console.error("Error loading sidebar:", err));
    }
});
/* -----------------------------------------
   DIGI CAMERA IMAGE CAROUSEL
----------------------------------------- */

const digiImages = [
    'images/UI_setup.jpg',
    'images/digi_pic.png',
    'images/digi_pic2.png',
    'images/digi_pic3.png',
    // add more here if you want
];

let digiIndex = 0;

function changeDigiImage(direction) {
    digiIndex = (digiIndex + direction + digiImages.length) % digiImages.length;

    const img = document.getElementById('digiGalleryImage');
    if (img) {
        img.src = digiImages[digiIndex];
    }
}
