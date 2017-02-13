import { put, call, takeEvery, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as apiClients from '../apiClients';
import * as actions from '../actions';
import * as alertActions from '../actions/alerts';
import { selectedDateSelector } from '../reducers';
import uniqueId from 'lodash.uniqueid';
import { browserHistory } from 'react-router';

export function* fetchSlots({ date }) {
  try {
    const response = yield call(apiClients.fetchSlots, date);
    yield put(actions.fetchSlotsSuccess(response));
  } catch(error) {
    yield put(actions.fetchSlotsFailure(date, error));
  }
};

export function* watchFetchSlotsRequests() {
  yield takeEvery('FETCH_SLOTS_REQUEST', fetchSlots);
}

export function* bookSlot({ slotId }) {
  const alertId = uniqueId();
  try {
    const response = yield call(apiClients.bookSlot, slotId);
    yield put(actions.bookSlotSuccess(response, slotId, alertId));
    yield call(browserHistory.push, '/venue');
  } catch(e) {
    yield put(actions.bookSlotFailure(e, alertId));
    const selectedDate = yield select(selectedDateSelector);
    yield put(actions.fetchSlotsRequest(selectedDate));
  }
  yield call(removeAlert, alertId);
}

export function* removeAlert(alertId) {
  yield call(delay, 2000);
  yield put(alertActions.removeAlert(alertId));
}

export function* watchBookSlotRequests() {
  yield takeEvery('BOOK_SLOT_REQUEST', bookSlot);
}

export default function* rootSaga() {
  yield [ watchFetchSlotsRequests(), watchBookSlotRequests() ];
};
