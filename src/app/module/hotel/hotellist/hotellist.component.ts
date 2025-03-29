import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription, take } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CustomerdetailsInterface } from '../../../model/customerDetailsInterface';
import { AppState } from '../../../app.reducer';
import { selectCustomerId } from '../../../store/customers/customer.selectors';

interface ItemAccodianInterface{
  itemName:string,
  description:string,
  link:string
}


@Component({
  selector: 'app-hotellist',
  templateUrl: './hotellist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './hotellist.component.css',
})

export class HotellistComponent implements OnInit,OnDestroy{
  
  customerId$: Observable<string|undefined>;
  customerId!:string|undefined;
  private subscription!: Subscription;

  constructor(private router:Router,private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ){
    this.customerId$ = this.store.pipe(select(selectCustomerId));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription=this.customerId$.subscribe((data) => {
      this.customerId = data; // Update the component's state with the new value
      console.log('Customer ID:', this.customerId); // Optional: Log the value
    });
  }

  //lists
  items:ItemAccodianInterface[]= [
    {"itemName":"Mode of travel","description":"This may be train,bike or footbike,safari jeep","link":"travelMode"},
    {"itemName":"Hotel accomadtion","description":"This may be train,bike or footbike,safari jeep","link":"hotelslist"},
    {"itemName":"Food cusine","description":"This may be train,bike or footbike,safari jeep","link":"foods"},
    {"itemName":"Beverage","description":"This may be train,bike or footbike,safari jeep","link":"/modeoftravel"},
    {"itemName":"Find a host areas in SriLanka","description":"This may be train,bike or footbike,safari jeep","link":"/modeoftravel"},
    
    {"itemName":"Calculate Expenss of whole trip","description":"This may be train,bike or footbike,safari jeep","link":"/modeoftravel"},
    {"itemName":"Beverage","description":"This may be train,bike or footbike,safari jeep","link":"/modeoftravel"},
    {"itemName":"Calculate fees rent fees for travel","description":"This may be train,bike or footbike,safari jeep","link":"/modeoftravel"},
     
    {"itemName":"Calculate fees for hotel and accomadation","description":"This may be train,bike or footbike,safari jeep","link":"/modeoftravel"},
    {"itemName":"Calculate fees and foods and beverage","description":"This may be train,bike or footbike,safari jeep","link":"/modeoftravel"},
    {"itemName":"Calculate Expenses of the whole trip'","description":"This may be train,bike or footbike,safari jeep","link":"/modeoftravel"},
    
  ]

  expandedIndex = 0;
/*
  navigateTo(link: string){
  
    
    this.router.navigate(["customerDashboard/",this.customerId$,link])
    .then((nav:any) => {
      console.log(nav); // true if navigation is successful
    }, (err:Error) => {
      console.log(err) // when there's an error
    });
  }
*/

  navigateTo(link: string) {
    console.log('this is inside hotelslist',link);
    // Subscribe to the customerId$ observable
    
  
      this.router.navigate(["customerDashboard/", this.customerId,link])
        .then((nav: boolean) => {
          console.log('Navigation successful:', nav);
        })
        .catch((err: Error) => {
          console.error('Navigation error:', err);
        })
  }
 
}
