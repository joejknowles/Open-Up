import { selectedDate } from '../../reducers';

it('selectedDate returns empty string as default', () => {
  const actual = selectedDate(undefined, {});
  expect(actual).toEqual('');
});

it('selectedDate returns date of next day on NEXT_DAY', () => {
  const startingDate = '2017-02-02';
  const action = { type: 'NEXT_DAY' };
  const expectedDate = '2017-02-03';
  const actual = selectedDate(startingDate, action);
  expect(actual).toEqual(expectedDate);
});

it('selectedDate returns date of previous day on PREV_DAY', () => {
  const startingDate = '2017-02-02';
  const action = { type: 'PREV_DAY' };
  const expectedDate = '2017-02-01';
  const actual = selectedDate(startingDate, action);
  expect(actual).toEqual(expectedDate);
});

it('selectedDate returns date on SET_DATE', () => {
  const startingDate = '2017-02-02';
  const action = { type: 'SET_DATE', date: new Date(2017, 1, 19) };
  const expectedDate = '2017-02-19';
  const actual = selectedDate(startingDate, action);
  expect(actual).toEqual(expectedDate);
});
