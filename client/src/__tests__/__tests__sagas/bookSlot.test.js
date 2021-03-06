import { put, call, takeEvery, select } from 'redux-saga/effects';
jest.mock('lodash.uniqueid', () => () => 9);

import { bookSlot, removeAlert, exitBooking } from '../../sagas/bookSlot';
import * as apiClients from '../../apiClients';
import * as actions from '../../actions';
import { selectedDateSelector } from '../../reducers'
import { returnToVenue } from '../../helpers/routing';

it('bookSlot calls bookSlot api client', () => {
  const slotId = 1;
  const gen = bookSlot({ slotId });
  expect(gen.next().value).toEqual(
    call(apiClients.bookSlot, slotId)
  );
});

it('bookSlot dispatches success action', () => {
  const slotId = 1;
  const alertId = 9;
  const gen = bookSlot({ slotId });
  const apiResponse = { booking_id: 105, status: 200, ok: true }
  gen.next();
  expect(gen.next(apiResponse).value).toEqual(
    put(actions.bookSlotSuccess(apiResponse, slotId, alertId))
  );
});

it('bookSlot returns to venue after booking', () => {
  const slotId = 1;
  const alertId = 9;
  const gen = bookSlot({ slotId });
  gen.next();
  gen.next()
  expect(gen.next().value).toEqual(
    call(exitBooking)
  );
});

it('bookSlot calls removeAlert saga', () => {
  const slotId = 1;
  const gen = bookSlot({ slotId });
  gen.next();
  gen.next();
  gen.next();
  expect(gen.next().value).toEqual(
    call(removeAlert, 9)
  );
});

it('bookSlot ends without failure', () => {
  const slotId = 1;
  const gen = bookSlot({ slotId });
  gen.next();
  gen.next();
  gen.next();
  gen.next();
  expect(gen.next()).toEqual(
    { done: true, value: undefined }
  );
});

it('bookSlot dispatches failure action', () => {
  const slotId = 1;
  const alertId = 9;
  const gen = bookSlot({ slotId });
  const apiResponse = { errors: ['Slot has already been taken'], status: 402, ok: false }
  gen.next();
  expect(gen.throw(apiResponse).value).toEqual(
    put(actions.bookSlotFailure(apiResponse, alertId))
  );
});

it('bookSlot selects the selectedDate from the store', () => {
  const slotId = 1;
  const gen = bookSlot({ slotId });
  const apiResponse = { errors: ['Slot has already been taken'], status: 402, ok: false }
  gen.next();
  gen.throw({errors: []});
  const selectedDate = 'date';
  expect(gen.next().value).toEqual(
    select(selectedDateSelector)
  );
});

it('bookSlot dispatches fetchSlotsRequest action with the selected date', () => {
  const slotId = 1;
  const gen = bookSlot({ slotId });
  const apiResponse = { errors: ['Slot has already been taken'], status: 402, ok: false }
  gen.next();
  gen.throw({errors: []});
  gen.next();
  const selectedDate = 'date';
  expect(gen.next(selectedDate).value).toEqual(
    put(actions.fetchSlotsRequest(selectedDate))
  );
});

it('bookSlot calls removeAlert saga after failure', () => {
  const slotId = 1;
  const gen = bookSlot({ slotId });
  gen.next();
  gen.throw({errors: []});
  gen.next();
  gen.next();
  expect(gen.next().value).toEqual(
    call(removeAlert, 9)
  );
});

it('bookSlot ends after failure', () => {
  const slotId = 1;
  const gen = bookSlot({ slotId });
  gen.next();
  gen.throw({errors: []});
  gen.next();
  gen.next();
  gen.next();
  expect(gen.next()).toEqual(
    { done: true, value: undefined }
  );
});


it('exit booking returns to venue', () => (
  expect(exitBooking().next().value).toEqual(
    call(returnToVenue)
  )
));

it('exit booking resets date', () => {
  const today = new Date();
  const gen = exitBooking();
  gen.next();
  gen.next();
  expect(gen.next(today).value).toEqual(
    put({type: 'SET_DATE', date: today})
  );
});
