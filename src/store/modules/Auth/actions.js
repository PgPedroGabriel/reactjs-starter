export const types = {
  AUTH_USER: '@auth/AUTH_USER',
  AUTH_START: '@auth/AUTH_START',
  AUTH_SUCCESS: '@auth/AUTH_SUCCESS',
  AUTH_FAIL: '@auth/AUTH_FAIL',
  AUTH_INITIATE_LOGOUT: '@auth/AUTH_INITIATE_LOGOUT',
  AUTH_LOGOUT: '@auth/AUTH_LOGOUT',
  AUTH_CHECK_TIMEOUT: '@auth/AUTH_CHECK_TIMEOUT',
};

export function auth(email, password) {
  return {
    type: types.AUTH_USER,
    email,
    password,
  };
}

export function authStart() {
  return {
    type: types.AUTH_START,
  };
}

export function authSuccess(token, user) {
  return {
    type: types.AUTH_SUCCESS,
    token,
    user,
  };
}

export function authFail(error) {
  return {
    type: types.AUTH_FAIL,
    error,
  };
}

export function logout() {
  return {
    type: types.AUTH_INITIATE_LOGOUT,
  };
}

export function logoutSucceed() {
  return {
    type: types.AUTH_LOGOUT,
  };
}

export function checkAuthTimeout(expirationTime) {
  return {
    type: types.AUTH_CHECK_TIMEOUT,
    expirationTime,
  };
}
