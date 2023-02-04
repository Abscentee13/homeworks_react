import React from "react";
import {Component} from "react";
import {postService} from "../../services";
import {Post} from "../Post/Post";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {posts:[]}
    }
    componentDidMount() {
        postService.getAll().then(({data})=>this.setState({posts:[...data]}))
    }

    render() {
        return(
            <div className="post-block">
                {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {
    Posts
}