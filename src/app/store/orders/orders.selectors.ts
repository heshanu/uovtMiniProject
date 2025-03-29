import { createSelector } from "@ngrx/store";
import { AppState } from "../../app.reducer";
import { CustomerdetailsInterface } from "../../model/customerDetailsInterface";
import { OrderState } from "./orders.status";
import { create } from "domain";

export const selectOrderState = (state: AppState) => state.orders;

// Selector to get the order ID
export const selectOrderId = createSelector(
  selectOrderState,
  (state: OrderState) => state.orderId
);

export const getOrdersList=createSelector(
  selectOrderState,
  (state: OrderState) => state
)