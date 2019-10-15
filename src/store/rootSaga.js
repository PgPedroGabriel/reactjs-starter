import { all } from 'redux-saga/effects';

import list from './modules/List/sagas';

export default function* rootSaga() {
  return yield all([list]);
}
