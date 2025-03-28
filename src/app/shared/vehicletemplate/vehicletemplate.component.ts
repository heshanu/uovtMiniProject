import { Component, Input, OnInit } from '@angular/core';
import { BikeService } from '../../service/bike.service';
import { BikeInterface } from '../../model/bike_interface';

@Component({
  selector: 'app-vehicletemplate',
  templateUrl: './vehicletemplate.component.html',
  styleUrl: './vehicletemplate.component.css'
})
export class VehicletemplateComponent implements OnInit{
 constructor(private bikeService:BikeService ){}    
    
      ngOnInit(): void {
        this.getBikeList()
      }
      
      @Input() bikeList: BikeInterface[] = [];
    
      getBikeList(){
        this.bikeList=this.bikeService.getHikkaBikeList();
      }
    
    
    selectBike(bike:BikeInterface) {
      console.log(bike);
      
    }
  }