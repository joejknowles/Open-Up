import dateChangeDirection from '../../reducers/dateChangeDirection';

it('dateChangeDirection defaults to next', () =>
  expect(dateChangeDirection(undefined, {})).toBe('next'));

it('dateChangeDirection is next after next-day action', () =>
  expect(dateChangeDirection('prev',
    { type: 'NEXT_DAY' }
  )).toBe('next'));

it('dateChangeDirection is prev after prev-day action', () =>
  expect(dateChangeDirection('next',
    { type: 'PREV_DAY' }
  )).toBe('prev'));
