import { isLoadingSelector,
  selectedDateSelector,
  createSlotsSelector,
  createSlotSelector,
  isDateCachedSelector,
  dateChangeDirectionSelector } from '../../reducers';

it('isLoadingSelector selects isLoading', () => (
  expect(
    isLoadingSelector({isLoading: 'is loading test'}))
    .toBe('is loading test')
));

it('selectedDateSelector selects selectedDate', () => (
  expect(
    selectedDateSelector({ booking: { selectedDate: 'selectedDate test'} }))
    .toBe('selectedDate test')
));

it('dateChangeDirectionSelector selects dateChangeDirection', () => (
  expect(
    dateChangeDirectionSelector({ booking: { dateChangeDirection: 'next'}}))
    .toBe('next')
));

it('createSlotsSelector selects slot ids for selectedDate', () => {
  const slots = [1, 2, 5];
  const selectedDate = new Date();
  const state = {
    booking: { selectedDate,
    slotsByDate: {
      [selectedDate]: slots
    }}
  };
  expect(createSlotsSelector(selectedDate)(state)).toEqual(slots);
})

it('createSlotSelector selects correct slot', () => {
  const slotsById = {
    1: { id: 1 }, 2: { id: 2 }
  };
  const expected = { id: 1 };
  expect(
    createSlotSelector(1)({ booking: { slotsById }}))
    .toEqual(expected)
});

it('isDateCachedSelector returns true when date is cached', () => {
  const selectedDate = new Date();
  const state =
    { booking: {
    selectedDate,
    slotsByDate: {
      [selectedDate]: []
    }}
  };
  const actual = isDateCachedSelector(state);
  expect(actual).toBe(true);
})

it('isDateCachedSelector returns false when date is not cached', () => {
  const selectedDate = new Date(9999999);
  const otherDate = new Date(5555555);
  const state = { booking: {
    selectedDate,
    slotsByDate: {
      [otherDate]: []
    }
  }};
  const actual = isDateCachedSelector(state);
  expect(actual).toBe(false);
})
