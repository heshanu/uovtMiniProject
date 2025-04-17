import { Component, OnInit } from '@angular/core';
import { BikeInterface } from '../../../../model/bike_interface';
import { BicycleService } from '../../../../service/bicycle.service';

@Component({
    selector: 'app-matarabicycle',
    templateUrl: './matarabicycle.component.html',
    styleUrl: './matarabicycle.component.css',
    standalone: false
})
export class MatarabicycleComponent implements OnInit{
  constructor(private bicycleService:BicycleService ){}
    
      ngOnInit(): void {
        this.bicycleList=this.bicycleService.getMataraBicycleList();
      }
      
    
        bicycleList:BikeInterface[]=[]

}
