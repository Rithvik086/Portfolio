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