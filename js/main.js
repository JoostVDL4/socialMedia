document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById('js--posts');

    async function fetchAndDisplayPosts() {
        try {
            const response = await fetch('json/socialPosts.json');
            const data = await response.json();

            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.user}</h2>
                    <p>${post.content}</p>
                    <span>${post.date}</span>
                `;
                postsContainer.appendChild(postElement);
            });
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    function loadMorePostsIfNeeded() {
        const lastPost = postsContainer.lastElementChild;
        const lastPostRect = lastPost.getBoundingClientRect();
        if (lastPostRect.bottom <= window.innerHeight) {
            fetchAndDisplayPosts();
        }
    }
    fetchAndDisplayPosts();
    window.addEventListener('scroll', loadMorePostsIfNeeded);
});
