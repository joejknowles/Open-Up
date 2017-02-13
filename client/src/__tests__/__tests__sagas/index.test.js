import { put, call, takeEvery } from 'redux-saga/effects';

import { fetchSlots, watchFetchSlotsRequests, watchBookSlotRequests } from '../../sagas';
import { bookSlot } from '../../sagas/bookSlot';
import * as apiClients from '../../apiClients';
import * as actions from '../../actions';

it('watchBookSlotRequests watches book slot requests', () => (
  expect(
    watchBookSlotRequests().next().value
  ).toEqual(takeEvery('BOOK_SLOT_REQUEST', bookSlot))
));

it('watchFetchSlotsRequest watches Fetch slots requests', () => (
  expect(
    watchFetchSlotsRequests().next().value
  ).toEqual(takeEvery('FETCH_SLOTS_REQUEST', fetchSlots))
));

it('fetchSlots saga should call fetchSlots api', () => {
  const date = new Date();
  const gen = fetchSlots({ date });
  expect(gen.next().value).toEqual(
    call(apiClients.fetchSlots, date)
  );
});

it('fetchSlots saga should dispatch fetch slots success action', () => {
  const date = new Date();
  const mockResponse = { slots: [ {id: 1}, {id: 2} ] };
  const gen = fetchSlots({ date });
  gen.next();
  expect(gen.next(mockResponse).value).toEqual(
    put(actions.fetchSlotsSuccess(mockResponse))
  );
});

it('fetchSlots saga should be done', () => {
  const date = new Date();
  const gen = fetchSlots({ date });
  gen.next();
  gen.next({ slots: [] });
  expect(gen.next()).toEqual(
    { done: true, value: undefined }
  );
});

it('fetchSlotsFailure saga should dispatch failure action on error', () => {
  const date = new Date();
  const gen = fetchSlots({ date });
  gen.next();
  expect(gen.throw('error').value).toEqual(
    put(actions.fetchSlotsFailure(date, 'error'))
  );
});
