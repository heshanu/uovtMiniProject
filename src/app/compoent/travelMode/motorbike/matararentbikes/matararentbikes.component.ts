import { Component } from '@angular/core';
import { BikeService } from '../../../../service/bike.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
  selector: 'app-matararentbikes',
  templateUrl: './matararentbikes.component.html',
  styleUrl: './matararentbikes.component.css'
})
export class MatararentbikesComponent {
    constructor(private bikeService:BikeService ){}
    
      ngOnInit(): void {
        this.getBikeList()
      }
      
      bikeList:BikeInterface[]=[];
    
      getBikeList(){
        this.bikeList=this.bikeService.getMataraBikeList();
      }
    
    
    selectBike(bike:BikeInterface) {
      console.log(bike);
      
    }

}
