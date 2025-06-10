//footer.js

const footerPathsToTry = [
    '/footer.html',            // absolute path to root
    './footer.html',           // relative (current folder)
    '../footer.html',          // one level up
    '../../footer.html',       // two levels up
    '../../../footer.html',    // three levels up
];

async function loadFooter() {
    for (const path of footerPathsToTry) {
        try {
            const res = await fetch(path);
            if (res.ok) {
                const data = await res.text();
                document.getElementById("footer").innerHTML = data;
                // CALL updateCurrentYear() HERE, after the content is loaded
                updateCurrentYear();
                return; // Stop after successful load
            }
        } catch (e) {
            console.warn(`Failed to fetch footer from ${path}:`, e); // Log for debugging
        }
    }
    console.error("Failed to load footer from all tried paths.");
}

// Function to update the current year in the footer
function updateCurrentYear() {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

// This line handles calling loadFooter once the DOM is ready.
// You no longer need the direct loadFooter() call.
document.addEventListener('DOMContentLoaded', loadFooter);

// REMOVE THE LINE BELOW:
// loadFooter();