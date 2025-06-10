// navbar.js

const navbarPathsToTry = [
    '/navbar.html',            // absolute path to root
    './navbar.html',           // relative (current folder)
    '../navbar.html',          // one level up
    '../../navbar.html',       // two levels up
    '../../../navbar.html',    // three levels up
];

async function loadNavbarAndInitializeMobileMenu() {
    for (const path of navbarPathsToTry) {
        try {
            const res = await fetch(path);
            if (res.ok) {
                const data = await res.text();
                document.getElementById("navbar").innerHTML = data;

                // --- Mobile Menu Initialization AFTER navbar is loaded ---
                const menuBtn = document.getElementById('menu-toggle-btn');
                const navMenu = document.getElementById('main-nav');
                const body = document.body; // To disable scroll when menu is open

                if (menuBtn && navMenu && body) { // Ensure elements exist
                    menuBtn.addEventListener('click', () => {
                        toggleMobileMenu(menuBtn, navMenu, body);
                    });

                    // Event listener for clicking outside the menu to close it
                    // We listen on the whole document
                    document.addEventListener('click', (event) => {
                        // Check if the click is outside the nav menu AND not on the menu button itself
                        if (navMenu.classList.contains('active') && !navMenu.contains(event.target) && !menuBtn.contains(event.target)) {
                            closeMobileMenu(menuBtn, navMenu, body);
                        }
                    });

                    // Event listener for clicks on navigation links (to close menu after selection)
                    const navLinks = document.querySelectorAll('#main-nav .nav-links a');
                    navLinks.forEach(link => {
                        link.addEventListener('click', () => {
                            closeMobileMenu(menuBtn, navMenu, body);
                        });
                    });

                    // Ensure the dark mode toggle button in the mobile menu closes the menu
                    const darkModeToggleBtn = document.querySelector('#main-nav .btn-toggle');
                    if (darkModeToggleBtn) {
                        darkModeToggleBtn.addEventListener('click', () => {
                            // Call the actual toggleDarkMode function if it's globally accessible
                            // (which it likely is if it's in your main script or loaded separately)
                            if (typeof toggleDarkMode === 'function') {
                                toggleDarkMode();
                            }
                            closeMobileMenu(menuBtn, navMenu, body);
                        });
                    }
                }
                // ----------------------------------------------------------
                return; // Stop after successful load and initialization
            }
        } catch (e) {
            // Ignore and try next path
            console.warn(`Failed to fetch navbar from ${path}:`, e); // Log for debugging
        }
    }
    console.error("Failed to load navbar from all tried paths.");
}

// Function to toggle the mobile menu (now part of navbar.js)
function toggleMobileMenu(menuBtn, navMenu, body) {
    // You should pass menuBtn, navMenu, and body as arguments if they are not global
    // but in this merged file, they can be directly accessed if defined higher up.
    // For clarity and good practice, passing them as arguments is better.
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Toggle ARIA expanded attribute for accessibility
    const isExpanded = navMenu.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', isExpanded);

    // Prevent body scrolling when the menu is open
    if (isExpanded) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = ''; // Revert to default
    }
}

// Function to close the mobile menu (now part of navbar.js)
function closeMobileMenu(menuBtn, navMenu, body) {
    if (menuBtn && navMenu && navMenu.classList.contains('active')) {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', false);
        body.style.overflow = ''; // Re-enable body scrolling
    }
}

// Ensure DOM is ready before trying to load and initialize, or just call directly if using 'defer'
document.addEventListener('DOMContentLoaded', loadNavbarAndInitializeMobileMenu);
// If your script tag for navbar.js has the 'defer' attribute, calling it directly here is also fine:
// loadNavbarAndInitializeMobileMenu();