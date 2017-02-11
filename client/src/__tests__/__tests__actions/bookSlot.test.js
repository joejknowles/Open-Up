jest.mock('../../apiClients', () => ({
  bookSlot: (slotId) => (
    new Promise((resolve, reject) => (
      slotId === 'bad slot id' ?
        reject({ errors: ['Slot has already been taken'], status: 402, ok: false }) :
        resolve({ booking_id: 105, status: 200, ok: true })
    ))
  ),
  fetchSlots: () => new Promise(() => {})
}));
jest.mock('lodash.uniqueid', () => () => '1');

import {
  bookSlot,
  bookSlotRequest,
  bookSlotSuccess
} from '../../actions';
import { parseDate } from '../../helpers/dates';
import sinon from 'sinon';

////// sagas

it('bookSlotRequest creates action with slotId', () => (
  expect(
    bookSlotRequest(99)
  ).toEqual({ type: 'BOOK_SLOT_REQUEST', slotId: 99 })
));

it('bookSlotSuccess creates action with response', () => {
  const response = { booking_id: 105, status: 200, ok: true };
  const slotId = 1;
  const notificationId = 2;
  const successAction = {
    type: 'BOOK_SLOT_SUCCESS',
    slotId,
    response: {
      bookingId: 105, status: 200, ok: true
    }, notificationId: notificationId
  };

  expect(bookSlotSuccess(response, slotId, notificationId)).toEqual(successAction)
});

////redux-thunk

it('book slot calls dispatch with book slot failure action on failure', () => {
  const mockedId = '1';
  jest.mock('lodash.uniqueid', () => mockedId);
  const spy = sinon.spy();
  const failureAction = {
    type: 'BOOK_SLOT_FAILURE',
    response: {
      errors: { [mockedId]: {
        id: mockedId, type: 'ERROR',
        message: 'Slot has already been taken'
      } },
      result: [ mockedId ]
    }
  };
  return bookSlot('bad slot id')(spy)()
    .then((error) => {
      expect(spy.getCall(2).args[0]).toEqual(failureAction)
    });
});

it('book slot calls dispatch with fetch slots request action on failure', () => {
  const spy = sinon.spy();
  const date = new Date();
  const action = { type: 'FETCH_SLOTS_REQUEST',
  date: parseDate(date) };
  return bookSlot('bad slot id')(spy)()
    .then((error) => {
      expect(spy.getCall(1).args[0]).toEqual(action)
    });
});
