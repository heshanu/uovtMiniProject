import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../../../service/bike.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-hikkarentbikes',
    templateUrl: './hikkarentbikes.component.html',
    styleUrl: './hikkarentbikes.component.css',
    standalone: false
})
export class HikkarentbikesComponent implements OnInit{

  constructor(private bikeService:BikeService ){}

  ngOnInit(): void {
    this.bikeList=this.bikeService.getHikkaBikeList()
  }
  

    bikeList:BikeInterface[]=[];
}
