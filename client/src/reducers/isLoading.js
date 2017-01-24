export default (state = true, action) => (
  isEndLoadingType(action) ? false : state
);

const isEndLoadingType = ({ type }) => type === 'FETCH_SLOTS_SUCCESS';
