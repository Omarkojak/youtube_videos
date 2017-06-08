import {
  LOGIN_DATA_CHANGE,
  START_USER_LOGIN,
  LOGIN_SUCESS,
  LOGIN_FAIL
} from '../Actions/types';

/**
 * Initial Auth state
 */

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_DATA_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case START_USER_LOGIN:
      return { ...state, loading: true, error: '' };
    case LOGIN_SUCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload.user };
    case LOGIN_FAIL:
      return { 
        ...state,
        error: 'Authentication Failed. Please Try again !!',
        loading: false,
        password: '' 
      };
    default: 
      return INITIAL_STATE;
  }
};
