import alerts from '../../../reducers/alerts';
import { alertsSelector} from '../../../reducers';

it('alerts defaults to empty array', () => expect(alerts(undefined, {})).toEqual([]));

it('adds error to alerts when BOOK_SLOT_FAILURE action called', () => (
  expect(alerts([], { type: 'BOOK_SLOT_FAILURE', response: { result: ['1'] } })).toEqual(['1'])
));

it('adds error to alerts when FETCH_SLOTS_FAILURE action called', () => (
  expect(alerts(['2'], { type: 'FETCH_SLOTS_FAILURE', response: { result: ['1'] } })).toEqual(['2', '1'])
));

it('removes alert when removeAlert error is dispatched', () => (
  expect(alerts(['1', '3', '9'], { type: 'REMOVE_ALERT', id: '3' })).toEqual(['1', '9'])
));

it('alerts adds alert when BOOK_SLOT_SUCCESS action called', () => (
  expect(alertsById([],
    { type: 'BOOK_SLOT_SUCCESS' }
  )).toEqual(['1'])
));

it('alertsSelector selector returns errors', () => (
  expect(alertsSelector({alerts: ['1']})).toEqual(['1'])
));
