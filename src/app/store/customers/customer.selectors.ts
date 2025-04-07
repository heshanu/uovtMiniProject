import { createSelector } from "@ngrx/store";
import { AppState } from "../../app.reducer";
import { CustomerState } from "./customer.status";

// Select the customer state slice from the global state
export const selectCustomerState = (state: AppState) => state.customer

//Selector to get the customer ID
export const selectCustomerId = createSelector(
  selectCustomerState, 
  (state: CustomerState) => state.customer?._id // Return the _id field from the state
);

// Selector to get the customer details
export const getCustomerDetail = createSelector(
  selectCustomerState,
  (state: CustomerState) => state
);