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
