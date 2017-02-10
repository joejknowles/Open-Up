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
  fetchSlotsSuccess } from '../../actions';
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

//// Redux-thunk

it('fetch slots returns a function that calls dispatch with fetch slots request action', () => {
  const spy = sinon.spy();
  const date = 'date';
  const result = fetchSlots(spy)(date)();
  const action = { type: 'FETCH_SLOTS_REQUEST', date }
  expect(spy.getCall(0).args[0]).toEqual(action);
});

it('fetch slots calls dispatch with fetch slots success action with normalized response on success', () => {
  const spy = sinon.spy();
  const successAction = {
    type: 'FETCH_SLOTS_SUCCESS',
    response: { entities: { slots: { 1: { id: 1 }, 2: { id: 2 } } }, result: [1, 2], date: undefined }
  };
  return fetchSlots(spy)()().then((response) => {
    expect(spy.getCall(1).args[0]).toEqual(successAction);
  });
});

it('fetch slots calls dispatch with fetch slots failure action on failure', () => {
  const spy = sinon.spy();
  const failureAction = {
    type: 'FETCH_SLOTS_FAILURE'
  }
  return fetchSlots(spy)('failing date')()
    .then((error) => {
      expect(spy.getCall(1).args[0]).toEqual(failureAction)
  });
});
