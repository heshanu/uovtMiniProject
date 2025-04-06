import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { select, Store } from '@ngrx/store';
import { selectCustomerId } from '../../../store/customers/customer.selectors';
import { selectOrderDetails } from '../../../store/orders/orders.selectors';

@Component({
  selector: 'app-van',
  templateUrl: './van.component.html',
  styleUrl: './van.component.css'
})
export class VanComponent  implements OnInit,OnDestroy{
  expandedIndex = 0;
 customerId$: Observable<any>;
  customerId: string| undefined;

  orderList$: Observable<any>;
  orderList1!:any;

  private subscriptionCustomerId!: Subscription;
  id!:string|undefined;
  
    constructor(private router:Router,private activatedRoute: ActivatedRoute,
      private store: Store<AppState>){
      this.customerId$ = this.store.select(selectCustomerId);
      this.orderList$ =this.store.select(selectOrderDetails) 

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
      {"itemName":"Galle Rent Vans","description":"This may be motor bike","link":"gallevan"},
      {"itemName":"Hikkaduwa Rent Vans","description":"This may be motor bike","link":"hikkavan"},
      {"itemName":"Matara Rent Vans","description":"This may be motor bike","link":"mataravan"},
      {"itemName":"Nuwara Rent Vans","description":"This may be motor bike","link":"nuwaravan"},
     
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
    
      
          this.router.navigate(['customerDashboard',this.id,'travelMode','van', link])
            .then((nav: boolean) => {
              console.log('Navigation successful:', nav);
            })
            .catch((err: Error) => {
              console.error('Navigation error:', err);
            });
      
      }

}
