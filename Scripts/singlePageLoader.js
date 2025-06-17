// My notes:
// - Imports `releasesData` and `fetchReleasesData` from `data.js`.
// - This script loads the details for a single track or release page.
// - It gets the release ID from the page, fetches the data, and fills in all the details.
// - It also handles showing/hiding the description and lyrics tabs.

import { releasesData, fetchReleasesData } from './data.js';

document.addEventListener('DOMContentLoaded', async () =>
{
    console.log('Page loaded. Running singlePageLoader.js');

    const mainContent = document.querySelector('.main-content');
    if (!mainContent)
    {
        console.error('Missing main content section. Cannot load single page details.');
        return;
    }

    const singleId = mainContent.getAttribute('data-id');
    if (!singleId)
    {
        console.error('Missing data-id on main content. Cannot identify the release.');
        return;
    }

    console.log(`Trying to load release ID: ${singleId}`);

    // First, make sure our music data is loaded
    await fetchReleasesData();

    // Find the specific release using its ID and make sure it's a track-like item
    const currentSingle = releasesData.find
    (release =>
        release.id === singleId &&
        ['single', 'collab', 'album-track'].includes(release.type)
    );

    if (!currentSingle)
    {
        console.error(`No release found for ID: ${singleId} or wrong type.`);

        // Show a "not found" message
        const container = document.querySelector('.main-content .container');
        if (container)
        {
            container.innerHTML = '<p style="text-align: center; color: var(--text-color-dark); font-size: 1.5rem; padding: 50px;">Oops! This release could not be found.</p>';
            // Adjust color for dark mode
            if (document.body.classList.contains('dark-mode'))
            {
                container.querySelector('p').style.color = 'var(--text-color-light)';
            }
        }

        // Hide other elements to prevent empty displays
        document.querySelectorAll('.single-picture, .single-info, .single-section, .tabs').forEach(el => el?.classList.add('hidden'));
        return;
    }

    console.log('Successfully found release:', currentSingle);

    // Get all the elements we'll be filling with data
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

    // Note: This function manages which tab content is visible and which button is active.
    function showTab(tabId)
    {
        document.querySelectorAll('.singlebtn-toggle').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        const targetButton = document.querySelector(`[data-tab-target="${tabId}"]`);
        const targetContent = document.getElementById(tabId);

        if (targetButton) targetButton.classList.add('active');
        if (targetContent) targetContent.classList.add('active');
    }

    // Set the page title and meta tags for SEO and social sharing
    document.title = `${currentSingle.title} | ${currentSingle.artist}`;

    const setMeta = (selector, content) =>
    {
        const tag = document.querySelector(selector);
        if (tag) tag.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', currentSingle.description || `Listen to ${currentSingle.title} by ${currentSingle.artist}.`);
    setMeta('meta[name="keywords"]', `Ryze Tha Kidd, ${currentSingle.type}, ${currentSingle.title}, music, ${currentSingle.artist}, ${currentSingle.genre || ''}, ${currentSingle.writer || ''}, ${currentSingle.producer || ''}`);

    // Use the full image URL from our data for Open Graph and Twitter cards
    setMeta('meta[property="og:url"]', window.location.href);
    setMeta('meta[property="og:title"]', currentSingle.title);
    setMeta('meta[property="og:description"]', currentSingle.description || `Listen to ${currentSingle.title} by ${currentSingle.artist}.`);
    setMeta('meta[property="og:image"]', currentSingle.image);
    setMeta('meta[property="twitter:card"]', 'summary_large_image');
    setMeta('meta[property="twitter:url"]', window.location.href);
    setMeta('meta[property="twitter:title"]', currentSingle.title);
    setMeta('meta[property="twitter:description"]', currentSingle.description || `Check out ${currentSingle.title} by ${currentSingle.artist}.`);
    setMeta('meta[property="twitter:image"]', currentSingle.image);

    // Fill in the page content
    if (singleCoverImg)
    {
        singleCoverImg.src = currentSingle.image;
        singleCoverImg.alt = `${currentSingle.title} cover art`;
    }

    if (listenNowBtn)
    {
        if (currentSingle.listenLink) {
            listenNowBtn.href = currentSingle.listenLink;
            listenNowBtn.classList.remove('hidden');
        } else {
            listenNowBtn.classList.add('hidden'); // Hide if no link
        }
    }

    if (singleTitleElem) singleTitleElem.textContent = currentSingle.title;
    if (releaseDateElem) releaseDateElem.innerHTML = `<strong>Release Date:</strong> ${currentSingle.displayDate || 'N/A'}`;
    if (genreElem) genreElem.innerHTML = `<strong>Genre:</strong> ${currentSingle.genre || 'N/A'}`;
    if (durationElem) durationElem.innerHTML = `<strong>Duration:</strong> ${currentSingle.duration || 'N/A'}`;
    if (writerElem) writerElem.innerHTML = `<strong>Writer:</strong> ${currentSingle.writer || 'N/A'}`;
    if (producerElem) producerElem.innerHTML = `<strong>Producer:</strong> ${currentSingle.producer || 'N/A'}`;

    // Handle the description tab content
    if (descriptionTextElem)
    {
        if (currentSingle.descriptionHtml)
        {
            descriptionTextElem.innerHTML = currentSingle.descriptionHtml;
            descriptionTabBtn?.classList.remove('hidden');
            descriptionContentDiv?.classList.remove('hidden');
        }
        
        else
        {
            descriptionTabBtn?.classList.add('hidden');
            descriptionContentDiv?.classList.add('hidden');
        }
    }

    // Handle the lyrics tab content
    if (lyricsTextElem)
    {
        if (currentSingle.lyrics)
        {
            lyricsTextElem.innerHTML = currentSingle.lyrics;
            lyricsTabBtn?.classList.remove('hidden');
            lyricsContentDiv?.classList.remove('hidden');
        }
        
        else
        {
            lyricsTabBtn?.classList.add('hidden');
            lyricsContentDiv?.classList.add('hidden');
        }
    }

    // Show the first available tab by default (description or lyrics)
    const descHidden = descriptionContentDiv?.classList.contains('hidden');
    const lyricsHidden = lyricsContentDiv?.classList.contains('hidden');

    if (!descHidden)
    {
        showTab('description-content');
    }
    
    else if (!lyricsHidden)
    {
        showTab('lyrics-content');
    }
    
    else
    {
        // If both are hidden, hide the entire tabs section
        tabsContainer?.classList.add('hidden');
    }

    // Add click listeners to the tab buttons
    document.querySelectorAll('.singlebtn-toggle').forEach(button =>
    {
        button.addEventListener('click', (event) =>
        {
            event.preventDefault();
            const tabId = button.getAttribute('data-tab-target');
            if (tabId) showTab(tabId);
        });
    });

    console.log('Release page details filled in and tabs are ready.');
});