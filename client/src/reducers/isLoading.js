const isLoading = (state = true, action) => {
  switch (action.type) {
    case 'FETCH_SLOTS_SUCCESS':
    case 'FETCH_SLOTS_FAILURE':
      return false;
    case 'FETCH_SLOTS_REQUEST':
      return true;
    default:
      return state
  }
};

export default isLoading;
