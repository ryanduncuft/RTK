document.addEventListener('DOMContentLoaded', function() {
    const gistUrlBase = 'https://gist.githubusercontent.com/ryzethakiddofficial/d67c1848410f5d6a77d914794848bc7d/raw/video_link.json';
    const videoEmbedContainer = document.getElementById('video-embed-container');

    // Add a cache-busting parameter (current timestamp)
    const cacheBuster = new Date().getTime();
    const gistUrl = `${gistUrlBase}?${cacheBuster}`;

    fetch(gistUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const videoUrl = data.youtube_embed_url;
            if (videoUrl) {
                videoEmbedContainer.innerHTML = `
                    <iframe src="${videoUrl}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                `;
            } else {
                videoEmbedContainer.innerHTML = "<p>Video URL not found in the Gist.</p>";
            }
        })
        .catch(error => {
            console.error('Error fetching video URL from Gist:', error);
            videoEmbedContainer.innerHTML = "<p>Failed to load video. Please try again later.</p>";
        });
});