jest.mock('../../apiClients', () => ({
  bookSlot: (slotId) => (
    new Promise((resolve, reject) => (
      slotId === 'bad slot id' ?
        reject({error: 'slot not found'}) :
        resolve({ booking: { id: 1 } })
    ))
  )
}));

import { bookSlot } from '../../actions';
import sinon from 'sinon';

it('book slot returns a function that calls dispatch with book slot request action', () => {
  const spy = sinon.spy();
  const result = bookSlot(1)(spy)();
  const action = { type: 'BOOK_SLOT_REQUEST' }
  expect(spy.calledWith(action)).toBe(true);
});

it('book slot calls dispatch with book slot success action with response on success', () => {
  const spy = sinon.spy();
  const successAction = {
    type: 'BOOK_SLOT_SUCCESS',
    response: { booking: { id: 1 } }
  };
  return bookSlot(1)(spy)().then((response) => {
    expect(spy.calledWith(successAction)).toBe(true);
  });
});

it('book slot calls dispatch with book slot failure action on failure', () => {
  const spy = sinon.spy();
  const failureAction = {
    type: 'BOOK_SLOT_FAILURE'
  }
  return bookSlot('bad slot id')(spy)()
    .catch((error) => (
    expect(spy.calledWith(failureAction)).toBe(true)
  ));
});