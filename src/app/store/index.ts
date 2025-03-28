import { ActionReducerMap } from '@ngrx/store';
import { customerIdReducer, initialState as customerIdState } from './customer-id.reducer';

export interface AppState {
  customerId: string;
}

export const reducers: ActionReducerMap<AppState> = {
  customerId: customerIdReducer
};

export const initialAppState = {
  customerId: customerIdState
};