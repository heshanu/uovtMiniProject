import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BikeService } from '../../service/bike.service';
import { BikeInterface } from '../../model/bike_interface';
import { OrderState } from '../../store/orders/orders.status';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { setOrder } from '../../store/orders/orders.actions';
import { selectCustomerId } from '../../store/customers/customer.selectors';
import { selectOrderDetails } from '../../store/orders/orders.selectors';

@Component({
  selector: 'app-vehicletemplate',
  templateUrl: './vehicletemplate.component.html',
  styleUrls: ['./vehicletemplate.component.css']
})
export class VehicletemplateComponent implements OnInit, OnDestroy {
  orderList$!: Observable<OrderState>;
  orderList!: OrderState | undefined;
  private subscriptionOrdersList!: Subscription;

  customerId$!: Observable<string | undefined>;
  customerId!: string | undefined;
  private subscriptionCustomerId!: Subscription;

  @Input() bikeList: BikeInterface[] = [];

  constructor(private bikeService: BikeService, private store: Store<AppState>) {
    this.customerId$ = this.store.select(selectCustomerId);
    this.orderList$ = this.store.select(selectOrderDetails);
  }

  ngOnInit(): void {
    this.subscriptionCustomerId = this.customerId$.subscribe({
      next: (data) => {
        this.customerId = data;
      },
      error: (err) => {
        console.error('Error fetching customer ID', err);
      }
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

  selectBike(bike: BikeInterface) {
    console.log(bike, "bike is clicked");
    this.store.dispatch(
      setOrder({
        orderId: bike.bikeId,
        customerId: this.customerId,
        orderList: ["asasasaasa"],
        orderDate: "2021-12-12",
        totalPrice: bike.ratePerDay,
        orderStatus: "order pending"
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscriptionOrdersList) {
      this.subscriptionOrdersList.unsubscribe();
    }
    if (this.subscriptionCustomerId) {
      this.subscriptionCustomerId.unsubscribe();
    }
  }
}
