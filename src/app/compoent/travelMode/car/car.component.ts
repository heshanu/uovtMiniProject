import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { select, Store } from '@ngrx/store';
import { getCustomerDetail, selectCustomerId } from '../../../store/customers/customer.selectors';
import { selectOrderDetails } from '../../../store/orders/orders.selectors';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './car.component.css',
    standalone: false
})
export class CarComponent implements OnInit,OnDestroy{
  expandedIndex = 0;
 customerId$: Observable<any>;
  customerId: string| undefined;

  orderList$: Observable<any>;
  orderList1!:any;

  private subscriptionCustomerId!: Subscription;
  
  constructor(private router:Router,private activatedRoute: ActivatedRoute,
      private store: Store<AppState>){
      this.customerId$ = this.store.select(getCustomerDetail);
      this.orderList$ =this.store.select(selectOrderDetails) 

    }

  ngOnDestroy(): void {
    this.subscriptionCustomerId.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionCustomerId=this.customerId$.subscribe((data:any)=>{
       this.customerId=data._id; 
    })
  }
    items= [
      {"itemName":"Galle Rent Cars","description":"This may be motor bike","link":"gallecar"},
      {"itemName":"Hikkaduwa Rent Cars","description":"This may be motor bike","link":"hikkacar"},
      {"itemName":"Matara Rent Cars","description":"This may be motor bike","link":"mataracar"},
      {"itemName":"Nuwara Rent Cars","description":"This may be motor bike","link":"nuwaracar"},
    ]
  
    navigateTo(link: string) {
        console.log("insdie the motorbike com",link);
          
          this.router.navigate(['customerDashboard',this.customerId,'travelMode','car', link])
            .then((nav: boolean) => {
              console.log('Navigation successful:', nav);
            })
            .catch((err: Error) => {
              console.error('Navigation error:', err);
            });
      
      }
}
