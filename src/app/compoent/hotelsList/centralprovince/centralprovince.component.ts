import { Component, OnInit } from '@angular/core';
import { HotelserviceService } from '../../../service/hotelservice.service';
import { HotelsListInterface } from '../../../model/hotel_interface';

@Component({
    selector: 'app-centralprovince',
    templateUrl: './centralprovince.component.html',
    styleUrl: './centralprovince.component.css',
    standalone: false
})
export class CentralprovinceComponent implements OnInit{
  constructor(private hotelService:HotelserviceService){}
  
    ngOnInit(): void {
      this.getCentralHotelList();
    }
  
    centralHotel:HotelsListInterface[]=[];
  
    getCentralHotelList():void{
      this.centralHotel= this.hotelService.getCentralHotelList();
    }
}
