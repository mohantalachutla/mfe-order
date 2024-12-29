import { createSlice } from '@reduxjs/toolkit';
// import { Buffer } from 'buffer';

const initialState = {
  orders: [],
};
const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    ordersSuccess: (state, { payload = [] }) => {
      state.orders = payload;
    },
    ordersFailure: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initialState;
    },
  },
});

export default orderSlice.reducer;
export const { ordersSuccess, ordersFailure } = orderSlice.actions;
