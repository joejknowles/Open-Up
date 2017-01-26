import { isLoadingSelector, selectedDateSelector, slotsSelector } from '../../reducers';

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

it('slotsSelector selects selectedDate', () => {
  const slotsById = {
    1: { id: 1 }, 2: { id: 2 }
  };
  const allSlots =[ 1, 2 ];
  const expected = [
    { id: 1 }, { id: 2 }
  ];
  expect(
    slotsSelector({ slotsById, allSlots }))
    .toEqual(expected)
});
