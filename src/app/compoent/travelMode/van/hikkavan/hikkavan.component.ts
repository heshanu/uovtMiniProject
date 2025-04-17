import { Component, OnInit } from '@angular/core';
import { BikeInterface } from '../../../../model/bike_interface';
import { VanService } from '../../../../service/van.service';

@Component({
    selector: 'app-hikkavan',
    templateUrl: './hikkavan.component.html',
    styleUrl: './hikkavan.component.css',
    standalone: false
})
export class HikkavanComponent  implements OnInit{

  constructor(private vanService:VanService ){}

  ngOnInit(): void {
    this.vanList=this.vanService.getHikkaVanList();
  }
  

    vanList:BikeInterface[]=[];


}
