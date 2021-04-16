import axios from 'axios';
import React, { Component, Fragment } from 'react'
import Post from '../../components/Blog/Post';

class BlogPost extends Component {
    state = {
        post: []
    }

    handleRemove = (data) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${data}`)
            .then(response => {
                console.log(response);
            })
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
                        return <Post key={data.id} data={data} remove={this.handleRemove} />
                    })
                }
            </Fragment>
        );
    }
}

export default BlogPost;