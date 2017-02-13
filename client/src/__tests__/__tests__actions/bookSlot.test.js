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
  const alertId = 2;
  const successAction = {
    type: 'BOOK_SLOT_SUCCESS',
    slotId,
    response: {
      bookingId: 105, status: 200, ok: true
    }, alertId: alertId
  };

  expect(bookSlotSuccess(response, slotId, alertId)).toEqual(successAction)
});

it('bookSlotFailure creates action', () => {
  const response = { errors: ['Slot has already been taken'], status: 402, ok: false }
  const alertId = 2;
  const failureAction = {
    type: 'BOOK_SLOT_FAILURE',
    response: {
      errors: { [alertId]: {
        id: alertId, type: 'ERROR',
        message: 'Slot has already been taken'
      } },
      result: [ alertId ]
    }
  };

  expect(bookSlotFailure(response, alertId)).toEqual(failureAction)
});
