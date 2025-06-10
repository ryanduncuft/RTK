// Scripts/discographyscript.js
// Data for your releases - Add new releases here!
import { releasesData } from './data.js';

const releasesGrid = document.getElementById('releases-grid');
const navButtons = document.querySelectorAll('.nav-btn');
const noReleasesMessage = document.querySelector('.no-releases-message');

function createReleaseCard(release) {
    const releaseItem = document.createElement('div');
    releaseItem.classList.add('release-item');
    releaseItem.setAttribute('data-id', release.id);

    const numSparkles = 5;
    let sparklesHTML = '';
    for (let i = 0; i < numSparkles; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 8 + 4;
        const delay = Math.random() * 0.5;
        sparklesHTML += `<span class="sparkle" style="left:${x}%; top:${y}%; width:${size}px; height:${size}px; animation-delay: ${delay}s;"></span>`;
    }

    releaseItem.innerHTML = `
        <a href="${release.pageLink}" aria-label="Learn more about ${release.title}">
            <div class="release-image-wrapper">
                <img src="${release.image}" alt="${release.title} cover art">
                ${sparklesHTML}
            </div>
            <div class="release-info">
                <h3>${release.title}</h3>
                <p class="release-date">Released: ${release.displayDate}</p>
                <p class="release-type">${release.type.charAt(0).toUpperCase() + release.type.slice(1)}</p>
                <p>${release.description}</p>
            </div>
        </a>
    `;
    return releaseItem;
}

function displayReleases(category) {
    releasesGrid.innerHTML = ''; // Clear current releases
    let filteredReleases = [];

    // Define the types to show on the discography page
    const allowedTypes = ['single', 'ep', 'album', 'collab']; // Added 'ep' and 'album' assuming you have these too

    if (category === 'all') {
        // Filter out 'album-track' and then sort
        filteredReleases = releasesData
            .filter(release => allowedTypes.includes(release.type)) // Exclude 'album-track' here
            .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    } else {
        // Filter by category and exclude 'album-track' if the category isn't specifically 'album-track'
        filteredReleases = releasesData
            .filter(release => release.type === category && allowedTypes.includes(release.type))
            .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }

    // Check if there are 1, 2, or 3 releases to apply specific grid behavior
    if (filteredReleases.length === 1) { // Only apply this if there's exactly one item
        releasesGrid.classList.add('single-item-grid');
    } else {
        releasesGrid.classList.remove('single-item-grid');
    }

    if (filteredReleases.length === 0) {
        noReleasesMessage.style.display = 'block';
    } else {
        noReleasesMessage.style.display = 'none';
        filteredReleases.forEach((release, index) => {
            const card = createReleaseCard(release);
            card.style.animationDelay = `${index * 0.1}s`; // Stagger animation
            releasesGrid.appendChild(card);
        });
    }
}

// Event Listeners for navigation buttons
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        // Add a class for animating out old releases
        releasesGrid.classList.add('fade-out');

        setTimeout(() => {
            displayReleases(category);
            // Remove fade-out and add fade-in for new releases
            releasesGrid.classList.remove('fade-out');
            releasesGrid.classList.add('fade-in');

            // Remove fade-in class after animation
            setTimeout(() => {
                releasesGrid.classList.remove('fade-in');
            }, 500); // Should match CSS transition duration
        }, 300); // Delay for fade-out effect before new content loads
    });
});

// Initial display of releases when the page loads (defaults to 'all')
document.addEventListener('DOMContentLoaded', () => {
    displayReleases('all');
});