import { all } from 'redux-saga/effects';

import helloSaga from './helloSaga';
import orderSaga from './orderSaga';

export const rootSaga = function* () {
  yield all([helloSaga(), orderSaga()]);
};

export default rootSaga;
