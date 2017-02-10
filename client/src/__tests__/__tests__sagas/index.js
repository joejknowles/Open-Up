import { put, call } from 'redux-saga/effects';

import { fetchSlots } from '../../sagas';
import * as apiClients from '../../apiClients';

it('fetchSlots saga should dispatch FETCH_SLOTS_REQUEST action', () => {
  const gen = fetchSlots();

  expect(gen.next().value).toEqual(
    put({ type: 'FETCH_SLOTS_REQUEST' })
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
  const gen = fetchSlots(date);
  gen.next();
  gen.next();
  expect(gen.next('response from api call').value).toEqual(
    put({
      type: 'FETCH_SLOTS_SUCCESS',
      response: 'response from api call'
    })
  );
});

it('fetchSlots saga should be done', () => {
  const gen = fetchSlots();
  gen.next();
  gen.next();
  gen.next();
  expect(gen.next()).toEqual(
    { done: true, value: undefined }
  );
});
