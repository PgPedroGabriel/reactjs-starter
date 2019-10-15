import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { showSuccess } from './actions';

function* listAll() {
  const list = yield call(api.get, '/list');
  yield put(showSuccess(list.data));
}

export default all([takeLatest('@list/SHOW_REQUEST', listAll)]);
