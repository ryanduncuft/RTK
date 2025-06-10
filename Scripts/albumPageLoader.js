// Scripts/albumPageLoader.js
import { releasesData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const albumSection = document.querySelector('.album-hero-section');
    if (!albumSection) {
        console.error('Album hero section not found. Cannot load data.');
        return;
    }
    const albumId = albumSection.getAttribute('data-id');

    if (!albumId) {
        console.error('Album ID not found in data-id attribute. Cannot load data.');
        return;
    }

    const currentRelease = releasesData.find(release => release.id === albumId);

    // Get references to elements that will be updated
    const albumCoverImg = document.querySelector('.album-cover-tilt-effect img');
    const listenNowBtn = document.querySelector('.listen-now-btn');
    const albumTitleElem = document.querySelector('.album-title');
    const albumArtistElem = document.querySelector('.album-artist');
    const tracklistGrid = document.querySelector('.tracklist-grid');
    const tracklistSection = document.querySelector('.tracklist-section');
    const creditsDiv = document.querySelector('#album-credits-content');
    const creditsSection = document.querySelector('.credits-section');
    const mainContentContainer = document.querySelector('.album-page-content .container');


    if (currentRelease) {
        // --- Update HTML Head (for SEO and browser tab title) ---
        document.title = `${currentRelease.title} | ${currentRelease.artist}`;
        document.querySelector('meta[name="description"]').setAttribute('content', currentRelease.description || `Explore ${currentRelease.title} by ${currentRelease.artist}.`);
        document.querySelector('meta[name="keywords"]').setAttribute('content', `Ryze Tha Kidd, ${currentRelease.type}, ${currentRelease.title}, music, ${currentRelease.artist}, ${currentRelease.credits?.artists?.join(', ') || ''}, ${currentRelease.credits?.producers?.join(', ') || ''}`);

        const fullImagePath = `${window.location.origin}/${currentRelease.image}`;
        document.querySelector('meta[property="og:title"]').setAttribute('content', currentRelease.title);
        document.querySelector('meta[property="og:description"]').setAttribute('content', currentRelease.description || `Listen to ${currentRelease.title} by ${currentRelease.artist}.`);
        document.querySelector('meta[property="og:url"]').setAttribute('content', window.location.href);
        document.querySelector('meta[property="og:image"]').setAttribute('content', fullImagePath);
        document.querySelector('meta[name="twitter:title"]').setAttribute('content', currentRelease.title);
        document.querySelector('meta[name="twitter:description"]').setAttribute('content', currentRelease.description || `Check out ${currentRelease.title} by ${currentRelease.artist}.`);
        document.querySelector('meta[name="twitter:image"]').setAttribute('content', fullImagePath);

        // --- Update Album Cover ---
        if (albumCoverImg) {
            albumCoverImg.src = `../../${currentRelease.image}`;
            albumCoverImg.alt = `${currentRelease.title} cover art`;
        }

        // --- Update Album Title and Artist ---
        if (albumTitleElem) {
            albumTitleElem.textContent = currentRelease.title;
        } else {
            console.warn('Album title element not found.'); // For debugging
        }
        if (albumArtistElem) {
            albumArtistElem.textContent = currentRelease.artist;
        } else {
            console.warn('Album artist element not found.'); // For debugging
        }

        // --- Update Listen Now Button ---
        if (listenNowBtn && currentRelease.listenLink) {
            listenNowBtn.href = currentRelease.listenLink;
            listenNowBtn.classList.remove('hidden');
        } else if (listenNowBtn) {
            listenNowBtn.classList.add('hidden'); // Hide if no link
        }

        // --- Update Tracklist ---
        if (tracklistGrid && tracklistSection && currentRelease.tracks && currentRelease.tracks.length > 0) {
            tracklistGrid.innerHTML = ''; // Clear any existing static buttons

            currentRelease.tracks.forEach((track) => {
                const trackButton = document.createElement('a');
                trackButton.href = track.link;
                trackButton.classList.add('track-button');
                trackButton.textContent = track.title;
                tracklistGrid.appendChild(trackButton);
            });
            tracklistSection.classList.remove('hidden'); // Ensure tracklist section is visible
        } else if (tracklistSection) {
            tracklistSection.classList.add('hidden'); // Hide if no tracks
        }

        // --- Update Credits ---
        if (creditsDiv && creditsSection && currentRelease.credits) {
            let artistsHtml = '';
            if (currentRelease.credits.artists && currentRelease.credits.artists.length > 0) {
                artistsHtml = `<p><strong>Artist${currentRelease.credits.artists.length > 1 ? 's' : ''}:</strong> ${currentRelease.credits.artists.join(', ')}</p>`;
            }

            let producersHtml = '';
            if (currentRelease.credits.producers && currentRelease.credits.producers.length > 0) {
                producersHtml = `<p><strong>Producer${currentRelease.credits.producers.length > 1 ? 's' : ''}:</strong> ${currentRelease.credits.producers.join(', ')}</p>`;
            }

            // Only display credits if there's *something* to show (artists, producers, or release date)
            if (artistsHtml || producersHtml || currentRelease.displayDate) {
                creditsDiv.innerHTML = `
                    ${artistsHtml}
                    ${producersHtml}
                    ${currentRelease.displayDate ? `<p><strong>Release Date:</strong> ${currentRelease.displayDate}</p>` : ''}
                `;
                creditsSection.classList.remove('hidden'); // Ensure the entire credits section is visible
            } else {
                creditsSection.classList.add('hidden'); // Hide if no meaningful credits data
            }
        } else if (creditsSection) {
            creditsSection.classList.add('hidden'); // Hide if no credits object or creditsDiv not found
        }

    } else {
        // Fallback: If no release data is found for the given ID
        if (mainContentContainer) {
            mainContentContainer.innerHTML = '<p style="text-align: center; color: var(--text-color-dark); font-size: 1.5rem; padding: 50px;">Oops! This release could not be found.</p>';
            if (!document.body.classList.contains('dark-mode')) {
                mainContentContainer.querySelector('p').style.color = 'var(--text-color-light)';
            }
        }
        // Also hide other elements to prevent placeholder text from showing
        if (albumCoverImg) albumCoverImg.src = ''; // Clear image
        if (listenNowBtn) listenNowBtn.classList.add('hidden');
        if (albumTitleElem) albumTitleElem.textContent = 'Album Not Found';
        if (albumArtistElem) albumArtistElem.textContent = ''; // Clear artist
        if (tracklistSection) tracklistSection.classList.add('hidden');
        if (creditsSection) creditsSection.classList.add('hidden');
    }
});