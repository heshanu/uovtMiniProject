import { Component, OnInit } from '@angular/core';
import { HotelserviceService } from '../../../service/hotelservice.service';
import { HotelsListInterface } from '../../../model/hotel_interface';

@Component({
    selector: 'app-north-centralprovince',
    templateUrl: './north-centralprovince.component.html',
    styleUrl: './north-centralprovince.component.css',
    standalone: false
})
export class NorthCentralprovinceComponent implements OnInit{

    constructor(private hotelService:HotelserviceService){}
      
        ngOnInit(): void {
          this.getNorthCentralHotellList();
        }
      
        northCentralHotel:HotelsListInterface[]=[];
      
        getNorthCentralHotellList():void{
          this.northCentralHotel= this.hotelService.getNorthCentralHotelList();
        }
}
