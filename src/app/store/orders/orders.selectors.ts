import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../app.reducer";
import { CustomerdetailsInterface } from "../../model/customerDetailsInterface";
import { OrderState } from "./orders.status";

const selectOrderState = createFeatureSelector<OrderState>('orders');

// Selector to get the order details
export const selectOrderDetails = createSelector(
  selectOrderState,
  (orderState: OrderState) => orderState
);