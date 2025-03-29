import { ActionReducerMap } from "@ngrx/store";
import { customerReducer } from "./store/customer-id.reducer";
import { CustomerdetailsInterface } from "./model/customerDetailsInterface";

export interface AppState {
    customer: CustomerdetailsInterface;
  //  order: OrderState;

  //add more state
}

export const appReducers: ActionReducerMap<AppState> = {
    customer: customerReducer,
  };
  