document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.id = 'theme-toggle';
    toggleButton.style.background = 'none';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.fontSize = '1.2rem';
    toggleButton.style.padding = '5px';
    toggleButton.title = 'Toggle Dark Mode';

    // Insert button into navbar if it exists
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        // Create a wrapper for proper spacing if needed, or just append
        // We want it likely on the right side. The nav-container has "nav-logo" and "nav-links"
        // Let's add it to nav-links
        const navLinks = navContainer.querySelector('.nav-links');
        if (navLinks) {
            navLinks.appendChild(toggleButton);
        } else {
            navContainer.appendChild(toggleButton);
        }
    }

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateIcon(currentTheme);
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            updateIcon('dark');
        } else {
            updateIcon('light');
        }
    }

    toggleButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateIcon('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateIcon('dark');
        }
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            toggleButton.textContent = '🌙'; // Moon
        } else {
            toggleButton.textContent = '☀️'; // Sun
        }
    }
});
