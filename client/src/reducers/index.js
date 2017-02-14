import { combineReducers } from 'redux';
import isLoading from './isLoading';
import bookings from './bookings';
import dateChangeDirection from './dateChangeDirection';
import alerts, { alertsById } from './alerts';
import { getNextDay, getPrevDay, dateString } from '../helpers/dates';
import { slotsById, slotsByDate } from './slots';

export const selectedDate = (state = '', action) => {
  switch (action.type) {
    case 'NEXT_DAY':
      return getNextDay(state);
    case 'PREV_DAY':
      return getPrevDay(state);
    case 'SET_DATE':
      return dateString(action.date);
    default:
      return state;
  }
};

export const isLoadingSelector = ({ isLoading }) => (
  isLoading
);

export const selectedDateSelector = (state) => (
  state.booking.selectedDate
);

const slotsByDateSelector = (state) => state.booking.slotsByDate;

export const createSlotsSelector = (date) => (state) => (
  slotsByDateSelector(state)[date]
);

export const createSlotSelector = (id) => ({ booking: { slotsById } }) => (
  slotsById[id]
);

export const alertsSelector = (state) => state.alerts.alerts;

export const createAlertSelector = (id) => (state) => state.alerts.alertsById[id];

export const isDateCachedSelector = (state) =>
slotsByDateSelector(state).hasOwnProperty(selectedDateSelector(state));

export const shouldBlockSelector = (state) => (
  (!isDateCachedSelector(state)) && isLoadingSelector(state)
);

export const dateChangeDirectionSelector = ({ booking: { dateChangeDirection } }) =>
  dateChangeDirection;

const booking = combineReducers({
  selectedDate,
  slotsByDate,
  slotsById,
  dateChangeDirection,
  bookings
});

const combinedAlerts = combineReducers({
  alerts,
  alertsById
});

export default combineReducers({
  booking,
  alerts: combinedAlerts,
  isLoading
});
