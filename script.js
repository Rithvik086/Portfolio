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

// Function to load all blog posts on the listing page
async function loadBlogPosts() {
    if (!window.location.pathname.includes('blogs.html')) return;

    try {
        const response = await fetch('blogs.json');
        const data = await response.json();
        
        const blogGrid = document.getElementById('blog-grid');
        blogGrid.innerHTML = ''; // Clear existing content

        data.posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'blog-card';
            postCard.innerHTML = `
                <h3>${post.title}</h3>
                <div class="blog-meta">
                    <span class="date">${post.date}</span>
                    <span class="category">${post.category}</span>
                </div>
                <p>${post.description}</p>
                <a href="blog-post.html?id=${post.id}" class="read-more">Read More →</a>
            `;
            blogGrid.appendChild(postCard);
        });
    } catch (error) {
        console.error('Error loading blog posts:', error);
    }
}

// Function to load a specific blog post
async function loadBlogPost() {
    if (!window.location.pathname.includes('blog-post.html')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    try {
        const response = await fetch('blogs.json');
        const data = await response.json();

        const post = data.posts.find(blog => blog.id === parseInt(postId));
        if (post) {
            document.querySelector('.blog-post-title').textContent = post.title;
            const metaElement = document.querySelector('.blog-post-meta');
            metaElement.innerHTML = `<span class="date">${post.date}</span><span class="category">${post.category}</span>`;
            document.querySelector('.blog-post-content').innerHTML = post.content.replace(/\n/g, '<br>');
            const tagsContainer = document.querySelector('.blog-post-tags');
            tagsContainer.innerHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            updateNavigation(parseInt(postId), data.posts.length);
        } else {
            document.querySelector('main').innerHTML = `<div class="blog-post"><h1>404 - Post Not Found</h1><p>Sorry, the blog post you're looking for doesn't exist.</p><a href="blogs.html">← Back to Blog List</a></div>`;
        }
    } catch (error) {
        console.error("Error loading blog post:", error);
    }
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

// Function to update navigation links
function updateNavigation(currentId, maxId) {
    const nav = document.querySelector('.blog-post-navigation');
    if (!nav) return;
    nav.innerHTML = `
        ${currentId > 1 ? `<a href="blog-post.html?id=${currentId - 1}" class="prev-post">← Previous Post</a>` : '<span></span>'}
        ${currentId < maxId ? `<a href="blog-post.html?id=${currentId + 1}" class="next-post">Next Post →</a>` : '<span></span>'}
    `;
}

// Initialize functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
    loadBlogPost();
    loadProject();
});
