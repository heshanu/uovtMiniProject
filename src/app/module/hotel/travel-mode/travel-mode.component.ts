import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, take } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { selectCustomerId } from '../../../store/customers/customer.selectors';

@Component({
  selector: 'app-travel-mode',
  templateUrl: './travel-mode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './travel-mode.component.css'
})
export class TravelModeComponent implements OnInit,OnDestroy{

  customerId$: Observable<string|undefined>;
  customerId: number | undefined;
  private subscription!: Subscription;

  id:any;

  constructor(private router:Router,private activatedRoute: ActivatedRoute,
    private store: Store<AppState>){
    this.customerId$ = this.store.select(selectCustomerId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

ngOnInit(): void {
   this.subscription= this.customerId$.subscribe((ID)=>{
      this.id=ID
   }) 
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
      console.log("ggg",link);
      // Subscribe to the customerId$ observable
      this.customerId$.pipe(
        take(1) // Take only the current value and auto-unsubscribe
      ).subscribe(customerId => {
        if (!customerId) {
          console.error('No customer ID available');
          return;
        }
        this.id=customerId
    
        console.log(link);
        
        this.router.navigate(['customerDashboard', this.id, 'travelMode', link])
          .then((nav: boolean) => {
            console.log('Navigation successful:', nav);
          })
          .catch((err: Error) => {
            console.error('Navigation error:', err);
          });
          console.log("ggg123");
      });
    }

     // Check if a mode is currently active
  
}
