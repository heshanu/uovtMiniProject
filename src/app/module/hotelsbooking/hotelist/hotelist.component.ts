import { Component, OnInit } from '@angular/core';
import { HotelserviceService } from '../../../service/hotelservice.service';

@Component({
    selector: 'app-hotelist',
    templateUrl: './hotelist.component.html',
    styleUrl: './hotelist.component.css',
    standalone: false
})
export class HotelistComponent implements OnInit{

  constructor(private hotelListService:HotelserviceService){}

  ngOnInit(): void {
    this.items=this.hotelListService.getAllHotels();
  }


  expandedIndex = 0;

  items:any[]=[];
  

}
