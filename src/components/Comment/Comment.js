import React from 'react';
import {Component} from "react";

import './Comment.css';


class Comment extends Component {

    render() {
        const {id, postId, name, email, body} = this.props.comment;
        return (
            <div>
                <div className="comment-block-field">id: {id}</div>
                <div className="comment-block-field">postId: {postId}</div>
                <div className="comment-block-field">name: {name}</div>
                <div className="comment-block-field">email: {email}</div>
                <div className="comment-block-field">body: {body}</div>
            </div>
        )
    }
}

export {
    Comment
}