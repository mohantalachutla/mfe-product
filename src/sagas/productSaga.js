import { call, put, takeLatest } from 'redux-saga/effects';

import { getProducts } from '../api';
import { loadingOff, loadingOn } from '../reducers/loader';
import { productsSuccess, productsFailure } from '../reducers/product';
import { showAlert } from '../reducers/modal';
import { fetchProductsAction } from '../actions';
import { ALERT_TYPES } from '../constants';

const fetchProductsSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    const data = yield call(getProducts, payload);
    yield put(productsSuccess(data));
  } catch (error) {
    yield put(productsFailure());
    yield put(showAlert({ type: ALERT_TYPES.ERROR, message: error.message }));
  }
  yield put(loadingOff());
};

const productSaga = function* () {
  yield takeLatest(fetchProductsAction.type, fetchProductsSagaHandler);
};

export default productSaga;
