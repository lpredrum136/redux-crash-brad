import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newPost } from '../actions/postActions';

class Postform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    /*event.persist();THIS WAY IS FINE, MY WAY
    this.setState(prevState => {
      return {
        [event.target.name]: event.target.value
      };
    });*/

    this.setState({ [event.target.name]: event.target.value });
  }

  async onSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    // CALL ACTION
    /*const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    });

    const data = await res.json();
    console.log(data);*/

    this.props.newPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor=''>Title</label>
            <br />
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor=''>Body</label>
            <br />
            <textarea
              name='body'
              value={this.state.body}
              onChange={this.onChange}
            ></textarea>
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

Postform.propTypes = {
  newPost: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    new_post: state.myposts.item
  };
}; // Doesn't do anything here because we need to add the new_post to Posts component in Posts.js

export default connect(
  mapStateToProps, //de null cung duoc vi k dung toi
  { newPost }
)(Postform);
