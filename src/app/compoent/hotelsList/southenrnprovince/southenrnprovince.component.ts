import { Component, OnInit } from '@angular/core';
import { HotelserviceService } from '../../../service/hotelservice.service';
import { HotelsListInterface } from '../../../model/hotel_interface';

@Component({
  selector: 'app-southenrnprovince',
  templateUrl: './southenrnprovince.component.html',
  styleUrl: './southenrnprovince.component.css'
})
export class SouthenrnprovinceComponent implements OnInit{

  constructor(private hotelService:HotelserviceService){}

  ngOnInit(): void {
    this.getSouthernHotel();
  }

  southernHotel:HotelsListInterface[]=[];

  getSouthernHotel(){
    this.southernHotel= this.hotelService.getHikkaBikeList();
  }
}
