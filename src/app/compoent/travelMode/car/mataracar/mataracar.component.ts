import { Component, OnInit } from '@angular/core';
import { BikeInterface } from '../../../../model/bike_interface';
import { CarService } from '../../../../service/car.service';

@Component({
    selector: 'app-mataracar',
    templateUrl: './mataracar.component.html',
    styleUrl: './mataracar.component.css',
    standalone: false
})
export class MataracarComponent implements OnInit{

  constructor(private carService:CarService ){}
  
    ngOnInit(): void {
      this.carList=this.carService.getMataraCarList();
    }
    
  
    carList:BikeInterface[]=[];


}
