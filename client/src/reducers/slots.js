import { parseDate } from '../helpers/dates';

export const slotsById = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SLOTS_SUCCESS':
      return {
        ...state,
        ...action.response.entities.slots
      };
    case 'BOOK_SLOT_SUCCESS': {
      const slot = { ...state[action.slotId]  }
      slot.booking = action.response.bookingId;
      return {
        ...state,
        [action.slotId]: slot
      };
    }
    case 'BOOK_SLOT_REQUEST': {
      const slot = { ...state[action.slotId]  }
      slot.booking = 'pending';
      return {
        ...state,
        [action.slotId]: slot
      };
    }
    default:
      return state;
  }
}

export const slotsByDate = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SLOTS_SUCCESS':
      const date = parseDate(action.response.date);
      return {
        ...state,
        [date]: action.response.result
      }
    default:
    return state;
  }
};
