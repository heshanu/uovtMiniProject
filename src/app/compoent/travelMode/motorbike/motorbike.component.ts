import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { selectCustomerId, selectCustomerState } from '../../../store/customers/customer.selectors';
import { OrderState } from '../../../store/orders/orders.status';
import { getOrdersList } from '../../../store/orders/orders.selectors';

@Component({
  selector: 'app-motorbike',
  templateUrl: './motorbike.component.html',
  styleUrl: './motorbike.component.css'
})
export class MotorbikeComponent implements OnInit,OnDestroy{

  customerId$: Observable<string|undefined>;
  customerId: string | undefined;

  private subscriptionCustomerId!: Subscription;
  id!:string|undefined;
  
    constructor(private router:Router,private activatedRoute: ActivatedRoute,
      private store: Store<AppState>){
      this.customerId$ = this.store.select(selectCustomerId);

    }

  ngOnDestroy(): void {
    this.subscriptionCustomerId.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionCustomerId=this.customerId$.subscribe((data)=>{
       this.id=data; 
    })
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
}
