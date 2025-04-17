import { Component, OnInit } from '@angular/core';
import { BikeInterface } from '../../../../model/bike_interface';
import { VanService } from '../../../../service/van.service';

@Component({
    selector: 'app-mataravan',
    templateUrl: './mataravan.component.html',
    styleUrl: './mataravan.component.css',
    standalone: false
})
export class MataravanComponent implements OnInit{

  constructor(private vanService:VanService ){}

  ngOnInit(): void {
    this.vanList=this.vanService.getMataraVanList();
  }
  

    vanList:BikeInterface[]=[];

}
