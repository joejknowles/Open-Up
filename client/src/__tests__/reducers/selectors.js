import { isLoadingSelector, selectedDateSelector } from '../../reducers';

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
