import { put, call } from 'redux-saga/effects';
import * as apiClients from '../apiClients';

export function* fetchSlots(date) {
  yield put({type: 'FETCH_SLOTS_REQUEST'});
  yield call(apiClients.fetchSlots, date)
}
