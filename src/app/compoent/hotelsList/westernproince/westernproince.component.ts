import { Component, OnInit } from '@angular/core';
import { HotelserviceService } from '../../../service/hotelservice.service';
import { HotelsListInterface } from '../../../model/hotel_interface';

@Component({
    selector: 'app-westernproince',
    templateUrl: './westernproince.component.html',
    styleUrl: './westernproince.component.css',
    standalone: false
})
export class WesternproinceComponent implements OnInit{

  list:HotelsListInterface[]=[];

  constructor(private hotelService:HotelserviceService){}

  ngOnInit(): void {
    this.list=this.hotelService.getWesternHotelList();
    console.log(this.list);
  }

  

}
