import { Component, OnInit } from '@angular/core';
import { HotelserviceService } from '../../../service/hotelservice.service';
import { HotelsListInterface } from '../../../model/hotel_interface';

@Component({
    selector: 'app-easternprovince',
    templateUrl: './easternprovince.component.html',
    styleUrl: './easternprovince.component.css',
    standalone: false
})
export class EasternprovinceComponent implements OnInit{
  
 constructor(private hotelService:HotelserviceService){}
  
    ngOnInit(): void {
      this.getEasternList();
    }
  
    easternHotelList:HotelsListInterface[]=[];
  
    getEasternList():void{
      this.easternHotelList= this.hotelService.getEasternHotelList();
    }
}
