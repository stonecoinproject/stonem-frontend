import { combineReducers } from 'redux';
import { default as HomeScreenReducer } from '../screens/HomeScreen/reducer';
import { default as SignupScreenReducer } from '../screens/SignupScreen/reducer';

export default combineReducers({
  HomeScreenReducer,
  SignupScreenReducer,
});
