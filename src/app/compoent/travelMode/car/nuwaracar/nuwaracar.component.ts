import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../service/car.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-nuwaracar',
    templateUrl: './nuwaracar.component.html',
    styleUrl: './nuwaracar.component.css',
    standalone: false
})
export class NuwaracarComponent  implements OnInit{

  constructor(private carService:CarService ){}
  
    ngOnInit(): void {
      this.carList=this.carService.getNuwaraCarList();
    }
    
  
    carList:BikeInterface[]=[]

}
