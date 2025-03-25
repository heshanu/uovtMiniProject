import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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


export class HotellistComponent {

  constructor(private route:Router){}

  items:ItemAccodianInterface[]= [
    {"itemName":"Mode of travel","description":"This may be train,bike or footbike,safari jeep","link":"/modeoftravel"},
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

  navigateTo(link: string) {
    //this.route.navigate(['customerDashboard/',link]);

  }

}
