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

import { bookSlot, bookSlotRequest } from '../../actions';
import { parseDate } from '../../helpers/dates';
import sinon from 'sinon';

////// sagas

it('bookSlotRequest creates action with slotId', () => (
  expect(
    bookSlotRequest(99)
  ).toEqual({ type: 'BOOK_SLOT_REQUEST', slotId: 99 })
));



////redux-thunk

it('book slot returns a function that calls dispatch with book slot request action', () => {
  const spy = sinon.spy();
  const slotId = 1;
  const result = bookSlot(slotId)(spy)();
  const action = { type: 'BOOK_SLOT_REQUEST', slotId }
  expect(spy.getCall(0).args[0]).toEqual(action);
});

it('book slot calls dispatch with book slot success action with response on success', () => {
  const slotId= 1;
  const spy = sinon.spy();
  const normalizedBookings = { 1: { id: 1 }, 2: { id: 2 } };
  const mockedId = '1';
  const successAction = {
    type: 'BOOK_SLOT_SUCCESS',
    slotId,
    response: {
      bookingId: 105, status: 200, ok: true
    }, notificationId: mockedId
   }
  return bookSlot(slotId)(spy)().then((response) => {
    expect(spy.getCall(1).args[0]).toEqual(successAction);
  });
});


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
