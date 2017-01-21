jest.mock('../../apiClients', () => ({
  fetchSlots: () => (
  new Promise((resolve, reject) => (
    resolve({ slots: [{ id: 1 }, { id: 2 }] } ) )
  ))
}));
import { fetchSlots } from '../../actions';
import sinon from 'sinon';

it('fetch slots returns a function that returns a promise', () => {
  const spy = sinon.spy();
  const result = fetchSlots()(spy);
  expect(result).toEqual(jasmine.any(Promise));
});

it('fetch slots returns a function that calls dispatch with fetch slots request action', () => {
  const spy = sinon.spy();
  const result = fetchSlots()(spy);
  const action = { type: 'FETCH_SLOTS_REQUEST' }
  expect(spy.calledWith(action)).toBe(true);
});

it('fetch slots calls dispatch with fetch slots success action with normalized response on success', () => {
  const spy = sinon.spy();
  const action = {
    type: 'FETCH_SLOTS_SUCCESS',
    response: { entities: { slots: { 1: { id: 1 }, 2: { id: 2 } } }, result: [1, 2], date: undefined }
  }
  return fetchSlots()(spy).then((response) => {
    expect(spy.calledWith(action)).toBe(true);
  });
});

it('fetch slots calls dispatch with fetch slots failure action on failure')
