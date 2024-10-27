// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
    updateThemeIcon(savedTheme === 'dark-mode');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
    updateThemeIcon(isDarkMode);
});

// Update theme icon
function updateThemeIcon(isDarkMode) {
    themeToggle.innerHTML = isDarkMode 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

// Function to load project details
async function loadProject() {
    if (!window.location.pathname.includes('project.html')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    try {
        const response = await fetch("projects.json");
        const data = await response.json();

        const project = data.find(proj => proj.id === parseInt(projectId));
        if (project) {
            document.querySelector('.project-title').textContent = project.title;
            const metaElement = document.querySelector('.project-meta');
            metaElement.innerHTML = `<span class="date">${project.date}</span><span class="category">${project.category}</span>`;
            document.querySelector('.project-content').innerHTML = `<img src="${project.image}" alt="${project.title}" class="project-image"><p>${project.description}</p>`;
            const techContainer = document.querySelector('.project-technologies');
            techContainer.innerHTML = project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('');
            document.querySelector('.project-links').innerHTML = `<a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="demo-link">Live Demo</a><a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="github-link">View on GitHub</a>`;
        } else {
            document.querySelector('main').innerHTML = `<div class="project"><h1>404 - Project Not Found</h1><p>Sorry, the project you're looking for doesn't exist.</p><a href="index.html#projects">← Back to Projects</a></div>`;
        }
    } catch (error) {
        console.error("Error loading projects:", error);
    }
}

// Initialize functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProject();
});