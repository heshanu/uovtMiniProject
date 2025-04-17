import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../service/car.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-hikkacar',
    templateUrl: './hikkacar.component.html',
    styleUrl: './hikkacar.component.css',
    standalone: false
})
export class HikkacarComponent implements OnInit{

  constructor(private carService:CarService ){}
  
    ngOnInit(): void {
      this.carList=this.carService.getHikkaCarList();
    }
    
  
    carList:BikeInterface[]=[];

}
