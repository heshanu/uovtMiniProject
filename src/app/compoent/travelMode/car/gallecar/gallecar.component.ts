import { Component, OnInit } from '@angular/core';
import { BikeInterface } from '../../../../model/bike_interface';
import { VanService } from '../../../../service/van.service';

@Component({
    selector: 'app-gallecar',
    templateUrl: './gallecar.component.html',
    styleUrl: './gallecar.component.css',
    standalone: false
})
export class GallecarComponent implements OnInit{

  constructor(private vanService:VanService ){}
  vanList:BikeInterface[]=[];
    
    ngOnInit(): void {
      this.vanList=this.vanService.getGalleVanList();
      console.log(this.vanList);
      
    }
    
    

}
