
import { CustomerdetailsInterface } from "../../model/customerDetailsInterface";

export interface CustomerState {
  customer: CustomerdetailsInterface | null;
  loading: boolean;
  error: any;
}

export const initialCustomerState: CustomerState = {
  customer: null,
  loading: false,
  error: null,
};


// export const initialCustomerState: CustomerdetailsInterface = {
//     _id:'0',
//     name: '',
//     age: 0,
//     address: '',
//     accomadation: '',
//     travelMode: '',
//     foodList: '',
//     foodListOption: 'default',
//     beverageList: '',
//     beverageListOption: 'default',
//     startDate: '',
//     endDate: ''
//   };
  
