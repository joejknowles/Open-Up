import { put, call, takeEvery } from 'redux-saga/effects';
jest.mock('lodash.uniqueid', () => () => 9);

import { bookSlot, watchBookSlotRequests } from '../../sagas';
import * as apiClients from '../../apiClients';
import * as actions from '../../actions';

it('watchBookSlotRequests watches Fetch slots requests', () => (
  expect(
    watchBookSlotRequests().next().value
  ).toEqual(takeEvery('BOOK_SLOT_REQUEST', bookSlot))
));

it('bookSlot calls bookSlot api client', () => {
  const slotId = 1;
  const gen = bookSlot({ slotId });
  expect(gen.next().value).toEqual(
    call(apiClients.bookSlot, slotId)
  );
});

it('bookSlot dispatches success action with ', () => {
  const slotId = 1;
  const notificationId = 9;
  const gen = bookSlot({ slotId });
  const apiResponse = { booking_id: 105, status: 200, ok: true }
  gen.next();
  expect(gen.next(apiResponse).value).toEqual(
    put(actions.bookSlotSuccess(apiResponse, slotId, notificationId))
  );
});

it('bookSlot ends', () => {
  const slotId = 1;
  const gen = bookSlot({ slotId });
  gen.next();
  gen.next();
  expect(gen.next()).toEqual(
    { done: true, value: undefined }
  );
});
