import { Component, OnInit } from '@angular/core';
import { VanService } from '../../../../service/van.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-gallevan',
    templateUrl: './gallevan.component.html',
    styleUrl: './gallevan.component.css',
    standalone: false
})
export class GallevanComponent implements OnInit{

  constructor(private vanService:VanService ){}

  ngOnInit(): void {
    this.vanList=this.vanService.getGalleVanList();
  }
  

    vanList:BikeInterface[]=[];

}