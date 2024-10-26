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

// Set current year in footer
// Blog post data - In a real application, this would come from a backend
const blogPosts = {
    1: {
        title: "Blog Post Title 1",
        date: "April 20, 2024",
        category: "Development",
        content: "Your blog post content goes here...",
        tags: ["JavaScript", "Web Development", "Tutorial"]
    },
    2: {
        title: "Blog Post Title 2",
        date: "April 18, 2024",
        category: "Technology",
        content: "Your blog post content goes here...",
        tags: ["Technology", "Innovation"]
    },
    3: {
        title: "Blog Post Title 3",
        date: "April 15, 2024",
        category: "Web Design",
        content: "Your blog post content goes here...",
        tags: ["Design", "UI/UX"]
    },
    4: {
        title: "Blog Post Title 4",
        date: "April 10, 2024",
        category: "Programming",
        content: "Your blog post content goes here...",
        tags: ["Programming", "Coding"]
    }
};

// Function to load blog post content
function loadBlogPost() {
    // Only run on blog post page
    if (!window.location.pathname.includes('blog-post.html')) return;

    // Get post ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    // Get post data
    const post = blogPosts[postId];
    
    // If post exists, update the page content
    if (post) {
        // Update title
        document.querySelector('.blog-post-title').textContent = post.title;
        
        // Update metadata
        const metaElement = document.querySelector('.blog-post-meta');
        metaElement.innerHTML = `
            <span class="date">${post.date}</span>
            <span class="category">${post.category}</span>
        `;
        
        // Update content
        document.querySelector('.blog-post-content').innerHTML = post.content;
        
        // Update tags
        const tagsContainer = document.querySelector('.blog-post-tags');
        tagsContainer.innerHTML = post.tags.map(tag => `
            <span class="tag">${tag}</span>
        `).join('');
        
        // Update navigation
        updateNavigation(parseInt(postId));
    } else {
        // Handle 404
        document.querySelector('main').innerHTML = `
            <div class="blog-post">
                <h1>404 - Post Not Found</h1>
                <p>Sorry, the blog post you're looking for doesn't exist.</p>
                <a href="blogs.html">← Back to Blog List</a>
            </div>
        `;
    }
}

// Function to update navigation links
function updateNavigation(currentId) {
    const nav = document.querySelector('.blog-post-navigation');
    if (!nav) return;

    const maxId = Object.keys(blogPosts).length;
    
    nav.innerHTML = `
        ${currentId > 1 ? 
            `<a href="blog-post.html?id=${currentId - 1}" class="prev-post">← Previous Post</a>` : 
            '<span></span>'}
        ${currentId < maxId ? 
            `<a href="blog-post.html?id=${currentId + 1}" class="next-post">Next Post →</a>` : 
            '<span></span>'}
    `;
}

// Initialize blog functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', loadBlogPost);


// Add this to script.js

// Project data - In a real application, this would come from a backend
const projects = {
    1: {
        title: "Project 1",
        description: "A detailed description of your first project. This can be a few sentences long to give readers a good idea of what the project is about...",
        technologies: ["React", "Node.js", "MongoDB"],
        category: "Web Development",
        image: "/api/placeholder/400/300",
        demoLink: "https://project1-demo.com",
        githubLink: "https://github.com/username/project1",
        date: "April 2024"
    },
    2: {
        title: "Project 2",
        description: "A detailed description of your second project. This can be a few sentences long to give readers a good idea of what the project is about...",
        technologies: ["Python", "TensorFlow", "AWS"],
        category: "Machine Learning",
        image: "/api/placeholder/400/300",
        demoLink: "https://project2-demo.com",
        githubLink: "https://github.com/username/project2",
        date: "March 2024"
    },
    3: {
        title: "Project 3",
        description: "A detailed description of your third project. This can be a few sentences long to give readers a good idea of what the project is about...",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        category: "Frontend Development",
        image: "/api/placeholder/400/300",
        demoLink: "https://project3-demo.com",
        githubLink: "https://github.com/username/project3",
        date: "February 2024"
    },
    4: {
        title: "Project 4",
        description: "A detailed description of your fourth project. This can be a few sentences long to give readers a good idea of what the project is about...",
        technologies: ["Flutter", "Firebase", "Dart"],
        category: "Mobile Development",
        image: "/api/placeholder/400/300",
        demoLink: "https://project4-demo.com",
        githubLink: "https://github.com/username/project4",
        date: "January 2024"
    }
};

// Function to load project details
function loadProject() {
    // Only run on project page
    if (!window.location.pathname.includes('project.html')) return;

    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    // Get project data
    const project = projects[projectId];
    
    // If project exists, update the page content
    if (project) {
        document.querySelector('.project-title').textContent = project.title;
        
        // Update metadata
        const metaElement = document.querySelector('.project-meta');
        metaElement.innerHTML = `
            <span class="date">${project.date}</span>
            <span class="category">${project.category}</span>
        `;
        
        // Update content
        document.querySelector('.project-content').innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <p>${project.description}</p>
        `;
        
        // Update technologies
        const techContainer = document.querySelector('.project-technologies');
        techContainer.innerHTML = project.technologies.map(tech => `
            <span class="tag">${tech}</span>
        `).join('');
        
        // Update links
        document.querySelector('.project-links').innerHTML = `
            <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="demo-link">Live Demo</a>
            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="github-link">View on GitHub</a>
        `;
    } else {
        // Handle 404
        document.querySelector('main').innerHTML = `
            <div class="project">
                <h1>404 - Project Not Found</h1>
                <p>Sorry, the project you're looking for doesn't exist.</p>
                <a href="index.html#projects">← Back to Projects</a>
            </div>
        `;
    }
}

// Initialize project functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPost();
    loadProject();
});