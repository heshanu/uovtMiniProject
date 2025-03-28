import { createAction, props } from '@ngrx/store';

export const setCustomerId = createAction(
  '[Customer] Set Customer ID',
  props<{ _id: string }>()
);