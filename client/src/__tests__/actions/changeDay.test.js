import { nextDay, prevDay } from '../../actions/changeDay';

it('nextDay is NEXT_DAY action', () => (
  expect(nextDay).toEqual({ type: 'NEXT_DAY'})
));

it('prevDay is PREV_DAY action', () => (
  expect(prevDay).toEqual({ type: 'PREV_DAY'})
));
