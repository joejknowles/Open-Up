import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { removeAlert } from '../../sagas';
import * as actions from '../../actions/alerts';

it('removeAlert calls delay', () => {
  const alertId = 1;
  const gen = removeAlert(alertId);
  expect(gen.next().value).toEqual(
    call(delay, 4000)
  )
});

it('removeAlert dispatches remove alert action', () => {
  const alertId = 1;
  const gen = removeAlert(alertId);
  gen.next();
  expect(gen.next().value).toEqual(
    put(actions.removeAlert(alertId))
  )
});

it('removeAlert should be done', () => {
  const gen = removeAlert();
  gen.next();
  gen.next();
  expect(gen.next()).toEqual(
    { done: true, value: undefined }
  )
});
