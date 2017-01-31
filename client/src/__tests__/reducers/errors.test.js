import errors from '../../reducers/errors';
import { errorsSelector } from '../../reducers';

it('errors defaults to empty array', () => expect(errors(undefined, {})).toEqual([]));

it('adds error message when BOOK_SLOT_FAILURE action called', () => (
  expect(errors([], { type: 'BOOK_SLOT_FAILURE', response: { errors: ['booking failure'] } })).toEqual(['booking failure'])
));

it('adds error message when FETCH_SLOTS_FAILURE action called', () => (
  expect(errors(['other error message'], { type: 'FETCH_SLOTS_FAILURE', response: { errors: ['slot failure'] } })).toEqual(['other error message', 'slot failure'])
));

it('errorsSelector selector returns errors', () =>(
  expect(errorsSelector({errors: ['an error']})).toEqual(['an error'])
));
