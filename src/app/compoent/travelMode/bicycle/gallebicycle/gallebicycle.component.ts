import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../../../../service/bicycle.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-gallebicycle',
    templateUrl: './gallebicycle.component.html',
    styleUrl: './gallebicycle.component.css',
    standalone: false
})
export class GallebicycleComponent implements OnInit{

  constructor(private bicycleService:BicycleService ){}
  
    ngOnInit(): void {
      this.bicycleList=this.bicycleService.getGalleBicycleList();
    }
    
  
      bicycleList:BikeInterface[]=[];

}
