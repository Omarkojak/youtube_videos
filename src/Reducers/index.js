import { combineReducers } from 'redux';
import authReducer from '../Reducers/authReducer';

export default combineReducers({
  auth: authReducer  
});
