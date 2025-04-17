import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../../../../service/bicycle.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-hikabicycle',
    templateUrl: './hikabicycle.component.html',
    styleUrl: './hikabicycle.component.css',
    standalone: false
})
export class HikabicycleComponent implements OnInit{
  constructor(private bicycleService:BicycleService ){}
    
      ngOnInit(): void {
        this.bicycleList=this.bicycleService.getHikkaBicycleList();
      }
      
    
        bicycleList:BikeInterface[]=[];

}
