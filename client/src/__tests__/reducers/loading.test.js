import isLoading from '../../reducers/isLoading';
import { isLoadingSelector } from '../../reducers';

it('isLoading defaults to true', () => expect(isLoading(undefined, {})).toBe(true));

it('isLoading becomes false when FETCH_**_SUCCESS action called', () => (
  expect(isLoading(true, { type: 'FETCH_SLOTS_SUCCESS' })).toBe(false)
));

it('isLoading becomes false when FETCH_**_FAILURE action called', () => (
  expect(isLoading(true, { type: 'FETCH_SLOTS_FAILURE' })).toBe(false)
));

it('isLoadingSelector selects isLoading', () => (
  expect(
    isLoadingSelector({isLoading: 'is loading test'}))
    .toBe('is loading test')
));
