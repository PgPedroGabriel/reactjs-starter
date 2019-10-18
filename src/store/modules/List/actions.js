export const types = {
  LIST: '@list/LIST',
  LIST_ERROR: '@list/LIST_ERROR',
  LIST_REQUEST: '@list/LIST_REQUEST',
  LIST_LOADING: '@list/LIST_LOADING',
};

export function handleList(list) {
  return {
    type: types.LIST,
    list,
  };
}

export function handleListError(error) {
  return {
    type: types.LIST_ERROR,
    error,
  };
}

export function handleListLoader() {
  return {
    type: types.LIST_LOADING,
  };
}

export function getList() {
  return {
    type: types.LIST_REQUEST,
  };
}
