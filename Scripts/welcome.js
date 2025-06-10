document.addEventListener('DOMContentLoaded', () => {
    const darkModePreference = localStorage.getItem('darkMode');
    const welcomeScreen = document.getElementById('welcome-screen');
    const welcomeMessage = document.getElementById('welcome-message');
    const loadingBar = document.getElementById('loading-bar');

    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
        welcomeScreen.classList.add('dark-mode');
    }

    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
        welcomeMessage.textContent = "Welcome!";
        localStorage.setItem('hasVisited', 'true');
    } else {
        welcomeMessage.textContent = "Welcome Back!";
    }

    // Set a timeout for the welcome screen to fade out
    // The total animation time for the loading bar is 2s (fillLoadingBar) + 1.5s (delay) = 3.5s
    // We add a small buffer before fading out the entire screen.
    const totalAnimationDuration = 3500; // milliseconds for loading bar to finish
    const fadeOutDelay = 500; // milliseconds after loading bar completes

    setTimeout(() => {
        welcomeScreen.classList.add('fade-out');
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
        }, 500); // This should match the fade-out-screen animation duration
    }, totalAnimationDuration + fadeOutDelay);
});

// The window.onload function is no longer needed as the DOmContentLoaded listener handles everything.
// Remove the existing window.onload function if you have it.