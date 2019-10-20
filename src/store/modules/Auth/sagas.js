import { all, select, takeLatest, put, call } from 'redux-saga/effects';
import {
  types,
  authStart,
  authFail,
  authSuccess,
  logoutSucceed,
} from './actions';
import { api } from '../../../services/api';

function* startAuth({ email, password }) {
  if (!email || !password) {
    yield put(authFail('Preencha todos os campos'));
    return;
  }

  yield put(authStart());
  try {
    const request = yield call(
      api.get,
      `/login?email=${email}&password=${password}`
    );

    const { token, ...user } = request.data ? request.data[0] : null;

    if (!token) {
      yield put(authFail('Email e senha inválidos'));
    } else {
      // yield localStorage.setItem('token', token);
      // yield localStorage.setItem('userId', userId);
      yield put(authSuccess(token, user));
    }
  } catch (error) {
    yield put(authFail('Falha em realizar login, verifique seu login e senha'));
  }
}

function* initLogout() {
  const userId = yield select(state => state.userId);
  if (!userId) {
    yield put(logoutSucceed());
  } else {
    yield put(authFail('Você não está logado'));
  }
}

export default all([
  takeLatest(types.AUTH_USER, startAuth),
  takeLatest(types.AUTH_INITIATE_LOGOUT, initLogout),
]);
