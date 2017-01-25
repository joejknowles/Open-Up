import { combineReducers } from 'redux'
import isLoading from './isLoading'

export const selectedDate = (state = null, action) => {
  if (action.response) {
    return action.response.date;
  }
  return state;
};

export const slotsById = (state = {}, action) => {
  if (action.response && action.response.entities.slots) {
    return action.response.entities.slots;
  }
  return state;
}

export const allSlots = (state = [], action) => (
  action.response ? action.response.result : state
);

export const isLoadingSelector = ({ isLoading }) => ({
  isLoading
});

export default combineReducers({ selectedDate, slotsById, allSlots, isLoading })
