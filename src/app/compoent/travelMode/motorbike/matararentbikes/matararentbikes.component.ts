import { Component } from '@angular/core';
import { BikeService } from '../../../../service/bike.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-matararentbikes',
    templateUrl: './matararentbikes.component.html',
    styleUrl: './matararentbikes.component.css',
    standalone: false
})
export class MatararentbikesComponent {
   
  constructor(private bikeService:BikeService ){}

  ngOnInit(): void {
    this.bikeList=this.bikeService.getHikkaBikeList()
  }
  

    bikeList:BikeInterface[]=[];
}
