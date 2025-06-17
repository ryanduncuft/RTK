// My notes:
// - Imports `releasesData` and `fetchReleasesData` from `data.js`.
// - `releasesData` will hold all our music info once fetched.

import { releasesData, fetchReleasesData } from './data.js';

const releasesGrid = document.getElementById('releases-grid');
const navButtons = document.querySelectorAll('.nav-btn');
const noReleasesMessage = document.querySelector('.no-releases-message');

/**
 * Note: This function makes an HTML card for each release.
 * It includes the cover, title, date, type, description, and some cool sparkles.
 */
function createReleaseCard(release)
{
    const releaseItem = document.createElement('div');
    releaseItem.classList.add('release-item');
    releaseItem.setAttribute('data-id', release.id);

    // Make some random sparkles for the album cover
    const numSparkles = 5;
    let sparklesHTML = '';
    for (let i = 0; i < numSparkles; i++)
    {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 8 + 4; // Sparkle size 4-12px
        const delay = Math.random() * 0.5; // Stagger their animation
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

/**
 * Note: This function shows releases based on the selected category (e.g., "singles," "albums").
 * It sorts them by date (newest first) and handles showing a "no releases" message if needed.
 */
function displayReleases(category)
{
    releasesGrid.innerHTML = ''; // Clear out old releases

    // Only show these types of releases on the main discography page
    const allowedTypes = ['single', 'ep', 'album', 'collab'];

    // Filter releases by type and category, then sort by date
    const filteredReleases = releasesData
        .filter
        (release =>
            allowedTypes.includes(release.type) && // Make sure it's an allowed type
            (category === 'all' || release.type === category) // Apply category filter
        )
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)); // Newest first

    // Adjust grid layout if there's only one item
    if (filteredReleases.length === 1)
    {
        releasesGrid.classList.add('single-item-grid');
    }
    
    else
    {
        releasesGrid.classList.remove('single-item-grid');
    }

    // Show/hide the "No Releases" message
    if (filteredReleases.length === 0)
    {
        noReleasesMessage.style.display = 'block';
    }
    
    else
    {
        noReleasesMessage.style.display = 'none';
        // Add each release card to the page with a slight delay for a cool effect
        filteredReleases.forEach
        ((release, index) =>
            {
                const card = createReleaseCard(release);
                card.style.animationDelay = `${index * 0.1}s`; // Staggered fade-in
                releasesGrid.appendChild(card);
            }
        );
    }
}

// Listen for clicks on our navigation buttons
navButtons.forEach
(button =>
    {
        button.addEventListener
        ('click', () =>
            {
                // Remove 'active' class from all buttons, then add it to the clicked one
                navButtons.forEach
                    (
                        btn => btn.classList.remove('active')
                    );
                button.classList.add('active');

                const category = button.getAttribute('data-category');

                // Start a fade-out animation for the current releases
                releasesGrid.classList.add('fade-out');

                // After the fade-out, update the content and start fade-in
                setTimeout
                (() =>
                    {
                        displayReleases(category);

                        releasesGrid.classList.remove('fade-out');
                        releasesGrid.classList.add('fade-in');

                        // Once the fade-in is done, remove the class to reset
                        setTimeout(() =>
                        {
                            releasesGrid.classList.remove('fade-in');
                        }, 500); // Matches CSS fade-in duration
                    }, 
                    300
                );
            }
        );
    }
);

// When the page loads, first get the data, then show all releases.
document.addEventListener('DOMContentLoaded', async () =>
{
    await fetchReleasesData(); // Wait for data to be ready
    displayReleases('all'); // Then show everything
});