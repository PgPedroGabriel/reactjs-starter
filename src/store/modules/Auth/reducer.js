/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { types } from './actions';

const INITIAL_STATE = {
  loading: false,
  error: false,
  errorMessage: null,
  token: null,
  userId: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.AUTH_START:
      return produce(state, draft => {
        draft.loading = true;
        return draft;
      });
    case types.AUTH_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.error = false;
        draft.errorMessage = null;
        draft.token = action.token;
        draft.userId = action.userId;
      });
    case types.AUTH_FAIL:
      return produce(state, draft => {
        draft.loading = false;
        draft.error = true;
        draft.errorMessage = action.error;
      });
    default:
      return state;
  }
}
