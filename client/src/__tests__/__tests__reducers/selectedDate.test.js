import { selectedDate } from '../../reducers';

it('selectedDate returns empty string as default', () => {
  const actual = selectedDate(undefined, {});
  expect(actual).toEqual('');
});

it('selectedDate returns date of next day on NEXT_DAY', () => {
  const startingDate = '2017-02-02T00:00:00.000Z';
  const action = { type: 'NEXT_DAY' };
  const expectedDate = '2017-02-03T00:00:00.000+00:00';
  const actual = selectedDate(startingDate, action);
  expect(actual).toEqual(expectedDate);
});

it('selectedDate returns date of next day on NEXT_DAY', () => {
  const startingDate = '2017-02-02T00:00:00.000Z';
  const action = { type: 'PREV_DAY' };
  const expectedDate = '2017-02-01T00:00:00.000+00:00';
  const actual = selectedDate(startingDate, action);
  expect(actual).toEqual(expectedDate);
});
