import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { selectCustomerId } from '../../../store/customers/customer.selectors';
import { selectOrderDetails } from '../../../store/orders/orders.selectors';

@Component({
  selector: 'app-bicycle',
  templateUrl: './bicycle.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './bicycle.component.css'
})
export class BicycleComponent implements OnInit,OnDestroy{
  expandedIndex = 0;
customerId$: Observable<any>;
  customerId: string| undefined;

  orderList$: Observable<any>;
  orderList1!:any;

  private subscriptionCustomerId!: Subscription;
  id!:string|undefined;
  
    constructor(private router:Router,
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
      {"itemName":"Galle Rent bicycle","description":"This may be motor bike","link":"gallebicycle"},
      {"itemName":"Hikkaduwa Rent bicycle","description":"This may be motor bike","link":"hikkabicycle"},
      {"itemName":"Matara Rent bicycle","description":"This may be motor bike","link":"matarabicycle"},
      {"itemName":"Nuwara Rent bicycle","description":"This may be motor bike","link":"nuwarabicycle"}
     
    ]
  
    navigateTo(link: string) {
        console.log("insdie the motorbike com",link);
      
          this.router.navigate(['customerDashboard',this.id,'travelMode','bicycle', link])
            .then((nav: boolean) => {
              console.log('Navigation successful:', nav);
            })
            .catch((err: Error) => {
              console.error('Navigation error:', err);
            });
      
      }
}
