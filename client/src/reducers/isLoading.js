export default (state = true, action) => (
  (action.type === 'FETCH_SLOTS_SUCCESS') ? false : state
);
