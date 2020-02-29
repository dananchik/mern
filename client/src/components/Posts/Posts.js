import React, {Component} from 'react'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []}
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/posts', {
            method: 'GET',
            headers: {
                'Authorization': `any`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({posts: data})
            );
        console.log(this.state.posts);
    }

    render() {
        return (
            // <div className="posts">
            //     {this.state.posts.length == 0 ? 'У нас нету постов!'
            //         : this.state.posts.map(post => (
            //             <div className="post">
            //                 <div>{post.title}</div>
            //                 <div>{post.content}</div>
            //             </div>
            //         ))
            //
            //     }
            // </div>
            <div></div>
        )
    }
}

export default Posts