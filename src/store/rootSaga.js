import { all } from 'redux-saga/effects';

import list from './modules/List/sagas';
import auth from './modules/Auth/sagas';
import user from './modules/User/sagas';

export default function* rootSaga() {
  return yield all([list, auth, user]);
}
