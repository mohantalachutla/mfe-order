import { createAction } from '@reduxjs/toolkit';

export const helloAction = createAction('hello/request', (payload) => ({
  payload,
}));

export const fetchOrdersAction = createAction(
  'fetchOrders/request',
  (payload) => ({
    payload,
  })
);

export const cancelOrderAction = createAction(
  'cancelOrder/request',
  (payload) => ({
    payload,
  })
);
