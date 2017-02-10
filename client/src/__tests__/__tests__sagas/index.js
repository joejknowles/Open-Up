import { put } from 'redux-saga/effects';

import { fetchSlots } from '../../sagas';

it('fetchSlots saga should dispatch FETCH_SLOTS_REQUEST action', () => {
  const gen = fetchSlots();

  expect(gen.next().value).toEqual(
    put({ type: 'FETCH_SLOTS_REQUEST' })
  );
});

it('fetchSlots saga should be done', () => {
  const gen = fetchSlots();
  gen.next();
  expect(gen.next()).toEqual(
    { done: true, value: undefined }
  );
});
