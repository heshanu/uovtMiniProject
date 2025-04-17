import { Component, OnInit } from '@angular/core';
import { BikeInterface } from '../../../../model/bike_interface';
import { VanService } from '../../../../service/van.service';

@Component({
    selector: 'app-nuwaravan',
    templateUrl: './nuwaravan.component.html',
    styleUrl: './nuwaravan.component.css',
    standalone: false
})
export class NuwaravanComponent implements OnInit{

  constructor(private vanService:VanService ){}

  ngOnInit(): void {
    this.vanList=this.vanService.getNuwaraVanList();
  }
  

    vanList:BikeInterface[]=[];

}

