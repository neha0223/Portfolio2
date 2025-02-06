// Smooth Scrolling for Internal Links
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Check if it's an internal link (starts with #)
        if (href.startsWith('#')) {
            e.preventDefault(); // Prevent default for internal links
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        // If it's a link to another page, do nothing (default behavior occurs)
    });
});

// Fullscreen Image Modal Functionality
function openFullscreen(img) {
    const overlay = document.getElementById("fullscreenOverlay");
    const fullscreenImg = document.getElementById("fullscreenImg");

    fullscreenImg.src = img.src; // Set clicked image as fullscreen
    fullscreenImg.style.width = "auto";  
    fullscreenImg.style.height = "auto"; 
    fullscreenImg.style.maxWidth = "95vw";  
    fullscreenImg.style.maxHeight = "95vh"; 
    fullscreenImg.style.objectFit = "contain"; // Prevent cropping
    fullscreenImg.style.imageRendering = "auto"; // Let the browser handle it

    overlay.style.display = "flex"; // Show the overlay
}


// Close Fullscreen Image
function closeFullscreen() {
    document.getElementById("fullscreenOverlay").style.display = "none";
}

// Close fullscreen when clicking outside the image
document.getElementById("fullscreenOverlay").addEventListener("click", function(event) {
    if (event.target === this) {
        closeFullscreen();
    }
});

