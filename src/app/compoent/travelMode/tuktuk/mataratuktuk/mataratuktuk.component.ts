import { Component, OnInit } from '@angular/core';
import { TuktukService } from '../../../../service/tuktuk.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-mataratuktuk',
    templateUrl: './mataratuktuk.component.html',
    styleUrl: './mataratuktuk.component.css',
    standalone: false
})
export class MataratuktukComponent implements OnInit{

  constructor(private tukService:TuktukService ){}

  ngOnInit(): void {
    this.tukList=this.tukService.getMataraTukTukList();
  }
  

    tukList:BikeInterface[]=[];


}

