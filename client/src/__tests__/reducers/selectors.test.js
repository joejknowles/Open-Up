import { isLoadingSelector,
  selectedDateSelector,
  slotsSelector,
  createSlotSelector,
  isDateCachedSelector } from '../../reducers';

it('isLoadingSelector selects isLoading', () => (
  expect(
    isLoadingSelector({isLoading: 'is loading test'}))
    .toBe('is loading test')
));

it('selectedDateSelector selects selectedDate', () => (
  expect(
    selectedDateSelector({selectedDate: 'selectedDate test'}))
    .toBe('selectedDate test')
));

it('slotsSelector selects slot ids for selectedDate', () => {
  const slots = [1, 2, 5];
  const selectedDate = new Date();
  const state = {
    selectedDate,
    slotsByDate: {
      [selectedDate]: slots
    }
  };
  expect(slotsSelector(state)).toEqual(slots);
})

it('createSlotSelector selects correct slot', () => {
  const slotsById = {
    1: { id: 1 }, 2: { id: 2 }
  };
  const expected = { id: 1 };
  expect(
    createSlotSelector(1)({ slotsById }))
    .toEqual(expected)
});

it('isDateCachedSelector returns true when date is cached', () => {
  const selectedDate = new Date();
  const state = {
    selectedDate,
    slotsByDate: {
      [selectedDate]: []
    }
  };
  const actual = isDateCachedSelector(state);
  expect(actual).toBe(true);
})

it('isDateCachedSelector returns false when date is not cached', () => {
  const selectedDate = new Date(9999999);
  const otherDate = new Date(5555555);
  const state = {
    selectedDate,
    slotsByDate: {
      [otherDate]: []
    }
  };
  const actual = isDateCachedSelector(state);
  expect(actual).toBe(false);
})
