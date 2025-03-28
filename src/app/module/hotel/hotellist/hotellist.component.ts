import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';

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


export class HotellistComponent{

  customerId$!: Observable<string>;

  id:any;

  constructor(private router:Router,private activatedRoute: ActivatedRoute,
    private store: Store<{ customerId: string }>
  ){
    this.customerId$ = this.store.select('customerId');
  }


  items:ItemAccodianInterface[]= [
    {"itemName":"Mode of travel","description":"This may be train,bike or footbike,safari jeep","link":"travelMode"},
    {"itemName":"Hotel accomadtion","description":"This may be train,bike or footbike,safari jeep","link":"hotelslist"},
    {"itemName":"Food cusine","description":"This may be train,bike or footbike,safari jeep","link":"/modeoftravel"},
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
    console.log(link);
    // Subscribe to the customerId$ observable
    this.customerId$.pipe(
      take(1) // Take only the current value and auto-unsubscribe
    ).subscribe(customerId => {
      if (!customerId) {
        console.error('No customer ID available');
        return;
      }
      this.id=customerId

  
      this.router.navigate(["customerDashboard/", this.id,link])
        .then((nav: boolean) => {
          console.log('Navigation successful:', nav);
        })
        .catch((err: Error) => {
          console.error('Navigation error:', err);
        });
    });
  }
 
}
