import { combineReducers } from 'redux'

export const selectedDate = (state = {}, action) => {
  if (action.response) {
    return action.response.date;
  }
  return state;
};

export const slotsById = (state = {}, action) => {
  if (action.response) {
    return action.response.entities.slots;
  }
  return state;
}

export default combineReducers({ selectedDate, slotsById })
