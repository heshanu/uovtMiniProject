import { createReducer, on } from '@ngrx/store';
import { loadCustomer, loadCustomerFailure, loadCustomerSuccess, setCustomer} from './customer-id.actions';
import { CustomerState, initialCustomerState } from './customer.status';


// export const customerReducer = createReducer(
//   initialCustomerState,
//   on(setCustomer, (state, customer) => ({ ...state, ...customer })),
// );

export const customerReducer = createReducer(
  initialCustomerState,
  on(setCustomer, (state,{customer}) => ({ ...state, ...customer })),
  on(loadCustomer, state => ({ ...state, loading: true })),
  on(loadCustomerSuccess, (state, { customer }) => ({ ...state, customer, loading: false })),
  on(loadCustomerFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
