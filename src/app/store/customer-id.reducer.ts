import { createReducer, on } from '@ngrx/store';
import { setCustomer } from './customer-id.actions';
import { initialCustomerState } from './customer.status';

export const initialState = '';

export const customerReducer = createReducer(
  initialCustomerState,
  on(setCustomer, (state, customer) => ({ ...state, ...customer }))
);
