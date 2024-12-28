import { call, put, takeLatest } from 'redux-saga/effects';

import { getProducts, orderProducts, addToCart, addToWishlist } from '../api';
import { loadingOff, loadingOn } from '../reducers/loader';
import { productsSuccess, productsFailure } from '../reducers/product';
import { showAlert } from '../reducers/modal';
import {
  addToCartAction,
  fetchProductsAction,
  orderProductAction,
  AddToWishlistAction,
} from '../actions';
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

const orderProductsSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    const data = yield call(orderProducts, payload);
    const { _id } = data;
    yield put(
      showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Order has been placed with id ${_id}`,
      })
    );
  } catch {
    yield put(
      showAlert({
        type: ALERT_TYPES.ERROR,
        message: 'Order could not be placed',
      })
    );
  }
  yield put(loadingOff());
};

const addToCartSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    yield call(addToCart, payload);
    yield put(
      showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Added to cart`,
      })
    );
  } catch {
    yield put(
      showAlert({
        type: ALERT_TYPES.ERROR,
        message: 'Product could not be added to cart',
      })
    );
  }
  yield put(loadingOff());
};

const addToWishlistSagaHandler = function* ({ payload }) {
  yield put(loadingOn());
  try {
    yield call(addToWishlist, payload);
    yield put(
      showAlert({
        type: ALERT_TYPES.SUCCESS,
        message: `Wishlisted`,
      })
    );
  } catch {
    yield put(
      showAlert({
        type: ALERT_TYPES.ERROR,
        message: 'Product could not be added to wishlist',
      })
    );
  }
  yield put(loadingOff());
};

const productSaga = function* () {
  yield takeLatest(fetchProductsAction.type, fetchProductsSagaHandler);
  yield takeLatest(orderProductAction.type, orderProductsSagaHandler);
  yield takeLatest(addToCartAction.type, addToCartSagaHandler);
  yield takeLatest(AddToWishlistAction.type, addToWishlistSagaHandler);
};

export default productSaga;
