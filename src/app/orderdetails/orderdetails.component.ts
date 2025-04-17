import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { OrderState } from '../store/orders/orders.status';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { selectOrderDetails } from '../store/orders/orders.selectors';

@Component({
    selector: 'app-orderdetails',
    templateUrl: './orderdetails.component.html',
    styleUrls: ['./orderdetails.component.css'],
    standalone: false
})
export class OrderdetailsComponent implements OnInit, OnDestroy {
  orderList$!: Observable<OrderState | undefined>;
  orderList!: OrderState | undefined;
  orderListSubscription!: Subscription;

  constructor(private store: Store<AppState>) {
    this.orderList$ = this.store.pipe(select(selectOrderDetails));
  }

  ngOnInit(): void {
    this.orderListSubscription = this.orderList$.subscribe({
      next: (data) => {
        this.orderList = data;
      },
      error: (err) => {
        console.error('Error fetching order list', err);
      }
    });
  }

  ngOnDestroy(): void {
    this.orderListSubscription.unsubscribe();
  }
}
