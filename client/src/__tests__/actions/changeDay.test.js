import { nextDay } from '../../actions/changeDay';

it('nextDay is NEXT_DAY action', () => (
  expect(nextDay).toEqual({ type: 'NEXT_DAY'})
));
