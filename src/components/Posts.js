import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  /* NO NEED BECAUSE STATE IS IN STORE
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }*/

  /* OLD ACTION
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    //console.log(res);
    this.setState(prevState => ({ posts: data }));
  }*/

  componentDidMount() {
    // Replace for componentWillMount
    this.props.fetchPosts();
  }

  /*componentWillReceiveProps(nextProps) {
    // Replace for componentWillReceiveProps
    if (nextProps.new_post) {
      // If it's there
      this.props.allposts.unshift(nextProps.new_post);
    }
  } DAY LA CACH CU*/

  shouldComponentUpdate(nextProps) {
    if (nextProps.new_post) {
      this.props.allposts.unshift(nextProps.new_post);
    }
    return true;
  }

  render() {
    const postItems = this.props.allposts.map(post => (
      <div key={post.id}>
        <h3>
          {post.id} -- {post.title}
        </h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  allposts: PropTypes.array.isRequired,
  new_post: PropTypes.object // No need to be required vi k phai luc nao cung co props nay, chi khi nao user tao new post
};

// To display the state returned from the reducer
const mapStateToProps = state => {
  return {
    allposts: state.myposts.items,
    new_post: state.myposts.item
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
