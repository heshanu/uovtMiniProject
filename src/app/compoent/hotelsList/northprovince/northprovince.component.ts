import { Component, OnInit } from '@angular/core';
import { HotelserviceService } from '../../../service/hotelservice.service';
import { HotelsListInterface } from '../../../model/hotel_interface';

@Component({
    selector: 'app-northprovince',
    templateUrl: './northprovince.component.html',
    styleUrl: './northprovince.component.css',
    standalone: false
})
export class NorthprovinceComponent implements OnInit{


      constructor(private hotelService:HotelserviceService){}
        
          ngOnInit(): void {
            this.getNorthHotellList();
          }
        
          northHotelList:HotelsListInterface[]=[];
        
          getNorthHotellList():void{
            this.northHotelList= this.hotelService.getNorthWest();
          }
}
