import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { getCustomerDetail} from '../../../store/customers/customer.selectors';
import { CustomerdetailsInterface } from '../../../model/customerDetailsInterface';

@Component({
    selector: 'app-travel-mode',
    templateUrl: './travel-mode.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './travel-mode.component.css',
    standalone: false
})
export class TravelModeComponent implements OnInit,OnDestroy{

    customerObj$!: Observable<CustomerdetailsInterface|any>;
      private subscription!: Subscription;
      customerId!:string;

  constructor(private router:Router,
    private store: Store<AppState>){
     this.customerObj$ = this.store.pipe(select( getCustomerDetail ));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

ngOnInit(): void {
  this.subscription=this.customerObj$.subscribe((data:any) => {
    this.customerId = data._id; 
  });
}

  items= [
    {"itemName":"Motor bike","description":"This may be motor bike","link":"motorbike"},
    {"itemName":"Bicycle","description":"This may be bicycle","link":"bicycle"},
    {"itemName":"Car","description":"This may be car","link":"car"},
    {"itemName":"Van","description":"This may be van","link":"van"},
    {"itemName":"tuktuk","description":"This may be tuktuk","link":"tuktuk"},
    {"itemName":"train","description":"This may be train","link":"train"},
   
  ]

    navigateTo(link: string) {
      
        console.log(link);
        
        this.router.navigate(['customerDashboard', this.customerId, 'travelMode', link])
          .then((nav: boolean) => {
            console.log('Navigation successful:', nav);
          })
          .catch((err: Error) => {
            console.error('Navigation error:', err);
          });
          console.log("ggg123");
        }
      }
    

     // Check if a mode is currently active
  
