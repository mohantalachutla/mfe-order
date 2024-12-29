import { call, put, takeLatest } from 'redux-saga/effects';

import { getOrders } from '../api';
import { loadingOff, loadingOn } from '../reducers/loader';
import { ordersSuccess, ordersFailure } from '../reducers/order';
import { showAlert } from '../reducers/modal';
import { fetchOrdersAction } from '../actions';
import { ALERT_TYPES } from '../constants';

const oderSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    const data = yield call(getOrders, payload);
    yield put(ordersSuccess(data));
  } catch (error) {
    yield put(ordersFailure());
    yield put(showAlert({ type: ALERT_TYPES.ERROR, message: error.message }));
  }
  yield put(loadingOff());
};

const orderSaga = function* () {
  yield takeLatest(fetchOrdersAction.type, oderSagaHandler);
};

export default orderSaga;
