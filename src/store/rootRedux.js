import { combineReducers } from 'redux';
import list from './modules/List/reducer';
import auth from './modules/Auth/reducer';
import user from './modules/User/reducer';

export default combineReducers({
  list,
  auth,
  user,
});
