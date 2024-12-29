import { call, put, takeLatest } from 'redux-saga/effects';

import { getOrders, updateStatus as updateOrderStatus } from '../api';
import { loadingOff, loadingOn } from '../reducers/loader';
import { ordersSuccess, ordersFailure } from '../reducers/order';
import { showAlert } from '../reducers/modal';
import { cancelOrderAction, fetchOrdersAction } from '../actions';
import { ALERT_TYPES } from '../constants';

const fetchOrdersSagaHandler = function* ({ payload }) {
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

const cancelOrderSagaHandler = function* ({ payload: { _id } }) {
  yield put(loadingOn());
  try {
    yield call(updateOrderStatus, { _id, status: 'Cancelled' });
    yield fetchOrdersSagaHandler({ payload: {} });
  } catch (error) {
    yield put(ordersFailure());
    yield put(showAlert({ type: ALERT_TYPES.ERROR, message: error.message }));
  }
  yield put(loadingOff());
};

const orderSaga = function* () {
  yield takeLatest(fetchOrdersAction.type, fetchOrdersSagaHandler);
  yield takeLatest(cancelOrderAction.type, cancelOrderSagaHandler);
};

export default orderSaga;
