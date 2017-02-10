import { put, call } from 'redux-saga/effects';
import * as apiClients from '../apiClients';
import * as actions from '../actions'

export function* fetchSlots(date) {
  yield put({type: 'FETCH_SLOTS_REQUEST'});
  const response = yield call(apiClients.fetchSlots, date);
  yield put({ type: 'FETCH_SLOTS_SUCCESS', response })
}
