/* eslint-disable no-param-reassign */
import produce from 'immer';
import { types } from './actions';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

export default function list(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LIST:
      return produce(state, draft => {
        if (action.list) {
          draft.data = action.list;
        }
        draft.loading = false;
        return draft;
      });
    case types.LIST_ERROR:
      return produce(state, draft => {
        const {message} = action.error;
        if(message === 'Network Error'){
          draft.error = true;
        }

        draft.loading = false;
        return draft;
      })
    case types.LIST_LOADING:
      return produce(state, draft => {
        draft.loading = true;
        return draft;
      })
    default:
      return state;
  }
}
