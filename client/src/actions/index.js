import { normalize } from 'normalizr';
import { arrayOfSlots } from '../schema'

import { camelizeKeys } from 'humps';

export const fetchSlotsRequest = (date) => ({
  type: 'FETCH_SLOTS_REQUEST', date
});

export const fetchSlotsSuccess = (response) => {
  response = camelizeKeys(response);
  const normalizedSlots = normalize(response.slots, arrayOfSlots);
  return {
    type: 'FETCH_SLOTS_SUCCESS',
    response: {
      ...normalizedSlots,
      date: response.date
    }
  };
};

export const fetchSlotsFailure = (date, errors) => ({
  type: 'FETCH_SLOTS_FAILURE', date, errors
});

export const bookSlotRequest = (slotId) => ({
  type: 'BOOK_SLOT_REQUEST', slotId
});

export const bookSlotSuccess = (response, slotId, alertId) => {
  response = camelizeKeys(response);
  return {
    type: 'BOOK_SLOT_SUCCESS',
    slotId, alertId,
    response
  };
};

export const bookSlotFailure = (response, alertId) => {
  const camelizedResponse = camelizeKeys(response);
  const errors = {};
  const result = [];
  camelizedResponse.errors.forEach((message) => {
    errors[alertId] = { id: alertId, message, type: "ERROR" };
    result.push(alertId);
  });
  return {
    type: 'BOOK_SLOT_FAILURE',
    response: {
      errors, result
    }
  };
};
