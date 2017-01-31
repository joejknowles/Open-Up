export default (state = [], action) => {
  if (action.type === 'FETCH_SLOTS_FAILURE') {
    return [
      ...state,
      ...action.response.errors
    ];
  }
  return state;
};
