import { Component } from '@angular/core';
import { BikeService } from '../../../../service/bike.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
  selector: 'app-hikkarentbikes',
  templateUrl: './hikkarentbikes.component.html',
  styleUrl: './hikkarentbikes.component.css'
})
export class HikkarentbikesComponent {
   constructor(private bikeService:BikeService ){}
  
    ngOnInit(): void {
      this.getBikeList()
    }
    
    bikeList:BikeInterface[]=[];
  
    getBikeList(){
      this.bikeList=this.bikeService.getHikkaBikeList();
    }
  
  
  selectBike(bike:BikeInterface) {
    console.log(bike);
    
  }
}
