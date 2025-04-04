import { Component, OnInit } from '@angular/core';
import { BikeInterface } from '../../../../model/bike_interface';
import { CarService } from '../../../../service/car.service';

@Component({
  selector: 'app-gallecar',
  templateUrl: './gallecar.component.html',
  styleUrl: './gallecar.component.css'
})
export class GallecarComponent implements OnInit{

  constructor(private carService:CarService ){}
  
    ngOnInit(): void {
      this.carList=this.carService.getGalleCarList();
    }
    
  
    carList:BikeInterface[]=[];

}
