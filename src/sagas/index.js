import { all } from 'redux-saga/effects';

import helloSaga from './helloSaga';
import productSaga from './productSaga';

export const rootSaga = function* () {
  yield all([helloSaga(), productSaga()]);
};

export default rootSaga;
