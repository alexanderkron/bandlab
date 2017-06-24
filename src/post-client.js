export default class PostClient {
    constructor() {
        this.POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
        this.USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

        this.posts = [];
    }

    _getUsers() {
        return fetch(this.USERS_ENDPOINT).then(response => {
            return response.json()
        });
    }

    _getUsernameForUserId(userId, users) {
        for (let user of users) {
            if (user.id === userId) {
                return user.username;
            }
        }
    }

    getPosts() {
        if (this.posts.length) {
            return Promise.resolve(this.posts);
        }

        // First get all the posts
        return fetch(this.POST_ENDPOINT).then(response => {
            return response.json();
        // After we have the posts, get the users
        }).then(posts => {
            return this._getUsers().then(users => {
                // Finally, using the userId of the post, look up the username
                // and attach that to the post
                const postsWithUsername = posts.map(post => {
                    post.username = this._getUsernameForUserId(post.userId, users);
                    return post;
                });
                this.posts = postsWithUsername;
                return postsWithUsername;
           });
        });

    }

    getPostsOrderedByTitle() {
        // Assumes posts have already been retrieved
        this.sortPostsByTitle();
        return this.posts;
    }

    sortPostsByTitle() {
        // This will reorder the post store so attempting to get posts
        // again will still return ordered posts. Maybe this is okay?
        return this.posts.sort((onePost, anotherPost) => {
            if (onePost.title > anotherPost.title) {
                return 1;
            } else {
                return -1;
            }
        });
    }

    getPostsGroupedByUsername() {
        // Assumes posts have already been retrieved
        this.sortPostsByUsername();
        return this.posts;
    }

    sortPostsByUsername() {
        // This will reorder the post store so attempting to get posts
        // again will still return ordered posts. Maybe this is okay?
        return this.posts.sort((onePost, anotherPost) => {
            if (onePost.username > anotherPost.username) {
                return 1;
            } else {
                return -1;
            }
        });
    }
}
