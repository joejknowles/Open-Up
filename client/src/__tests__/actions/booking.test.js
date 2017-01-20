import { fetchSlots } from '../../actions';

it('fetch slots returns a function that returns a promise', () => {
  const result = fetchSlots()();
  expect(result).toEqual(jasmine.any(Promise));
});
