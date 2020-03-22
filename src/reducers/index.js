import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  myposts: postReducer
});

export default rootReducer;
