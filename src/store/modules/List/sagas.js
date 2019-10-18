import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import {
  types,
  handleList,
  handleListError,
  handleListLoader,
} from './actions';

function* listAll() {
  yield put(handleListLoader());
  try {
    const list = yield call(api.get, '/list');
    yield put(handleList(list.data));
  } catch (error) {
    yield put(handleListError(error));
  }
}

export default all([takeLatest(types.LIST_REQUEST, listAll)]);
