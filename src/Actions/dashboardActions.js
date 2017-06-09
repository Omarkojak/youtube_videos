import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
  SEARCH_DATA_CHANGE,
  START_YOUTUBE_FETCH,
  YOUTUBE_VIDEOS_LIST
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
      dispatch({
        type: YOUTUBE_VIDEOS_LIST,
        payload: response.data.items
      });
      Actions.videosList();
    });
}; 
