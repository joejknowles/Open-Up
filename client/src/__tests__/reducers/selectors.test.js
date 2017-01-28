import { isLoadingSelector,
  selectedDateSelector,
  slotsSelector,
  createSlotSelector } from '../../reducers';

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

it('slotsSelector selects slot ids', () => {
  const allSlots = [1, 2, 5];
  expect(slotsSelector({ allSlots })).toEqual(allSlots);
})

it('slotSelector selects correct slot', () => {
  const slotsById = {
    1: { id: 1 }, 2: { id: 2 }
  };
  const expected = { id: 1 };
  expect(
    createSlotSelector(1)({ slotsById }))
    .toEqual(expected)
});
