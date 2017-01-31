import { removeAlert } from '../../actions/alerts';

it('creates remove alert action', () => (
  expect(removeAlert('3')).toEqual(
    {
      type: 'REMOVE_ALERT',
      id: '3'
    }
  )
));
