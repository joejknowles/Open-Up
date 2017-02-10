jest.mock('../../apiClients', () => ({
  fetchSlots: (date) => (
    new Promise((resolve, reject) => (
      date === 'failing date' ?
        reject({ response: { error: 'fails'}, status: 402, ok: false}) :
        resolve({ slots: [{ id: 1 }, { id: 2 }], status: 200, ok: true } )
    ))
  )
}));

import {
  fetchSlots,
  fetchSlotsRequest,
  fetchSlotsSuccess,
  fetchSlotsFailure } from '../../actions';
import sinon from 'sinon';

// Redux-saga

it('fetchSlotsRequest creates action with date', () => (
  expect(fetchSlotsRequest('date')).toEqual({
    type: "FETCH_SLOTS_REQUEST",
    date: 'date'
  })
));

it('fetchSlotsSuccess creates action with date', () => {
  const response = {
    slots: [{ id: 1 }, { id: 2 }],
    status: 200, ok: true,
    date: 'date'
  };

  expect(fetchSlotsSuccess(response)).toEqual({
    type: "FETCH_SLOTS_SUCCESS",
    response: {
      entities: {
        slots: { 1: { id: 1 }, 2: { id: 2 } }
      },
      result: [1, 2],
      date: 'date'
    }
  })
});

it('fetchSlotsRequest creates action with date', () => (
  expect(fetchSlotsFailure('date', 'errors')).toEqual({
    type: "FETCH_SLOTS_FAILURE",
    date: 'date', errors: 'errors'
  })
));

//// Redux-thunk
