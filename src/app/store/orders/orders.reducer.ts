import { createReducer, on } from '@ngrx/store';
import { initialOrderState } from './orders.status';
import { setOrder } from './orders.actions';

export const ordersReducer = createReducer(
  initialOrderState,
  on(setOrder, (state, customer) => ({ ...state, ...customer }))
);
