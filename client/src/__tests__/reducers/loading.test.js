import isLoading from '../../reducers/isLoading';

it('isLoading defaults to true', () => expect(isLoading(undefined, {})).toBe(true));

it('isLoading becomes false when FETCH_**_SUCCESS action called', () => (
  expect(isLoading(true, { type: 'FETCH_SLOTS_SUCCESS' })).toBe(false)
));

it('isLoading becomes false when FETCH_**_FAILURE action called', () => (
  expect(isLoading(true, { type: 'FETCH_SLOTS_FAILURE' })).toBe(false)
));
