import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../app.reducer";
import { CustomerState } from "./customer.status";

// Select the customer state slice from the global state
export const selectCustomerState = (state: AppState) => state.customer;

// Alternatively, use createFeatureSelector for the customer state slice
export const selectCustomerStateForCus = createFeatureSelector<CustomerState>('customer');

// Selector to get the customer ID
export const selectCustomerId = createSelector(
  selectCustomerState,
  (state: CustomerState) => state.customer?._id
);

// Selector to get the customer details
export const getCustomerDetail = createSelector(
  selectCustomerState,
  (state: CustomerState) => state
);