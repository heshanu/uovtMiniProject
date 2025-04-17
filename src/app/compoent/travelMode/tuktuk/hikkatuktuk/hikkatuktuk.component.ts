import { Component, OnInit } from '@angular/core';
import { BikeInterface } from '../../../../model/bike_interface';
import { TuktukService } from '../../../../service/tuktuk.service';

@Component({
    selector: 'app-hikkatuktuk',
    templateUrl: './hikkatuktuk.component.html',
    styleUrl: './hikkatuktuk.component.css',
    standalone: false
})
export class HikkatuktukComponent implements OnInit{

  constructor(private tukService:TuktukService ){}

  ngOnInit(): void {
    this.tukList=this.tukService.getHikkaTukTukList();
  }
  

    tukList:BikeInterface[]=[];


}
