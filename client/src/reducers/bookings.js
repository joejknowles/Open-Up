const bookings = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SLOTS_SUCCESS':
      return {
        ...state,
        ...action.response.entities.bookings
      };
    default:
      return state;
  }
};

export default bookings;
