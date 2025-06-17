import { releasesData, fetchReleasesData } from './data.js';

document.addEventListener('DOMContentLoaded', async () =>
    {
    const albumSection = document.querySelector('.album-hero-section');
    if (!albumSection)
    {
        console.error('Album hero section not found. Cannot load data.');
        return;
    }

    const albumId = albumSection.getAttribute('data-id');
    if (!albumId)
    {
        console.error('Album ID not found in data-id attribute. Cannot load data.');
        return;
    }

    // grab the latest album data
    await fetchReleasesData();

    // find the current album in our data
    const currentRelease = releasesData.find(release => release.id === albumId);

    // get all the elements we'll be updating
    const albumCoverImg = document.querySelector('.album-cover-tilt-effect img');
    const listenNowBtn = document.querySelector('.listen-now-btn');
    const albumTitleElem = document.querySelector('.album-title');
    const albumArtistElem = document.querySelector('.album-artist');
    const tracklistGrid = document.querySelector('.tracklist-grid');
    const tracklistSection = document.querySelector('.tracklist-section');
    const creditsDiv = document.querySelector('#album-credits-content');
    const creditsSection = document.querySelector('.credits-section');
    const mainContentContainer = document.querySelector('.album-page-content .container');

    if (currentRelease)
    {
        // update the page's HTML head for SEO and browser tab title
        document.title = `${currentRelease.title} | ${currentRelease.artist}`;
        document.querySelector('meta[name="description"]').setAttribute('content', currentRelease.description || `Explore ${currentRelease.title} by ${currentRelease.artist}.`);
        document.querySelector('meta[name="keywords"]').setAttribute('content', `Ryze Tha Kidd, ${currentRelease.type}, ${currentRelease.title}, music, ${currentRelease.artist}, ${currentRelease.credits?.artists?.join(', ') || ''}, ${currentRelease.credits?.producers?.join(', ') || ''}`);

        // set Open Graph and Twitter card meta tags for social sharing
        const fullImagePath = currentRelease.image;
        document.querySelector('meta[property="og:title"]').setAttribute('content', currentRelease.title);
        document.querySelector('meta[property="og:description"]').setAttribute('content', currentRelease.description || `Listen to ${currentRelease.title} by ${currentRelease.artist}.`);
        document.querySelector('meta[property="og:url"]').setAttribute('content', window.location.href);
        document.querySelector('meta[property="og:image"]').setAttribute('content', fullImagePath);
        document.querySelector('meta[name="twitter:title"]').setAttribute('content', currentRelease.title);
        document.querySelector('meta[name="twitter:description"]').setAttribute('content', currentRelease.description || `Check out ${currentRelease.title} by ${currentRelease.artist}.`);
        document.querySelector('meta[name="twitter:image"]').setAttribute('content', fullImagePath);

        // update album cover
        if (albumCoverImg)
        {
            albumCoverImg.src = currentRelease.image;
            albumCoverImg.alt = `${currentRelease.title} cover art`;
        }

        // update album title and artist
        if (albumTitleElem)
        {
            albumTitleElem.textContent = currentRelease.title;
        }
        
        else
        {
            console.warn('Album title element not found.');
        }

        if (albumArtistElem)
        {
            albumArtistElem.textContent = currentRelease.artist;
        }

        else
        {
            console.warn('Album artist element not found.');
        }

        // update "Listen Now" button
        if (listenNowBtn && currentRelease.listenLink)
        {
            listenNowBtn.href = currentRelease.listenLink;
            listenNowBtn.classList.remove('hidden');
        }
        
        else if (listenNowBtn)
        {
            listenNowBtn.classList.add('hidden'); // hide if no link
        }

        // update tracklist
        if (tracklistGrid && tracklistSection && currentRelease.tracks && currentRelease.tracks.length > 0)
        {
            tracklistGrid.innerHTML = ''; // clear existing buttons

            // assuming track directory is the same as the album's title
            const trackDirectory = currentRelease.title;

            currentRelease.tracks.forEach((track) => {
                const trackButton = document.createElement('a');
                trackButton.href = `${trackDirectory}/${track.link}`;
                trackButton.classList.add('track-button');
                trackButton.textContent = track.title;
                tracklistGrid.appendChild(trackButton);
            });
            tracklistSection.classList.remove('hidden'); // show tracklist
        }

        else if (tracklistSection)
        {
            tracklistSection.classList.add('hidden'); // hide if no tracks
        }

        // update credits
        if (creditsDiv && creditsSection && currentRelease.credits)
        {
            let artistsHtml = '';
            if (currentRelease.credits.artists && currentRelease.credits.artists.length > 0)
            {
                artistsHtml = `<p><strong>Artist${currentRelease.credits.artists.length > 1 ? 's' : ''}:</strong> ${currentRelease.credits.artists.join(', ')}</p>`;
            }

            let producersHtml = '';
            if (currentRelease.credits.producers && currentRelease.credits.producers.length > 0)
            {
                producersHtml = `<p><strong>Producer${currentRelease.credits.producers.length > 1 ? 's' : ''}:</strong> ${currentRelease.credits.producers.join(', ')}</p>`;
            }

            // only show credits if there's artists, producers, or a release date
            if (artistsHtml || producersHtml || currentRelease.displayDate)
            {
                creditsDiv.innerHTML = `
                    ${artistsHtml}
                    ${producersHtml}
                    ${currentRelease.displayDate ? `<p><strong>Release Date:</strong> ${currentRelease.displayDate}</p>` : ''}
                `;
                creditsSection.classList.remove('hidden'); // show credits section
            }

            else 
            {
                creditsSection.classList.add('hidden'); // hide if no meaningful credits
            }
        }

        else if (creditsSection)
        {
            creditsSection.classList.add('hidden'); // hide if no credits data
        }

    }

    else
    {
        // if no album data is found, show a message
        if (mainContentContainer)
        {
            mainContentContainer.innerHTML = '<p style="text-align: center; color: var(--text-color-dark); font-size: 1.5rem; padding: 50px;">Oops! This release could not be found.</p>';
            // adjust color for light mode if needed
            if (!document.body.classList.contains('dark-mode'))
            {
                mainContentContainer.querySelector('p').style.color = 'var(--text-color-light)';
            }
        }

        // also hide other elements to prevent them from showing empty
        if (albumCoverImg) albumCoverImg.src = '';
        if (listenNowBtn) listenNowBtn.classList.add('hidden');
        if (albumTitleElem) albumTitleElem.textContent = 'Album Not Found';
        if (albumArtistElem) albumArtistElem.textContent = '';
        if (tracklistSection) tracklistSection.classList.add('hidden');
        if (creditsSection) creditsSection.classList.add('hidden');
    }
});