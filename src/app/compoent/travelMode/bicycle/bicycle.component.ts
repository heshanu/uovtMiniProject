import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { getCustomerDetail, selectCustomerId } from '../../../store/customers/customer.selectors';
import { selectOrderDetails } from '../../../store/orders/orders.selectors';
import { CustomerdetailsInterface } from '../../../model/customerDetailsInterface';

@Component({
    selector: 'app-bicycle',
    templateUrl: './bicycle.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './bicycle.component.css',
    standalone: false
})
export class BicycleComponent implements OnInit,OnDestroy{
  expandedIndex = 0;
  customerObj$!: Observable<CustomerdetailsInterface|any>;
    private subscription!: Subscription;
  
    customerId!:string;
  
    constructor(private router:Router,
      private store: Store<AppState>
    ){
      this.customerObj$ = this.store.pipe(select( getCustomerDetail ));
    }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription=this.customerObj$.subscribe((data:any) => {
      this.customerId = data._id; 
     // console.log('Customer ID:', this.customerRecivedObj);
    });
  }
    items= [
      {"itemName":"Galle Rent bicycle","description":"This may be motor bike","link":"gallebicycle"},
      {"itemName":"Hikkaduwa Rent bicycle","description":"This may be motor bike","link":"hikkabicycle"},
      {"itemName":"Matara Rent bicycle","description":"This may be motor bike","link":"matarabicycle"},
      {"itemName":"Nuwara Rent bicycle","description":"This may be motor bike","link":"nuwarabicycle"}
     
    ]
  
    navigateTo(link: string) {
        console.log("insdie the motorbike com",link);
      
          this.router.navigate(['customerDashboard',this.customerId,'travelMode','bicycle', link])
            .then((nav: boolean) => {
              console.log('Navigation successful:', nav);
            })
            .catch((err: Error) => {
              console.error('Navigation error:', err);
            });
      
      }
}
