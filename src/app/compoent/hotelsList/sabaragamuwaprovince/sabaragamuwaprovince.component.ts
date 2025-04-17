import { Component, OnInit } from '@angular/core';
import { HotelserviceService } from '../../../service/hotelservice.service';
import { HotelsListInterface } from '../../../model/hotel_interface';

@Component({
    selector: 'app-sabaragamuwaprovince',
    templateUrl: './sabaragamuwaprovince.component.html',
    styleUrl: './sabaragamuwaprovince.component.css',
    standalone: false
})
export class SabaragamuwaprovinceComponent implements OnInit{

    constructor(private hotelService:HotelserviceService){}
      
        ngOnInit(): void {
          this.getSabaraHoteHotellList();
        }
      
        sabaraHotel:HotelsListInterface[]=[];
      
        getSabaraHoteHotellList():void{
          this. sabaraHotel= this.hotelService.getNorthWest();
        }
  
}
