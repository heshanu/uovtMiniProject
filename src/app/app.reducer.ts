import { ActionReducerMap } from "@ngrx/store";
import { customerReducer } from "./store/customers/customer-id.reducer";
import { CustomerdetailsInterface } from "./model/customerDetailsInterface";
import { OrderState } from "./store/orders/orders.status";
import { ordersReducer } from "./store/orders/orders.reducer";

export interface AppState {
    customer: CustomerdetailsInterface;
    orders:OrderState
  //  order: OrderState;

  //add more state
}

export const appReducers: ActionReducerMap<AppState> = {
    customer: customerReducer,
    orders:ordersReducer
  };
  