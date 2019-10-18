import { combineReducers } from 'redux';
import list from './modules/List/reducer';
import auth from './modules/Auth/reducer';

export default combineReducers({
  list,
  auth,
});
