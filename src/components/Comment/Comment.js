import React from 'react';
import {Component} from "react";

class Comment extends Component {

    render() {
        const {id, postId, name, email, body} = this.props.post;
        return (
            <div>
                <div>id: {id}</div>
                <div>postId: {postId}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}

export {
    Comment
}