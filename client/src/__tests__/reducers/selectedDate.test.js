import { selectedDate } from '../../reducers';

it('selectedDate returns date', () => {
  const dateString = '2017-01-26';
  const action = { response: { date: dateString } };
  const expectedDate = new Date(2017, 0, 26)
  const actual = selectedDate(undefined, action);
  expect(actual).toEqual(expectedDate);
});
