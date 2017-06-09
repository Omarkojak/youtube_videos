import {
  SEARCH_DATA_CHANGE,
  START_YOUTUBE_FETCH,
  YOUTUBE_VIDEOS_LIST
} from '../Actions/types';

/**
 * Initial Dashboard state
 */

const INITIAL_STATE = {
  searchText: '',
  loading: false,
  videos: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_DATA_CHANGE: 
      return { ...state, searchText: action.payload };
    case START_YOUTUBE_FETCH:
      return { ...state, loading: true };
    case YOUTUBE_VIDEOS_LIST:
      return { ...state, ...INITIAL_STATE, videos: action.payload };
    default:
      return INITIAL_STATE;
  }
};
