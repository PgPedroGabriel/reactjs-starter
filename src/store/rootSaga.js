import { all } from 'redux-saga/effects';

import list from './modules/List/sagas';
import auth from './modules/Auth/sagas';

export default function* rootSaga() {
  return yield all([list, auth]);
}
