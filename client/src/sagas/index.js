import { put, call, takeEvery, select } from 'redux-saga/effects';
import * as apiClients from '../apiClients';
import * as actions from '../actions';
import { selectedDateSelector } from '../reducers';
import uniqueId from 'lodash.uniqueid';

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
  try {
    const response = yield call(apiClients.bookSlot, slotId);
    const notificationId = uniqueId();
    yield put(actions.bookSlotSuccess(response, slotId, notificationId));
  } catch(e) {
    yield put(actions.bookSlotFailure(e, slotId));
    const selectedDate = yield select(selectedDateSelector);
    yield put(actions.fetchSlotsRequest(selectedDate));
  }
}

export function* watchBookSlotRequests() {
  yield takeEvery('BOOK_SLOT_REQUEST', bookSlot);
}

export default function* rootSaga() {
  yield [ watchFetchSlotsRequests(), watchBookSlotRequests() ];
};
