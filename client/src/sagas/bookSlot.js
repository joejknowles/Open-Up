import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { selectedDateSelector } from '../reducers';
import uniqueId from 'lodash.uniqueid';
import { exitBooking } from '../helpers/routing';

import * as apiClients from '../apiClients';
import * as actions from '../actions';
import * as alertActions from '../actions/alerts';

export function* bookSlot({ slotId }) {
  const alertId = uniqueId();
  try {
    const response = yield call(apiClients.bookSlot, slotId);
    yield put(actions.bookSlotSuccess(response, slotId, alertId));
    yield call(exitBooking);
  } catch(e) {
    yield put(actions.bookSlotFailure(e, alertId));
    const selectedDate = yield select(selectedDateSelector);
    yield put(actions.fetchSlotsRequest(selectedDate));
  }
  yield call(removeAlert, alertId);
}

export function* removeAlert(alertId) {
  yield call(delay, 4000);
  yield put(alertActions.removeAlert(alertId));
}
