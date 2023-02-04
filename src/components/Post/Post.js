import React from 'react';
import {Component} from "react";

import "./Post.css";

class Post extends Component {

    render() {
        const {id, userId, title, body} = this.props.post;
        return (
            <div className="post-block">
                <div>id: {id}</div>
                <div>userId: {userId}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}

export {
    Post
}