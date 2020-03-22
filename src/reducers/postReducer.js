import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('reducer_fetchposts');
      return {
        ...state,
        items: action.payload
      };

    case NEW_POST:
      console.log('reducer_newpost');
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
