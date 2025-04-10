import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BikeService } from '../../service/bike.service';
import { BikeInterface } from '../../model/bike_interface';
import { OrderState } from '../../store/orders/orders.status';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { setOrder } from '../../store/orders/orders.actions';
import { getCustomerDetail, selectCustomerId } from '../../store/customers/customer.selectors';
import { selectOrderDetails } from '../../store/orders/orders.selectors';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';

@Component({
  selector: 'app-vehicletemplate',
  templateUrl: './vehicletemplate.component.html',
  styleUrls: ['./vehicletemplate.component.css']
})
export class VehicletemplateComponent implements OnInit, OnDestroy {
  orderList$!: Observable<OrderState>;
  orderList!: OrderState | undefined;
  private subscriptionOrdersList!: Subscription;

  customerObj$!: Observable<CustomerdetailsInterface|any>;
  private subscription!: Subscription;
  customerId!:string;

  @Input() bikeList: BikeInterface[] = [];

  constructor(private bikeService: BikeService, private store: Store<AppState>) {
    //this.customerId$ = this.store.select(selectCustomerId);
    this.orderList$ = this.store.select(selectOrderDetails);
    this.customerObj$ = this.store.pipe(select( getCustomerDetail ));
  }

  ngOnInit(): void {
    this.subscription=this.customerObj$.subscribe((data:any) => {
      this.customerId = data._id; 
     // console.log('Customer ID:', this.customerRecivedObj);
    });
    
    this.subscriptionOrdersList = this.orderList$.subscribe({
      next: (data) => {
        this.orderList = data;
      },
      error: (err) => {
        console.error('Error fetching order list', err);
      }
    });

    this.getBikeList();
  }

  getBikeList() {
    this.bikeList = this.bikeService.getHikkaBikeList();
  }

  selectBike(bike:any) {
    console.log(bike, "bike is clicked");

    /*
      orderId:'',
    customerId:'',
    orderList:[],
    orderDate: '',
    totalPrice: 0,
    orderStatus: ''*/ 

    const order:OrderState={
      orderId:bike.bikeId,
      customerId:this.customerId,
      orderList:bike,
      orderDate:Date.now().toString(),
      totalPrice:bike.ratePerDay+100,
      orderStatus:"ordered"
    }
    this.store.dispatch(
      setOrder({order:order})
    );
  }

  ngOnDestroy(): void {
    if (this.subscriptionOrdersList) {
      this.subscriptionOrdersList.unsubscribe();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
