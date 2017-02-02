import { combineReducers } from 'redux';
import isLoading from './isLoading';
import bookings from './bookings';
import alerts, { alertsById } from './alerts';
import { getNextDay, parseDate } from '../helpers/dates';

export const selectedDate = (state = '', action) => {
  switch (action.type) {
    case 'FETCH_SLOTS_SUCCESS':
      return parseDate(action.response.date);
    case 'NEXT_DAY':
      return getNextDay(state);
    default:
      return state;
  }
};

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

export const isLoadingSelector = ({ isLoading }) => (
  isLoading
);

export const selectedDateSelector = ({ selectedDate }) => (
  selectedDate
);

export const slotsSelector = ({ allSlots }) => (
  allSlots
);

export const createSlotSelector = (id) => ({ slotsById }) => (
  slotsById[id]
);

export const alertsSelector = ({ alerts }) => alerts;

export const createAlertSelector = (id) => ({alertsById}) => alertsById[id];

export default combineReducers({
  selectedDate,
  slotsById,
  allSlots,
  isLoading,
  bookings,
  alerts,
  alertsById
});
