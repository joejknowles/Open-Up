import { put, call } from 'redux-saga/effects';

import { fetchSlots } from '../../sagas';
import * as apiClients from '../../apiClients';
import * as actions from '../../actions';

it('fetchSlots saga should dispatch FETCH_SLOTS_REQUEST action', () => {
  const date = new Date();
  const gen = fetchSlots(date);

  expect(gen.next().value).toEqual(
    put(actions.fetchSlotsRequest(date))
  );
});

it('fetchSlots saga should call fetchSlots api', () => {
  const date = new Date();
  const gen = fetchSlots(date);
  gen.next();
  expect(gen.next().value).toEqual(
    call(apiClients.fetchSlots, date)
  );
});

it('fetchSlots saga should dispatch fetch slots success action', () => {
  const date = new Date();
  const mockResponse = { slots: [ {id: 1}, {id: 2} ] };
  const gen = fetchSlots(date);
  gen.next();
  gen.next();
  expect(gen.next(mockResponse).value).toEqual(
    put(actions.fetchSlotsSuccess(mockResponse))
  );
});

it('fetchSlots saga should be done', () => {
  const gen = fetchSlots();
  gen.next();
  gen.next();
  gen.next({ slots: [] });
  expect(gen.next()).toEqual(
    { done: true, value: undefined }
  );
});
