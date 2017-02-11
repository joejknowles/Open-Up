jest.mock('lodash.uniqueid', () => () => '1');

import {
  bookSlotRequest, bookSlotSuccess, bookSlotFailure
} from '../../actions';

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

it('bookSlotFailure creates action', () => {
  const response = { errors: ['Slot has already been taken'], status: 402, ok: false }
  const notificationId = 2;
  const failureAction = {
    type: 'BOOK_SLOT_FAILURE',
    response: {
      errors: { [notificationId]: {
        id: notificationId, type: 'ERROR',
        message: 'Slot has already been taken'
      } },
      result: [ notificationId ]
    }
  };

  expect(bookSlotFailure(response, notificationId)).toEqual(failureAction)
});
