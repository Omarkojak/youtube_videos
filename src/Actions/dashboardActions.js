import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import firebase from 'firebase';
import {
  SEARCH_DATA_CHANGE,
  START_YOUTUBE_FETCH,
  YOUTUBE_VIDEOS_LIST,
  START_VIDEO_FAVORITE,
  VIDEO_FAVORITE
} from './types';

export const searchDataChange = (value) => ({
  type: SEARCH_DATA_CHANGE,
  payload: value
});

export const searchYoutube = (query) => (dispatch) => {
    dispatch({
        type: START_YOUTUBE_FETCH
    });

    axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyAc3RXls3KST69BJTb9v2JzptvVooQe3vM`
    ).then((response) => {
      const videos = response.data.items.map((item) => ({ ...item, favorite: false }));
      dispatch({
        type: YOUTUBE_VIDEOS_LIST,
        payload: videos
      });
      Actions.videosList();
    });
};

export const favoriteVideo = (video) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({
      type: START_VIDEO_FAVORITE
    });

    firebase.database().ref(`users/${currentUser.uid}/videos`)
    .push({ ...video })
    .then(() => {
      dispatch({
        type: VIDEO_FAVORITE,
        payload: video.id.videoId
      });
    })
    ;
  };
};
