export const slotsById = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SLOTS_SUCCESS':
      return {
        ...state,
        ...action.response.entities.slots
      };
    case 'BOOK_SLOT_SUCCESS':
      const slot = { ...state[action.slotId]  }
      slot.booking = action.response.bookingId;
      return {
        ...state,
        [action.slotId]: slot
      };
    default:
      return state;
  }
}

export const allSlots = (state = [], action) => (
  action.type === 'FETCH_SLOTS_SUCCESS' ? action.response.result : state
);

export const slotsByDate = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SLOTS_SUCCESS':
      return {
        ...state,
        [action.response.date]: action.response.result
      }
    default:
    return state;
  }
};
