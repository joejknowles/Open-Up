import * as apiClients from '../apiClients';
import { normalize } from 'normalizr';
import { arrayOfSlots } from '../schema'

export const fetchSlots = (date) => (dispatch) => {
  dispatch({type: 'FETCH_SLOTS_REQUEST'});
  return apiClients.fetchSlots().then((response) => {
    const normalizedResponse = normalize(response, arrayOfSlots);
    dispatch({
      type: 'FETCH_SLOTS_SUCCESS',
      response: normalizedResponse.entities.slots
    });
  });
}
