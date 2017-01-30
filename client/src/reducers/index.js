import { combineReducers } from 'redux'
import isLoading from './isLoading'
import bookings from './bookings'
import parse from 'date-fns/parse'

export const selectedDate = (state = null, action) => {
  if (action.response) {
    return parse(action.response.date);
  }
  return state;
};

export const slotsById = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SLOTS_SUCCESS':
      return {
        ...state,
        ...action.response.entities.slots
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

export default combineReducers({ selectedDate, slotsById, allSlots, isLoading, bookings })
