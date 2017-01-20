export const fetchSlots = (date) => (dispatch) => {
  dispatch({type: 'FETCH_SLOTS_REQUEST'})
  return Promise.resolve();
}
