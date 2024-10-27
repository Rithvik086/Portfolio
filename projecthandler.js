// Helper function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
        year: 'numeric', 
        month: 'long'
    }).format(date);
}

// Function to create project card HTML
function createProjectCard(project, isDetailedView = false) {
    const formattedDate = formatDate(project.date);
    
    return `
        <div class="project-card" data-project-id="${project.id}">
            <img src="${project.image || '/api/placeholder/400/300'}" alt="${project.title}" class="project-image">
            <h3>${project.title}</h3>
            <div class="project-meta">
                <span class="date">${formattedDate}</span>
                <span class="status ${project.status.toLowerCase()}">${project.status}</span>
            </div>
            <p class="description">${isDetailedView ? project.content : project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => 
                    `<span class="technology">${tech}</span>`
                ).join('')}
            </div>
            <div class="project-links">
                ${project.githubUrl ? 
                    `<a href="${project.githubUrl}" class="github-link" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> GitHub
                    </a>` : ''
                }
                ${project.liveUrl ? 
                    `<a href="${project.liveUrl}" class="live-link" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''
                }
            </div>
            ${!isDetailedView ? 
                `<a href="project.html?id=${project.id}" class="view-project">
                    View Details →
                </a>` : ''
            }
        </div>
    `;
}


// Function to fetch and parse project data
async function fetchProjectData() {
    try {
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.projects;
    } catch (error) {
        console.error('Error fetching project data:', error);
        return [];
    }
}


// Function to update latest projects on homepage
async function updateLatestProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    try {
        const projects = await fetchProjectData();
        projectGrid.innerHTML = ''; // Clear existing content
        
        // Changed to display only the latest 2 projects instead of 3
        const latestProjects = projects
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 2); 

        latestProjects.forEach(project => {
            projectGrid.insertAdjacentHTML('beforeend', createProjectCard(project));
        });
    } catch (error) {
        console.error('Error updating latest projects:', error);
        projectGrid.innerHTML = '<p class="error">Failed to load projects. Please try again later.</p>';
    }
}

// Function to load all projects on the projects listing page
async function loadProjects() {
    const projectList = document.getElementById('project-list');
    if (!projectList) return;

    const projectGrid = projectList.querySelector('.project-grid');
    if (!projectGrid) return;

    try {
        const projects = await fetchProjectData();
        projectGrid.innerHTML = ''; // Clear existing content

        // Sort projects by date (newest first)
        const sortedProjects = projects.sort((a, b) => new Date(b.date) - new Date(a.date));

        sortedProjects.forEach(project => {
            projectGrid.insertAdjacentHTML('beforeend', createProjectCard(project));
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        projectGrid.innerHTML = '<p class="error">Failed to load projects. Please try again later.</p>';
    }
}

// Function to load individual project
async function loadProject() {
    if (!window.location.pathname.includes('project.html')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        showProjectError('No project ID specified');
        return;
    }

    try {
        const projects = await fetchProjectData();
        const project = projects.find(proj => proj.id === parseInt(projectId));

        if (project) {
            updateProjectPage(project);
        } else {
            showProjectError('Project not found');
        }
    } catch (error) {
        console.error('Error loading project:', error);
        showProjectError('Failed to load project');
    }
}

// Helper function to update project page
function updateProjectPage(project) {
    // Update the page title
    document.title = `${project.title} - Rithvik's Projects`;
    
    // Update the project title
    const titleElement = document.querySelector('.project-title');
    if (titleElement) {
        titleElement.textContent = project.title;
    }

    // Update the main content area with the detailed project card
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.innerHTML = createProjectCard(project, true);
    }
}

// Helper function to show project error
function showProjectError(message) {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="error-container">
                <h1>Error</h1>
                <p>${message}</p>
                <a href="projects.html" class="back-link">← Back to Projects</a>
            </div>
        `;
    }
}

// Initialize all project-related functionality
document.addEventListener('DOMContentLoaded', () => {
    updateLatestProjects();
    loadProjects();
    loadProject();
});

export {
    fetchProjectData,
    updateLatestProjects,
    loadProjects,
    loadProject
};