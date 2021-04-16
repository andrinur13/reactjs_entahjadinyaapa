import axios from 'axios';
import React, { Component, Fragment } from 'react'
import Post from '../../components/Blog/Post';

class BlogPost extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if(response.status !== 200) {
                    console.log('error');
                } else {
                    this.setState({
                        post: response.data
                    })
                }
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