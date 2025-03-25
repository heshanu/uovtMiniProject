import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { log } from 'console';
import { CustomerObjectService } from '../../../service/customer-object.service';
import { CustomerdetailsInterface } from '../../../model/customerDetailsInterface';
import { Subscription } from 'rxjs';

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


export class HotellistComponent implements OnInit{

  sharedData!: CustomerdetailsInterface;
  
  private dataSubscription!: Subscription;

  constructor(private router:Router,private activatedRoute: ActivatedRoute,
    private customerServiceObj:CustomerObjectService
  ){}

  ngOnInit(): void {
    this.dataSubscription = this.customerServiceObj.data$.subscribe(data => {
      this.sharedData = data;
      console.log('Shared Data:', this.sharedData);
    });
    
  }

  items:ItemAccodianInterface[]= [
    {"itemName":"Mode of travel","description":"This may be train,bike or footbike,safari jeep","link":"travelMode"},
    {"itemName":"Hotel accomadtion","description":"This may be train,bike or footbike,safari jeep","link":"/modeoftravel"},
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

  navigateTo(link: string){
    //this.router.navigate(['customerDashboard/'+this.sharedData+"/"+link]);
    this.router.navigate(['customerDashboard/'+this.sharedData._id,link])
    .then((nav:any) => {
      console.log(nav); // true if navigation is successful
    }, (err:Error) => {
      console.log(err) // when there's an error
    });
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
