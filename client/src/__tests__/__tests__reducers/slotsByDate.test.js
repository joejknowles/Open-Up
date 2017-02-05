import { slotsByDate } from '../../reducers/slots';
import { parseDate } from '../../helpers/dates';

it('slotsByDate returns an object by default', () => (
  expect(slotsByDate(undefined, {})).toEqual({})
));

it('slotsByDate adds slotIds array as value for the date key', () => {
  const date = new Date();
  expect(slotsByDate({}, {
    type: 'FETCH_SLOTS_SUCCESS',
    response: { result: [1, 2, 4], date }
  })).toEqual({ [parseDate(date)]: [1, 2, 4] })
});

it('slotsByDate keeps previous slots', () => {
  const date = new Date(1990,1,1);
  const existingDate = new Date();
  expect(slotsByDate({ [parseDate(date)]: [1, 2, 4] }, {
    type: 'FETCH_SLOTS_SUCCESS',
    response: { result: [], date: existingDate }
  })).toEqual({
    [parseDate(date)]: [1, 2, 4] ,
    [parseDate(existingDate)]: []
  })
});
