import { combineReducers } from 'redux';
import isLoading from './isLoading';
import bookings from './bookings';
import alerts, { alertsById } from './alerts';
import { getNextDay, getPrevDay } from '../helpers/dates';
import { slotsById, allSlots, slotsByDate } from './slots';

export const selectedDate = (state = '', action) => {
  switch (action.type) {
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

export const slotsSelector = ({ selectedDate, slotsByDate }) => {
  return slotsByDate[selectedDate]
};

export const createSlotSelector = (id) => ({ slotsById }) => (
  slotsById[id]
);

export const alertsSelector = ({ alerts }) => alerts;

export const createAlertSelector = (id) => ({alertsById}) => alertsById[id];

export const isDateCachedSelector = (
  { slotsByDate, selectedDate }
) => slotsByDate.hasOwnProperty(selectedDate);

export const shouldBlockSelector = (state) => (
  (!isDateCachedSelector(state)) && isLoading
);

export default combineReducers({
  selectedDate,
  slotsByDate,
  slotsById,
  allSlots,
  isLoading,
  bookings,
  alerts,
  alertsById
});
