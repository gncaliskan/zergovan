import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import StoryReducer from './StoryReducer';

export default combineReducers({
  auth: AuthReducer,
  story: StoryReducer
});
