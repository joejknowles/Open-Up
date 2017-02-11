import { put, call, takeEvery } from 'redux-saga/effects';

import { bookSlot, watchBookSlotRequests } from '../../sagas';
import * as apiClients from '../../apiClients';
import * as actions from '../../actions';

it('watchBookSlotRequests watches Fetch slots requests', () => (
  expect(
    watchBookSlotRequests().next().value
  ).toEqual(takeEvery('BOOK_SLOT_REQUEST', bookSlot))
));
