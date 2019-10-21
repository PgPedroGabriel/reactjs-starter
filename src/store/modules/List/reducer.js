/* eslint-disable no-param-reassign */
import produce from 'immer';
import { types } from './actions';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

export default function list(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.LIST: {
        if (action.list) {
          draft.data = action.list;
        }
        draft.loading = false;
        break;
      }
      case types.LIST_ERROR: {
        const { message } = action.error;
        if (message === 'Network Error') {
          draft.error = true;
        }
        draft.loading = false;
        break;
      }
      case types.LIST_LOADING: {
        draft.data = [];
        draft.loading = true;
        break;
      }
      default:
    }
  });
}
