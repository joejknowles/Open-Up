import { put, call } from 'redux-saga/effects';
import * as apiClients from '../apiClients';
import * as actions from '../actions';

export function* fetchSlots(date) {
  yield put(actions.fetchSlotsRequest(date));
  const response = yield call(apiClients.fetchSlots, date);
  yield put(actions.fetchSlotsSuccess(response))
};
