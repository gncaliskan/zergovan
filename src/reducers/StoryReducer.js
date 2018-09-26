import {
  GETTING_STORIES,
  LIST_STORIES
} from '../actions/types';

const INITIAL_STATE =
{
  storyList: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETTING_STORIES:
      return Object.assign({}, state, { storyList: action.payload });
    case LIST_STORIES:
        return Object.assign({}, state, { storyList: action.payload });
    default:
     return state;
  }
};
