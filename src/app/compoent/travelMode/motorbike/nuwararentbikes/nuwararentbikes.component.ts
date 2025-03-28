import { Component } from '@angular/core';
import { BikeInterface } from '../../../../model/bike_interface';
import { BikeService } from '../../../../service/bike.service';

@Component({
  selector: 'app-nuwararentbikes',
  templateUrl: './nuwararentbikes.component.html',
  styleUrl: './nuwararentbikes.component.css'
})
export class NuwararentbikesComponent {
   constructor(private bikeService:BikeService ){}
      
        ngOnInit(): void {
          this.getBikeList()
        }
        
        bikeList:BikeInterface[]=[];
      
        getBikeList(){
          this.bikeList=this.bikeService.nuwaraBikeList;
        }
      
      
      selectBike(bike:BikeInterface) {
        console.log(bike);
        
      }
  
}
