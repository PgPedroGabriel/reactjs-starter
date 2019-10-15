export function showSuccess(list) {
  return {
    type: '@list/SHOW_SUCCES',
    list,
  };
}

export function showRequest() {
  return {
    type: '@list/SHOW_REQUEST',
  };
}
