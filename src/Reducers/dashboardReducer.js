import {
  SEARCH_DATA_CHANGE,
  START_YOUTUBE_FETCH,
  YOUTUBE_VIDEOS_LIST,
  START_VIDEO_FAVORITE,
  VIDEO_FAVORITE,
  START_FAVORITE_VIDEOS_FETCH,
  VIDEOS_FETCH_SUCCESS
} from '../Actions/types';

/**
 * Initial Dashboard state
 */

const INITIAL_STATE = {
  searchText: '',
  loadingVideos: false,
  videos: '',
  loadingFavorite: false,
  fetchingFavorite: false,
  favoriteVideos: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_DATA_CHANGE: 
      return { ...state, searchText: action.payload };
    case START_YOUTUBE_FETCH:
      return { ...state, loadingVideos: true };
    case YOUTUBE_VIDEOS_LIST:
      return { ...state, ...INITIAL_STATE, videos: action.payload };
    case START_VIDEO_FAVORITE:
      return { ...state, loadingFavorite: true };
    case VIDEO_FAVORITE:
      return { ...state, videos: favoriteVideo(state.videos, action), loadingFavorite: false };
    case START_FAVORITE_VIDEOS_FETCH: 
      return { ...state, fetchingFavorite: true };
    case VIDEOS_FETCH_SUCCESS:
      return { ...state, favoriteVideos: action.payload, fetchingFavorite: false };
    default:
      return INITIAL_STATE;
  }
};

/**
 * A helper function for favoriting a single video by changing favorite
 * flag in the video to true
 * @param {*} videos 
 * @param {*} action 
 */

const favoriteVideo = (videos, action) => videos.map((video) => {
  if (video.id.videoId === action.payload) {
    return { ...video, favorite: true };
  }
    return { ...video };
});
