// Function to fetch and parse blog data
async function fetchBlogData() {
    try {
        const response = await fetch('blogs.json');
        const data = await response.json();
        return data.posts;
    } catch (error) {
        console.error('Error fetching blog data:', error);
        return [];
    }
}

// Function to update latest blog posts on homepage
async function updateLatestBlogPosts() {
    if (!document.querySelector('.blog-grid')) return;

    const posts = await fetchBlogData();
    const blogGrid = document.querySelector('.blog-grid');
    blogGrid.innerHTML = ''; // Clear existing content

    // Display only the latest 2 posts on the homepage
    posts.slice(0, 2).forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'blog-card';
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <div class="blog-meta">
                <span class="date">${post.date}</span>
                <span class="category">${post.category}</span>
            </div>
            <p>${post.description}</p>
            <div class="blog-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="blog-post.html?id=${post.id}" class="read-more">Read More →</a>
        `;
        blogGrid.appendChild(postCard);
    });
}

// Function to load all blog posts on the blog listing page
async function loadBlogPosts() {
    if (!document.getElementById('blog-grid')) return;

    const posts = await fetchBlogData();
    const blogGrid = document.getElementById('blog-grid');
    blogGrid.innerHTML = ''; // Clear existing content

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'blog-card';
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <div class="blog-meta">
                <span class="date">${post.date}</span>
                <span class="category">${post.category}</span>
            </div>
            <p>${post.description}</p>
            <div class="blog-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="blog-post.html?id=${post.id}" class="read-more">Read More →</a>
        `;
        blogGrid.appendChild(postCard);
    });
}

// Function to load individual blog post
async function loadBlogPost() {
    if (!window.location.pathname.includes('blog-post.html')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const posts = await fetchBlogData();
    const post = posts.find(blog => blog.id === parseInt(postId));

    if (post) {
        // Update the page title
        document.title = `${post.title} - Rithvik's Blog`;
        
        // Update the blog post title
        const titleElement = document.getElementById('blog-post-title');
        if (titleElement) {
            titleElement.textContent = post.title;
        }

        // Update meta information
        const metaElement = document.querySelector('.blog-post-meta');
        if (metaElement) {
            metaElement.innerHTML = `
                <span class="date">${post.date}</span>
                <span class="category">${post.category}</span>
            `;
        }

        // Update content
        const contentElement = document.querySelector('.blog-post-content');
        if (contentElement) {
            contentElement.innerHTML = post.content;
        }
        
        // Update tags
        const tagsElement = document.querySelector('.blog-post-tags');
        if (tagsElement) {
            tagsElement.innerHTML = post.tags.map(tag => 
                `<span class="tag">${tag}</span>`
            ).join('');
        }

        // Update navigation
        updateBlogNavigation(parseInt(postId), posts);
    } else {
        document.querySelector('main').innerHTML = `
            <div class="blog-post">
                <h1>404 - Post Not Found</h1>
                <p>Sorry, the blog post you're looking for doesn't exist.</p>
                <a href="blogs.html">← Back to Blog List</a>
            </div>
        `;
    }
}



// Function to update blog post navigation
function updateBlogNavigation(currentId, posts) {
    const nav = document.querySelector('.blog-post-navigation');
    if (!nav) return;

    const currentIndex = posts.findIndex(post => post.id === currentId);
    const prevPost = posts[currentIndex - 1];
    const nextPost = posts[currentIndex + 1];

    nav.innerHTML = `
        ${prevPost ? `<a href="blog-post.html?id=${prevPost.id}" class="prev-post">← ${prevPost.title}</a>` : '<span></span>'}
        ${nextPost ? `<a href="blog-post.html?id=${nextPost.id}" class="next-post">${nextPost.title} →</a>` : '<span></span>'}
    `;
}

// Initialize all blog-related functionality
document.addEventListener('DOMContentLoaded', () => {
    updateLatestBlogPosts(); // Update homepage blog section
    loadBlogPosts();         // Update blog listing page
    loadBlogPost();          // Load individual blog post if on blog post page
});

export {
    fetchBlogData,
    updateLatestBlogPosts,
    loadBlogPosts,
    loadBlogPost,
    updateBlogNavigation
};