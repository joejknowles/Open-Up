import { selectedDate } from '../../reducers';

it('selectedDate returns empty string as default', () => {
  const actual = selectedDate(undefined, {});
  expect(actual).toEqual('');
});

it('selectedDate returns date on FETCH_SLOTS_SUCCESS', () => {
  const dateString = '2017-02-02T00:00:00.000Z';
  const action = { type: 'FETCH_SLOTS_SUCCESS', response: { date: dateString } };
  const expectedDate = new Date(2017, 1, 2);
  const actual = selectedDate(undefined, action);
  expect(actual).toEqual(expectedDate);
});

it('selectedDate returns date of next day on NEXT_DAY', () => {
  const firstDate = '2017-02-02T00:00:00.000Z';
  const action = { type: 'NEXT_DAY' };
  const expectedDate = new Date(2017, 1, 3);
  const actual = selectedDate(firstDate, action);
  expect(actual).toEqual(expectedDate);
});
