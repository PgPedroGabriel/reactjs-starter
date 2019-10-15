/* eslint-disable no-param-reassign */
import produce from 'immer';

export default function list(state = [], action) {
  switch (action.type) {
    case '@list/SHOW_SUCCES':
      return produce(state, draft => {
        if (action.list) {
          draft = action.list;
        }
        return draft;
      });
    default:
      return state;
  }
}
