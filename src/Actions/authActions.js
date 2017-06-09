import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_DATA_CHANGE,
  START_USER_LOGIN,
  LOGIN_SUCESS,
  LOGIN_FAIL
} from './types';

export const loginDataChange = ({ prop, value }) => ({
  type: LOGIN_DATA_CHANGE,
  payload: { prop, value }
});

export const loginUser = ({ email, password }) => (dispatch) => {
    dispatch({
        type: START_USER_LOGIN
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch((error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    });
};

/**
 * Helper method for handling users login and signup successfully 
 * @param {*} dispatch 
 * @param {*} user 
 */

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCESS,
    payload: user
  });
  Actions.main();
};

/**
 * Helper method for handling authentication errors when users login or signup
 * @param {*} dispatch 
 */

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_FAIL
    });
};
