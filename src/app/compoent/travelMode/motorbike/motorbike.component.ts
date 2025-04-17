import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { getCustomerDetail, selectCustomerId, selectCustomerState } from '../../../store/customers/customer.selectors';
import { selectOrderDetails } from '../../../store/orders/orders.selectors';
import { CustomerdetailsInterface } from '../../../model/customerDetailsInterface';

@Component({
    selector: 'app-motorbike',
    templateUrl: './motorbike.component.html',
    styleUrl: './motorbike.component.css',
    standalone: false
})
export class MotorbikeComponent implements OnInit,OnDestroy{

   customerObj$!: Observable<CustomerdetailsInterface|any>;
   private subscription!: Subscription;
   customerId!:string;

  orderList$: Observable<any>;
  orderList1!:any;

  private subscriptionCustomerId!: Subscription;
  id!:string|undefined;
  
    constructor(private router:Router,private activatedRoute: ActivatedRoute,
      private store: Store<AppState>){
       this.customerObj$ = this.store.pipe(select( getCustomerDetail ));
      this.orderList$ =this.store.select(selectOrderDetails) 
    }


  ngOnInit(): void {
    this.subscription=this.customerObj$.subscribe((data:any) => {
      this.customerId = data._id; 
     console.log('Customer details:', data);
    });
    
  }

  items= [
      {"itemName":"Galle Rent bikes","description":"This may be motor bike","link":"gallebike"},
      {"itemName":"Hikkaduwa Rent bikes","description":"This may be motor bike","link":"hikkabike"},
      {"itemName":"Matara Rent bikes","description":"This may be motor bike","link":"matarabike"},
      {"itemName":"Nuwara Rent bikes","description":"This may be motor bike","link":"nuwarabike"},
  
     
  ]
  
  navigateTo(link: string) {
        console.log("insdie the motorbike:",link);    
    
          this.router.navigate(['customerDashboard',this.customerId,'travelMode','motorbike', link])
            .then((nav: boolean) => {
              console.log('Navigation successful:', nav);
            })
            .catch((err: Error) => {
              console.error('Navigation error:', err);
            });
  }

    
  ngOnDestroy(): void {
        if(this.subscription){
          this.subscription.unsubscribe();
        }
  }

}