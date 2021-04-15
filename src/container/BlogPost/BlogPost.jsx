import React, { Component, Fragment } from 'react'
import Post from '../../components/Blog/Post';

class BlogPost extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            this.setState({
                post: json
            })
        })
    }

    render() {
        return(
            <Fragment>
                <p className="h1"> Blog Post </p>
                <hr/>
                {
                    this.state.post.map(data => {
                        return <Post key={data.id} title={data.title} desc={data.body} />
                    })
                }
            </Fragment>
        );
    }
}

export default BlogPost;