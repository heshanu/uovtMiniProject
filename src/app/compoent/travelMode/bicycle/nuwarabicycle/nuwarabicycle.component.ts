import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../../../../service/bicycle.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-nuwarabicycle',
    templateUrl: './nuwarabicycle.component.html',
    styleUrl: './nuwarabicycle.component.css',
    standalone: false
})
export class NuwarabicycleComponent  implements OnInit{
    constructor(private bicycleService:BicycleService ){}
      
        ngOnInit(): void {
          this.bicycleList=this.bicycleService.getNuwaraBicycleList();
        }
        
      
          bicycleList:BikeInterface[]=[]
  
}
