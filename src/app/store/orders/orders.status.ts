
export interface OrderState{
  orderId:string;
  customerId:string|undefined;
  orderList:any[];
  orderDate:string;
  totalPrice:number;
  orderStatus:string;
}

export const initialOrderState:OrderState   = {
    orderId:'',
    customerId:'',
    orderList:[],
    orderDate: '',
    totalPrice: 0,
    orderStatus: ''
  };
  
