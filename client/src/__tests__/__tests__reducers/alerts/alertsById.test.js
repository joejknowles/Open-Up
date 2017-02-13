import { alertsById } from '../../../reducers/alerts';
import { createAlertSelector } from '../../../reducers';

it('alertsById defaults to empty object', () => expect(alertsById(undefined, {})).toEqual({}));

it('alertsById adds errors when BOOK_SLOT_FAILURE action called', () => (
  expect(alertsById({}, {
    type: 'BOOK_SLOT_FAILURE',
    response: {
      errors: {
        '1': { id: '1', message: 'error message', type: 'ERROR' }
      }
    }
  })).toEqual({ '1':
    { id: '1', message: 'error message', type: 'ERROR' }
  })
));

it('alertsById adds errors when FETCH_SLOTS_FAILURE action called', () => (
  expect(alertsById({}, {
    type: 'FETCH_SLOTS_FAILURE',
    response: {
      errors: {
        '1': { id: '1', message: 'error message', type: 'ERROR' }
      }
    }
  })).toEqual({ '1':
    { id: '1', message: 'error message', type: 'ERROR' }
  })
));

it('alertsById adds notification when BOOK_SLOT_SUCCESS action called', () => (
  expect(alertsById({},
    { type: 'BOOK_SLOT_SUCCESS', alertId: '1' }
  )).toEqual({ '1':
    { id: '1', message: 'booked!', type: 'SUCCESS' }
  })
));

it('createAlertSelector selector returns errors', () => (
  expect(createAlertSelector('1')({ alerts: { alertsById: { '1': { id: '1', message: 'error message' } } } })).toEqual({ id: '1', message: 'error message' })
));
