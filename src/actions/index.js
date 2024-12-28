import { createAction } from '@reduxjs/toolkit';

export const helloAction = createAction('hello/request', (payload) => ({
  payload,
}));

export const fetchProductsAction = createAction(
  'fetchProducts/request',
  (payload) => ({
    payload,
  })
);

export const fetchProductAction = createAction(
  'fetchProduct/request',
  (payload) => ({
    payload,
  })
);

export const changeProductStatusAction = createAction(
  'changeProductStatus/request',
  (payload) => ({
    payload,
  })
);

export const orderProductAction = createAction(
  'orderProduct/request',
  (payload) => ({
    payload,
  })
);

export const addToCartAction = createAction('addToCart/request', (payload) => ({
  payload,
}));

export const AddToWishlistAction = createAction(
  'addToWishlist/request',
  (payload) => ({
    payload,
  })
);
