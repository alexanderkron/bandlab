import React from 'react';

export default class Post extends React.Component {

    render() {
        return (
            <div className="post">
                <h4 className="post-title">{this.props.title}</h4> - <i>{this.props.username}</i>
                <p>{this.props.body}</p>
            </div>
        )
    }
}
