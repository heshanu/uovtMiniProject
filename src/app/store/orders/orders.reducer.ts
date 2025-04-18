//import { } from '@ngrx/store';
import { StoreModule, createReducer, on } from '@ngrx/store';
import { initialOrderState, OrderState } from './orders.status';
import { loadOrdersSuccess, setOrder } from './orders.actions';

export const initialState: OrderState[] = [];

export const ordersReducer = createReducer(
  initialOrderState,
  on(setOrder, (state, { order }) => ({
    ...state,
    ...order,  // Spread the entire order object to update all properties, including orderList
  }))
);


export const orderReducer = createReducer(
  initialOrderState,
  on(loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    ...orders,
  }))
);