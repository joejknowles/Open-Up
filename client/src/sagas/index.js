import { put, call, takeEvery } from 'redux-saga/effects';

import { bookSlot, exitBooking } from './bookSlot'
import * as apiClients from '../apiClients';
import * as actions from '../actions';

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

export function* watchBookSlotRequests() {
  yield takeEvery('BOOK_SLOT_REQUEST', bookSlot);
}

export function* watchCloseModal() {
  yield takeEvery('CLOSE_MODAL', exitBooking);
}

export default function* rootSaga() {
  yield [
    watchFetchSlotsRequests(),
    watchBookSlotRequests(),
    watchCloseModal()
  ];
};
