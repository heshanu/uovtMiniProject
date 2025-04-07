import { createAction, props } from '@ngrx/store';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { AppState } from '../../app.reducer';
import { CustomerState } from './customer.status';
/*
export const setCustomer=createAction(
  "[Customer] Set Customer",
  props<{ _id: number;name: string ,age:number,address:string,
    accomation:string,travelMode:string,foodList:string,foodListOption:string,
    beverageList:string,beverageListOption:string,startDate:string,endDate:string}>()
)*/

export const setCustomer = createAction(
  '[Customer] Set Customer',
  props<CustomerState>()  // Directly use the CustomerState type for the payload
);

export const loadCustomer = createAction('[Customer] Load Customer');
export const loadCustomerSuccess = createAction('[Customer] Load Customer Success', props<{ customer: CustomerdetailsInterface }>());
export const loadCustomerFailure = createAction('[Customer] Load Customer Failure', props<{ error: any }>());
