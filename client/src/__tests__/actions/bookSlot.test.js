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

import { bookSlot } from '../../actions';
import sinon from 'sinon';

it('book slot returns a function that calls dispatch with book slot request action', () => {
  const spy = sinon.spy();
  const result = bookSlot(1)(spy)();
  const action = { type: 'BOOK_SLOT_REQUEST' }
  expect(spy.getCall(0).args[0]).toEqual(action);
});

it('book slot calls dispatch with book slot success action with response on success', () => {
  const slotId= 1;
  const spy = sinon.spy();
  const normalizedBookings = { 1: { id: 1 }, 2: { id: 2 } };
  const successAction = {
    type: 'BOOK_SLOT_SUCCESS',
    slotId,
    response: {
      bookingId: 105, status: 200, ok: true
    }, notificationId: '1'
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
      errors: { [mockedId]: { id: mockedId, message: 'Slot has already been taken' } },
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
  const action = { type: 'FETCH_SLOTS_REQUEST'};
  return bookSlot('bad slot id')(spy)()
    .then((error) => {
      expect(spy.getCall(1).args[0]).toEqual(action)
    });
});
