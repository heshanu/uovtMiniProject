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
  styleUrl: './motorbike.component.css'
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
    this.subscription=this.customerObj$.subscribe((data) => {
      this.customerId = data._id; 
     // console.log('Customer ID:', this.customerRecivedObj);
    });
    
  }
    items= [
      {"itemName":"Galle Rent bikes","description":"This may be motor bike","link":"gallebike"},
      {"itemName":"Hikkaduwa Rent bikes","description":"This may be motor bike","link":"hikkabike"},
      {"itemName":"Matara Rent bikes","description":"This may be motor bike","link":"matarabike"},
      {"itemName":"Nuwara Rent bikes","description":"This may be motor bike","link":"nuwarabike"},
  
     
    ]
  
    navigateTo(link: string) {
        console.log("insdie the motorbike com",link);
        // Subscribe to the customerId$ observable
        // this.customerId$.pipe(
        //   take(1) // Take only the current value and auto-unsubscribe
        // ).subscribe(customerId => {
        //   if (!customerId) {
        //     console.error('No customer ID available');
        //     return;
        //   }
        //   this.id=customerId
    
      
          this.router.navigate(['customerDashboard',this.id,'travelMode','motorbike', link])
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