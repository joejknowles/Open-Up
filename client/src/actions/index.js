import * as apiClients from '../apiClients';
import { normalize } from 'normalizr';
import { arrayOfSlots } from '../schema'
import { parseDate } from '../helpers/dates';

import { camelizeKeys } from 'humps';
import uniqueId from 'lodash.uniqueid';

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

export const bookSlotSuccess = () => {
  
};

export const bookSlot = (slotId) => (dispatch) => () => {
  dispatch({type: 'BOOK_SLOT_REQUEST', slotId});
  return apiClients.bookSlot(slotId).then((response) => {
    response = camelizeKeys(response);
    const notificationId = uniqueId();
    const successAction = {
      type: 'BOOK_SLOT_SUCCESS',
      slotId, notificationId,
      response
    };
    dispatch(successAction);
  }).catch((response) => {
    dispatch(fetchSlotsRequest(parseDate(new Date())));
    const errors = {};
    const result = [];
    response.errors.forEach((message) => {
      const id = uniqueId();
      errors[id] = { id, message, type: "ERROR" };
      result.push(id);
    });
    dispatch({
      type: 'BOOK_SLOT_FAILURE',
      response: {
        errors, result
      }
    });
  });
}
