import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BikeService } from '../../../../service/bike.service';
import { BikeInterface } from '../../../../model/bike_interface';
import { log } from 'node:console';

@Component({
  selector: 'app-gallerentbikes',
  templateUrl: './gallerentbikes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './gallerentbikes.component.css'
})
export class GallerentbikesComponent implements OnInit{

  constructor(private bikeService:BikeService ){}

  ngOnInit(): void {
    this.getBikeList()
  }
  
  bikeList:BikeInterface[]=[];

  getBikeList(){
    this.bikeList=this.bikeService.getGalleBikeList()
  }


selectBike(bike:BikeInterface) {
  console.log(bike);
  
}

}
