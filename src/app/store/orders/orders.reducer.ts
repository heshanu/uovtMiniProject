import { createReducer, on } from '@ngrx/store';
import { initialOrderState, OrderState } from './orders.status';
import { loadOrdersSuccess, setOrder } from './orders.actions';

export const initialState: OrderState[] = [];

export const ordersReducer = createReducer(
  initialOrderState,
  on(setOrder , (state, { orderList }) => ({
    ...state,
    orderList: orderList
  }))
);


export const orderReducer = createReducer(
  initialOrderState,
  on(loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    ...orders,
  }))
);