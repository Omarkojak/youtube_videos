import { combineReducers } from 'redux';
import authReducer from '../Reducers/authReducer';
import dashboardReducer from '../Reducers/dashboardReducer';

export default combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer
});
