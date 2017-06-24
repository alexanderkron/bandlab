import React from 'react';
import ReactDOM from 'react-dom'
import PostClient from '../post-client.js'

import Post from './post.js'

class Posts extends React.Component {
    constructor() {
        super();
        this.postClient = new PostClient();
        this.state = {};
    }

    getPosts() {
        this.postClient.getPosts().then(response => {
            this.setState(() => {
                return {
                    posts: response
                };
            });
        });
    }

    orderByTitle() {
        const orderedPosts = this.postClient.getPostsOrderedByTitle();
        this.setState(() => {
            return {
                posts: orderedPosts
            }
        });
    }

    groupByUsername() {
        const groupedPosts = this.postClient.getPostsGroupedByUsername();
        this.setState(() => {
            return {
                posts: groupedPosts
            }
        });
    }

    renderEmpty() {
        return <h4>No posts to display</h4>
    }

    renderPosts() {
        return this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} body={post.body} username={post.username} />
        });
    }

    render() {
        let posts;
        if (!this.state.posts) {
            posts = this.renderEmpty();
        } else {
            posts = this.renderPosts();
        }
        return (
            <div>
                <h1>Posts</h1>
                <button onClick={this.getPosts.bind(this)}>Get posts</button>
                <p className={'posts' in this.state ? '' : 'hidden'}>
                    <b>Order by</b> - <a href="#" onClick={this.orderByTitle.bind(this)}>title</a>
                </p>
                <p className={'posts' in this.state ? '' : 'hidden'}>
                    <b>Group by</b> - <a href="#" onClick={this.groupByUsername.bind(this)}>username</a>
                </p>
                {posts}
            </div>
        );
    }
}

ReactDOM.render(
  <Posts/>,
  document.getElementById('root')
);
