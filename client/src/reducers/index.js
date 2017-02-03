import { combineReducers } from 'redux';
import isLoading from './isLoading';
import bookings from './bookings';
import alerts, { alertsById } from './alerts';
import { getNextDay, parseDate, getPrevDay } from '../helpers/dates';
import { slotsById, allSlots } from './slots';

export const selectedDate = (state = '', action) => {
  switch (action.type) {
    case 'FETCH_SLOTS_SUCCESS':
      return parseDate(action.response.date);
    case 'NEXT_DAY':
      return getNextDay(state);
    case 'PREV_DAY':
      return getPrevDay(state);
    default:
      return state;
  }
};

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

export const isDateCachedSelector = (
  { slotsByDate, selectedDate }
) => slotsByDate.hasOwnProperty(selectedDate);

export default combineReducers({
  selectedDate,
  slotsById,
  allSlots,
  isLoading,
  bookings,
  alerts,
  alertsById
});
