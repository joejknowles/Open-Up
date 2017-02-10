import { put } from 'redux-saga/effects';

export function* fetchSlots() {
  yield put({type: 'FETCH_SLOTS_REQUEST'});
}
