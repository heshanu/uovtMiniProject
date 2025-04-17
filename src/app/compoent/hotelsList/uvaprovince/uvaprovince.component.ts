import { Component } from '@angular/core';
import { HotelserviceService } from '../../../service/hotelservice.service';
import { HotelsListInterface } from '../../../model/hotel_interface';

@Component({
    selector: 'app-uvaprovince',
    templateUrl: './uvaprovince.component.html',
    styleUrl: './uvaprovince.component.css',
    standalone: false
})
export class UvaprovinceComponent {
  constructor(private hotelService:HotelserviceService){}

  ngOnInit(): void {
    this.getUvaHotel();
  }

  uvaHotelList:HotelsListInterface[]=[];

  getUvaHotel():void{
    this.uvaHotelList= this.hotelService.getUvaHotelList();
  }
}
