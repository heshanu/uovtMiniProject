import { Component, Input, OnInit } from '@angular/core';
import { BikeInterface } from '../../model/bike_interface';
import { BikeService } from '../../service/bike.service';

@Component({
  selector: 'app-bikerenttemplate',
  templateUrl: './bikerenttemplate.component.html',
  styleUrl: './bikerenttemplate.component.css'
})
export class BikerenttemplateComponent implements OnInit{
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
