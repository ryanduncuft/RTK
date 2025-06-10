// Scripts/singlePageLoader.js
import { releasesData } from './data.js'; // Ensure the path is correct relative to singlePageLoader.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded. Starting singlePageLoader.js');

    const mainContent = document.querySelector('.main-content');
    if (!mainContent) {
        console.error('Error: Main content section with class "main-content" not found. Cannot load data.');
        return;
    }
    const singleId = mainContent.getAttribute('data-id');

    if (!singleId) {
        console.error('Error: Single ID not found in data-id attribute on .main-content. Cannot load data.');
        return;
    }
    console.log(`Found data-id: ${singleId}`);

    // Find the current single in the releasesData
    // IMPORTANT CHANGE: Include 'album-track' type here so its page loads correctly
    const currentSingle = releasesData.find(release =>
        release.id === singleId &&
        (release.type === 'single' || release.type === 'collab' || release.type === 'album-track') // ADDED 'album-track'
    );

    if (!currentSingle) {
        console.error(`Error: No release data found for ID "${singleId}" with a displayable type (single, collab, album-track).`);
        const container = document.querySelector('.main-content .container');
        if (container) {
            container.innerHTML = '<p style="text-align: center; color: var(--text-color-dark); font-size: 1.5rem; padding: 50px;">Oops! This release could not be found.</p>';
            if (document.body.classList.contains('dark-mode')) {
                container.querySelector('p').style.color = 'var(--text-color-light)';
            }
        }
        document.querySelectorAll('.single-picture, .single-info, .single-section, .tabs').forEach(el => {
            if (el) el.classList.add('hidden');
        });
        return; // Stop execution if no data found
    }

    console.log('Found currentSingle:', currentSingle);

    // --- Element References (Using getElementById for consistency where applicable) ---
    const singleCoverImg = document.getElementById('single-cover-img');
    const listenNowBtn = document.getElementById('listen-now-btn');
    const singleTitleElem = document.getElementById('single-title');
    const releaseDateElem = document.getElementById('release-date');
    const genreElem = document.getElementById('genre');
    const durationElem = document.getElementById('duration');
    const writerElem = document.getElementById('writer');
    const producerElem = document.getElementById('producer');
    const descriptionTextElem = document.getElementById('description-text');
    const lyricsTextElem = document.getElementById('lyrics-text');

    const descriptionTabBtn = document.querySelector('[data-tab-target="description-content"]');
    const lyricsTabBtn = document.querySelector('[data-tab-target="lyrics-content"]');
    const descriptionContentDiv = document.getElementById('description-content');
    const lyricsContentDiv = document.getElementById('lyrics-content');
    const tabsContainer = document.querySelector('.tabs');

    // --- Function to handle tab switching ---
    function showTab(tabId) {
        document.querySelectorAll('.singlebtn-toggle').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        const targetButton = document.querySelector(`[data-tab-target="${tabId}"]`);
        const targetContent = document.getElementById(tabId);

        if (targetButton) {
            targetButton.classList.add('active');
            console.log(`Activated tab button: ${tabId}`);
        } else {
            console.warn(`Tab button not found for: ${tabId}`);
        }
        if (targetContent) {
            targetContent.classList.add('active');
            console.log(`Activated tab content: ${tabId}`);
        } else {
            console.warn(`Tab content not found for: ${tabId}`);
        }
    };

    // --- Update HTML Head (for SEO and browser tab title) ---
    document.title = `${currentSingle.title} | ${currentSingle.artist}`;
    console.log(`Updated document title to: ${document.title}`);

    // Select meta tags defensively
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const metaOgUrl = document.querySelector('meta[property="og:url"]');
    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    const metaOgImage = document.querySelector('meta[property="og:image"]');
    const metaTwitterCard = document.querySelector('meta[property="twitter:card"]');
    const metaTwitterUrl = document.querySelector('meta[property="twitter:url"]');
    const metaTwitterTitle = document.querySelector('meta[property="twitter:title"]');
    const metaTwitterDescription = document.querySelector('meta[property="twitter:description"]');
    const metaTwitterImage = document.querySelector('meta[property="twitter:image"]');


    if (metaDescription) {
        metaDescription.setAttribute('content', currentSingle.description || `Listen to ${currentSingle.title} by ${currentSingle.artist}.`);
    } else {
        console.warn('Meta description tag not found.');
    }
    if (metaKeywords) {
        metaKeywords.setAttribute('content', `Ryze Tha Kidd, ${currentSingle.type}, ${currentSingle.title}, music, ${currentSingle.artist}, ${currentSingle.genre || ''}, ${currentSingle.writer || ''}, ${currentSingle.producer || ''}`);
    } else {
        console.warn('Meta keywords tag not found.');
    }

    // Construct the full image path for OG tags relative to the domain root
    let baseUrl = window.location.origin;
    const pathSegments = window.location.pathname.split('/');
    const discographyIndex = pathSegments.indexOf('Discography');
    if (discographyIndex > 0) {
        // This ensures baseUrl includes any subdirectory before the 'Discography' folder
        baseUrl += '/' + pathSegments.slice(1, discographyIndex).join('');
    }
    const cleanImageRelativePath = currentSingle.image.startsWith('/') ? currentSingle.image.substring(1) : currentSingle.image;
    const ogImagePath = `${baseUrl}/${cleanImageRelativePath}`;
    console.log(`OG Image Path: ${ogImagePath}`);

    if (metaOgUrl) {
        metaOgUrl.setAttribute('content', window.location.href);
    } else {
        console.warn('Meta og:url tag not found.');
    }
    if (metaOgTitle) {
        metaOgTitle.setAttribute('content', currentSingle.title);
    } else {
        console.warn('Meta og:title tag not found.');
    }
    if (metaOgDescription) {
        metaOgDescription.setAttribute('content', currentSingle.description || `Listen to ${currentSingle.title} by ${currentSingle.artist}.`);
    } else {
        console.warn('Meta og:description tag not found.');
    }
    if (metaOgImage) {
        metaOgImage.setAttribute('content', ogImagePath);
    } else {
        console.warn('Meta og:image tag not found.');
    }

    if (metaTwitterCard) {
        metaTwitterCard.setAttribute('content', 'summary_large_image');
    } else {
        console.warn('Meta twitter:card tag not found.');
    }
    if (metaTwitterUrl) {
        metaTwitterUrl.setAttribute('content', window.location.href);
    } else {
        console.warn('Meta twitter:url tag not found.');
    }
    if (metaTwitterTitle) {
        metaTwitterTitle.setAttribute('content', currentSingle.title);
    } else {
        console.warn('Meta twitter:title tag not found.');
    }
    if (metaTwitterDescription) {
        metaTwitterDescription.setAttribute('content', currentSingle.description || `Check out ${currentSingle.title} by ${currentSingle.artist}.`);
    } else {
        console.warn('Meta twitter:description tag not found.');
    }
    if (metaTwitterImage) {
        metaTwitterImage.setAttribute('content', ogImagePath);
    } else {
        console.warn('Meta twitter:image tag not found.');
    }

    // --- Update Single Cover ---
    if (singleCoverImg) {
        singleCoverImg.src = ogImagePath;
        singleCoverImg.alt = `${currentSingle.title} cover art`;
        console.log(`Updated cover image src to: ${singleCoverImg.src}`);
    } else {
        console.warn('Cover image element #single-cover-img not found.');
    }

    // --- Update Listen Now Button ---
    if (listenNowBtn) {
        if (currentSingle.listenLink) {
            listenNowBtn.href = currentSingle.listenLink;
            listenNowBtn.classList.remove('hidden');
            console.log(`Listen Now button link updated to: ${listenNowBtn.href}`);
        } else {
            listenNowBtn.classList.add('hidden');
            console.log('Listen Now button hidden (no listenLink found).');
        }
    } else {
        console.warn('Listen Now button element #listen-now-btn not found.');
    }

    // --- Update Single Title ---
    if (singleTitleElem) {
        singleTitleElem.textContent = currentSingle.title;
        console.log(`Updated single title to: ${singleTitleElem.textContent}`);
    } else {
        console.warn('Single title element #single-title not found.');
    }

    // --- Update Info Panel ---
    if (releaseDateElem) {
        releaseDateElem.innerHTML = `<strong>Release Date:</strong> ${currentSingle.displayDate || 'N/A'}`;
        console.log(`Updated release date to: ${releaseDateElem.textContent}`);
    } else {
        console.warn('Release date element #release-date not found.');
    }
    if (genreElem) {
        genreElem.innerHTML = `<strong>Genre:</strong> ${currentSingle.genre || 'N/A'}`;
        console.log(`Updated genre to: ${genreElem.textContent}`);
    } else {
        console.warn('Genre element #genre not found.');
    }
    if (durationElem) {
        durationElem.innerHTML = `<strong>Duration:</strong> ${currentSingle.duration || 'N/A'}`;
        console.log(`Updated duration to: ${durationElem.textContent}`);
    } else {
        console.warn('Duration element #duration not found.');
    }
    if (writerElem) {
        writerElem.innerHTML = `<strong>Writer:</strong> ${currentSingle.writer || 'N/A'}`;
        console.log(`Updated writer to: ${writerElem.textContent}`);
    } else {
        console.warn('Writer element #writer not found.');
    }
    if (producerElem) {
        producerElem.innerHTML = `<strong>Producer:</strong> ${currentSingle.producer || 'N/A'}`;
        console.log(`Updated producer to: ${producerElem.textContent}`);
    } else {
        console.warn('Producer element #producer not found.');
    }

    // --- Update Description Tab ---
    if (descriptionTextElem) {
        if (currentSingle.descriptionHtml) {
            descriptionTextElem.innerHTML = currentSingle.descriptionHtml;
            if (descriptionTabBtn) descriptionTabBtn.classList.remove('hidden');
            if (descriptionContentDiv) descriptionContentDiv.classList.remove('hidden');
            console.log('Description text loaded.');
        } else {
            if (descriptionContentDiv) descriptionContentDiv.classList.add('hidden');
            if (descriptionTabBtn) descriptionTabBtn.classList.add('hidden');
            console.log('Description tab and content hidden (no descriptionHtml found).');
        }
    } else {
        console.warn('Description text element #description-text not found.');
    }

    // --- Update Lyrics Tab ---
    if (lyricsTextElem) {
        if (currentSingle.lyrics) {
            lyricsTextElem.innerHTML = currentSingle.lyrics;
            if (lyricsTabBtn) lyricsTabBtn.classList.remove('hidden');
            if (lyricsContentDiv) lyricsContentDiv.classList.remove('hidden');
            console.log('Lyrics text loaded.');
        } else {
            if (lyricsContentDiv) lyricsContentDiv.classList.add('hidden');
            if (lyricsTabBtn) lyricsTabBtn.classList.add('hidden');
            console.log('Lyrics tab and content hidden (no lyrics found).');
        }
    } else {
        console.warn('Lyrics text element #lyrics-text not found.');
    }

    // Handle initial tab display and hiding the tab container if no content
    if (descriptionContentDiv && lyricsContentDiv) {
        if (descriptionContentDiv.classList.contains('hidden') && !lyricsContentDiv.classList.contains('hidden')) {
            showTab('lyrics-content');
            console.log('Defaulting to Lyrics tab.');
        } else if (!descriptionContentDiv.classList.contains('hidden') && lyricsContentDiv.classList.contains('hidden')) {
            showTab('description-content');
            console.log('Defaulting to Description tab.');
        } else if (descriptionContentDiv.classList.contains('hidden') && lyricsContentDiv.classList.contains('hidden')) {
            if (tabsContainer) {
                tabsContainer.classList.add('hidden');
                console.log('Tabs container hidden (no description or lyrics).');
            }
        } else {
            showTab('description-content'); // Default to showing description if both exist
            console.log('Defaulting to Description tab (both exist).');
        }
    } else {
        console.warn('Description or Lyrics content divs not found, cannot manage tab display correctly.');
        if (tabsContainer) {
            tabsContainer.classList.add('hidden');
        }
    }

    // --- Add Event Listeners for Tab Buttons ---
    const tabButtons = document.querySelectorAll('.singlebtn-toggle');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab-target');
            if (tabId) {
                showTab(tabId);
            } else {
                console.warn('Tab button missing data-tab-target attribute:', button);
            }
        });
    });
    console.log('Tab button event listeners added.');

});