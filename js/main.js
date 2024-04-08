class SocialPosts {
    constructor() {
        this.postsContainer = document.getElementById('js--posts');
        this.init();
    }

    async fetchAndDisplayPosts() {
        try {
            const response = await fetch('json/socialPosts.json');
            const data = await response.json();
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post'); 
                const userHeading = document.createElement('h2');
                userHeading.textContent = post.user;
                userHeading.classList.add('postUser'); 
                const imageElement = document.createElement('img');
                imageElement.src = post.image;
                imageElement.alt = `${post.user}'s image`;
                imageElement.classList.add('postImage');
                const contentParagraph = document.createElement('p');
                contentParagraph.textContent = post.content;
                contentParagraph.classList.add('postContent');
                const dateSpan = document.createElement('span');
                dateSpan.textContent = post.date;
                dateSpan.classList.add('postDate');
               

                postElement.appendChild(userHeading);
                postElement.appendChild(imageElement);
                postElement.appendChild(contentParagraph);          
                postElement.appendChild(dateSpan);
        

                this.postsContainer.appendChild(postElement);
            });
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    loadMorePosts() {
        const lastPost = this.postsContainer.lastElementChild;
        const lastPostRect = lastPost.getBoundingClientRect();
        if (lastPostRect.bottom <= window.innerHeight) {
            this.fetchAndDisplayPosts();
        }
    }

    init() {
        this.fetchAndDisplayPosts();
        window.addEventListener('scroll', () => this.loadMorePosts());
    }
}


new SocialPosts();
