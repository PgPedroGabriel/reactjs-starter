import { all, takeLatest, put, call } from 'redux-saga/effects';
import { types, authStart, authFail, authSuccess } from './actions';
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

    const { token, userId } = request.data;

    if (!token) {
      yield put(authFail('Email e senha inválidos'));
    } else {
      yield put(authSuccess(token, userId));
    }
  } catch (error) {
    yield put(authFail('Falha em realizar login, verifique seu login e senha'));
  }
}

export default all([takeLatest(types.AUTH_USER, startAuth)]);
