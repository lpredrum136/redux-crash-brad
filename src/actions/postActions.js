import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => {
  const dispatchFetchPosts = async dispatch => {
    console.log('fetching');
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    //console.log(res);
    dispatch({
      type: FETCH_POSTS,
      payload: posts
    });
  };

  return dispatchFetchPosts;
};

export const newPost = postData => {
  console.log('new post action called');
  const dispatchNewPost = async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    });

    const new_post = await res.json();
    //console.log(data);
    dispatch({
      type: NEW_POST,
      payload: new_post
    });
  };

  return dispatchNewPost;
};
