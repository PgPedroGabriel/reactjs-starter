/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { types as AuthTypes } from '../Auth/actions';

const INITIAL_STATE = {
  user: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case AuthTypes.AUTH_SUCCESS:
        draft.user = action.user;
        break;
      case AuthTypes.AUTH_LOGOUT:
        draft.user = null;
        break;
      default:
    }
  });
}
