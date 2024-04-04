document.addEventListener('DOMContentLoaded', function () {
    const postSpawner = document.getElementById('js--posts');

    // Dummy-gegevens voor testdoeleinden
    const dummyPosts = [
        {
            user: 'John Doe',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut tellus eget tortor consectetur vehicula.',
            date: '2023-03-15'
        },
        {
            user: 'Jane Smith',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            date: '2023-03-16'
        },
        {
            user: 'Alice Johnson',
            content: 'Fusce eu tellus sit amet ex maximus sollicitudin a a purus. Integer lacinia vestibulum justo eget elementum.',
            date: '2023-03-17'
        }
    ];


    const postsPerLoad = 5;

    function addDummyPosts() {
        for (let i = 0; i < postsPerLoad; i++) {
            const postIndex = Math.floor(Math.random() * dummyPosts.length);
            const postElement = createPostElement(dummyPosts[postIndex]);
            postSpawner.appendChild(postElement);
        }
    }


    function createPostElement(postData) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

   
        const userElement = document.createElement('div');
        userElement.classList.add('postUser');
        userElement.textContent = postData.user;
        postElement.appendChild(userElement);

     
        const contentElement = document.createElement('div');
        contentElement.classList.add('postContent');
        contentElement.textContent = postData.content;
        postElement.appendChild(contentElement);

      
        const dateElement = document.createElement('div');
        dateElement.classList.add('postDate');
        dateElement.textContent = formatDate(postData.date);
        postElement.appendChild(dateElement);

        return postElement;
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    function isAtBottom() {
        return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

 
    window.addEventListener('scroll', function () {
        if (isAtBottom()) {
            addDummyPosts();
        }
    });

    addDummyPosts();
});
