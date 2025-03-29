import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BikeService } from '../../service/bike.service';
import { BikeInterface } from '../../model/bike_interface';
import { OrderState } from '../../store/orders/orders.status';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { setOrder } from '../../store/orders/orders.actions';
import { selectCustomerId } from '../../store/customers/customer.selectors';
import { getOrdersList } from '../../store/orders/orders.selectors';

@Component({
  selector: 'app-vehicletemplate',
  templateUrl: './vehicletemplate.component.html',
  styleUrl: './vehicletemplate.component.css'
})

export class VehicletemplateComponent implements OnInit,OnDestroy{
  orderList$:Observable<OrderState> | undefined;
  orderList:OrderState|undefined;   
  private subscriptionOrdersList!:Subscription;

  customerId$!:Observable<string|undefined>;
  customerId!:string|undefined;
  private subscriptionCustomerId!:Subscription;

 constructor(private bikeService:BikeService,
  private store: Store<AppState> ){
     this.customerId$ = this.store.select(selectCustomerId);
     this.orderList$=this.store.select(getOrdersList)
  }   

  ngOnDestroy(): void {
    this.subscriptionOrdersList.unsubscribe();
    this.subscriptionCustomerId.unsubscribe();
  }
    
  ngOnInit(): void {
   this.subscriptionCustomerId=this.customerId$.subscribe((data)=>{
      this.customerId=data;
   });
        this.getBikeList()
  }
      
      @Input() bikeList: BikeInterface[] = [];
    
      getBikeList(){
        this.bikeList=this.bikeService.getHikkaBikeList();
      }
    
    
    selectBike(bike:BikeInterface) {
      console.log(bike);
      this.store.dispatch(
        setOrder({
          orderId: "order"+bike.bikeId,
          customerId: this.customerId,
          orderList: [bike],
          orderDate: "2021-12-12",
          totalPrice: bike.ratePerDay,
          orderStatus: "order pending"
        })
      )
    }
  }