import { slotsByDate } from '../../reducers/slots';

it('slotsByDate returns an object by default', () => (
  expect(slotsByDate(undefined, {})).toEqual({})
));

it('slotsByDate adds slotIds array as value for the date key', () => {
  const date = new Date();
  expect(slotsByDate({}, {
    type: 'FETCH_SLOTS_SUCCESS',
    response: { result: [1, 2, 4], date }
  })).toEqual({ [date]: [1, 2, 4] })
});

it('slotsByDate keeps previous slots', () => {
  const date = new Date(1990,1,1);
  const existingDate = new Date();
  expect(slotsByDate({ [date]: [1, 2, 4] }, {
    type: 'FETCH_SLOTS_SUCCESS',
    response: { result: [], date: existingDate }
  })).toEqual({
    [date]: [1, 2, 4] ,
    [existingDate]: []
  })
});
