/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { types } from './actions';

const INITIAL_STATE = {
  loading: false,
  error: false,
  errorMessage: null,
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.AUTH_START:
      case types.AUTH_INITIATE_LOGOUT:
        draft.loading = true;
        draft.error = false;
        draft.errorMessage = null;
        break;
      case types.AUTH_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.errorMessage = null;
        draft.token = action.token;
        draft.userId = action.userId;
        break;
      case types.AUTH_FAIL:
        draft.loading = false;
        draft.error = true;
        draft.errorMessage = action.error;
        break;
      case types.AUTH_LOGOUT:
        draft.loading = false;
        draft.token = null;
        break;
      default:
    }
  });
}
