import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { getCustomerDetail, selectCustomerId } from '../../../store/customers/customer.selectors';
import { selectOrderDetails } from '../../../store/orders/orders.selectors';

@Component({
    selector: 'app-tuktuk',
    templateUrl: './tuktuk.component.html',
    styleUrl: './tuktuk.component.css',
    standalone: false
})
export class TuktukComponent implements OnInit,OnDestroy{
  expandedIndex = 0;
 customerId$: Observable<any>;
  customerId: string| undefined;

  orderList$: Observable<any>;
  orderList1!:any;

  private subscriptionCustomerId!: Subscription;
  id!:string|undefined;
  
    constructor(private router:Router,private activatedRoute: ActivatedRoute,
      private store: Store<AppState>){
      this.customerId$ = this.store.select(getCustomerDetail);
      this.orderList$ =this.store.select(selectOrderDetails) 

    }

  ngOnDestroy(): void {
    if(this.subscriptionCustomerId){
    this.subscriptionCustomerId.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscriptionCustomerId=this.customerId$.subscribe((data:any)=>{
       this.id=data._id; 
    })
  }
    items= [
      {"itemName":"Galle Rent Tuktuk","description":"This may be motor bike","link":"galleTuktuk"},
      {"itemName":"Hikkaduwa Rent Tuktuk","description":"This may be motor bike","link":"hikkaTuktuk"},
      {"itemName":"Matara Rent Tuktuk","description":"This may be motor bike","link":"mataraTuktuk"},
      {"itemName":"Nuwara Rent Tuktuk","description":"This may be motor bike","link":"nuwaraTuktuk"},
     
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
    
      
          this.router.navigate(['customerDashboard',this.id,'travelMode','tuktuk', link])
            .then((nav: boolean) => {
              console.log('Navigation successful:', nav);
            })
            .catch((err: Error) => {
              console.error('Navigation error:', err);
            });
      
      }

}
