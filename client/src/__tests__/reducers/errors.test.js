import errors, { errorsById } from '../../reducers/errors';
import { errorsSelector, createErrorSelector } from '../../reducers';

it('errors defaults to empty array', () => expect(errors(undefined, {})).toEqual([]));

it('adds error when BOOK_SLOT_FAILURE action called', () => (
  expect(errors([], { type: 'BOOK_SLOT_FAILURE', response: { result: ['1'] } })).toEqual(['1'])
));

it('adds error when FETCH_SLOTS_FAILURE action called', () => (
  expect(errors(['2'], { type: 'FETCH_SLOTS_FAILURE', response: { result: ['1'] } })).toEqual(['2', '1'])
));

it('removes error when removeAlert error is dispatched', () => (
  expect(errors(['1', '3', '9'], { type: 'REMOVE_ALERT', id: '3' })).toEqual(['1', '9'])
));

it('errorsSelector selector returns errors', () => (
  expect(errorsSelector({errors: ['1']})).toEqual(['1'])
));

it('errorsById defaults to empty object', () => expect(errorsById(undefined, {})).toEqual({}));

it('errorsById adds error message when BOOK_SLOT_FAILURE action called', () => (
  expect(errorsById({}, { type: 'BOOK_SLOT_FAILURE', response: { errors: { '1': { id: '1', message: 'error message'} } } })).toEqual({ '1': { id: '1', message: 'error message'} })
));

it('errorsById adds error message when FETCH_SLOTS_FAILURE action called', () => (
  expect(errorsById({}, { type: 'FETCH_SLOTS_FAILURE', response: { errors: { '1': { id: '1', message: 'error message'} } } })).toEqual({ '1': { id: '1', message: 'error message'} })
));

it('errorSelector selector returns errors', () => (
  expect(createErrorSelector('1')({ errorsById: { '1': { id: '1', message: 'error message' } } })).toEqual({ id: '1', message: 'error message' })
));
