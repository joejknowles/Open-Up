import * as apiClients from '../apiClients';
import { normalize } from 'normalizr';
import { arrayOfSlots } from '../schema'

export const fetchSlots = (date) => (dispatch) => {
  dispatch({type: 'FETCH_SLOTS_REQUEST'});
  return apiClients.fetchSlots(date).then((response) => {
    const normalizedResponse = normalize(response.slots, arrayOfSlots);
    dispatch({
      type: 'FETCH_SLOTS_SUCCESS',
      response: {
        ...normalizedResponse,
        date: response.date
      }
    });
  }, (error) => {
    dispatch({ type: 'FETCH_SLOTS_FAILURE' });
  });
}
