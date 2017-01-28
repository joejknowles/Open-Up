import * as apiClients from '../apiClients';
import { normalize } from 'normalizr';
import { arrayOfSlots } from '../schema'

import { camelizeKeys } from 'humps'

export const fetchSlots = (dispatch) => (date) => () => {
  dispatch({type: 'FETCH_SLOTS_REQUEST'});
  return apiClients.fetchSlots(date).then((response) => {
    response = camelizeKeys(response);
    const normalizedResponse = normalize(response.slots, arrayOfSlots);
    const successAction = {
      type: 'FETCH_SLOTS_SUCCESS',
      response: {
        ...normalizedResponse,
        date: response.date
      }
    };
    dispatch(successAction);
  }, (error) => {
    dispatch({ type: 'FETCH_SLOTS_FAILURE' });
  });
}
