import { ActionReducerMap } from "@ngrx/store";
import { customerReducer } from "./store/customers/customer-id.reducer";
import { OrderState } from "./store/orders/orders.status";
import { ordersReducer } from "./store/orders/orders.reducer";
import { CustomerState } from "./store/customers/customer.status";

export interface AppState {
    customer: CustomerState;
    orders:OrderState
  //  order: OrderState;

  //add more state
}

export const appReducers: ActionReducerMap<AppState> = {
    customer: customerReducer,
    orders:ordersReducer
  };
  
