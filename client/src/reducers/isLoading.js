const isEndLoadingType = ({ type }) => (
  type === 'FETCH_SLOTS_SUCCESS' || type === 'FETCH_SLOTS_FAILURE'
);

const isLoading = (state = true, action) => (
  isEndLoadingType(action) ? false : state
);

export default isLoading;
