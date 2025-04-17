import { Component, OnInit } from '@angular/core';
import { TuktukService } from '../../../../service/tuktuk.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-galletuktuk',
    templateUrl: './galletuktuk.component.html',
    styleUrl: './galletuktuk.component.css',
    standalone: false
})
export class GalletuktukComponent implements OnInit{

  constructor(private tukService:TuktukService ){}

  ngOnInit(): void {
    this.tukList=this.tukService.getGalleTukTukList();
  }
  

    tukList:BikeInterface[]=[];



}
