import { createReducer, on } from '@ngrx/store';
import { setCustomerId } from './customer-id.actions';

export const initialState = '';

export const customerIdReducer = createReducer(
  initialState,
  on(setCustomerId, (state, { _id }) => _id) 
);