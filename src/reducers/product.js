import { createSlice } from '@reduxjs/toolkit';
// import { Buffer } from 'buffer';

const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    productsSuccess: (state, { payload = [] }) => {
      state.products = payload;
    },
    productsFailure: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initialState;
    },
  },
});

export default productSlice.reducer;
export const { productsSuccess, productsFailure } = productSlice.actions;
