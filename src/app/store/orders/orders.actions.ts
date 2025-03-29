import { createAction, props } from '@ngrx/store';
import { OrderState } from './orders.status';
/*
export const setCustomer=createAction(
  "[Customer] Set Customer",
  props<{ _id: number;name: string ,age:number,address:string,
    accomation:string,travelMode:string,foodList:string,foodListOption:string,
    beverageList:string,beverageListOption:string,startDate:string,endDate:string}>()
)*/

export const setOrder = createAction(
  '[Order] Set Order',
  props<OrderState>()
);