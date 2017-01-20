import { normalize } from 'normalizr';
import { arrayOfSlots } from '../schema';

export const selectedDate = (state, action) => {
  if (action.response) {
    return action.response.date;
  }
  return state;
};

export const slotsById = (state, action) => {
  if (action.response) {
    return action.response.entities.slots;
  }
  return {};
}
