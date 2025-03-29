import { createSelector } from "@ngrx/store";
import { AppState } from "../app.reducer";
import { CustomerdetailsInterface } from "../model/customerDetailsInterface";

export const selectCustomerState = (state: AppState) => state.customer;

// Selector to get the customer ID
export const selectCustomerId = createSelector(
  selectCustomerState,
  (state: CustomerdetailsInterface) => state._id
);