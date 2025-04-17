import { Component, OnInit } from '@angular/core';
import { TuktukService } from '../../../../service/tuktuk.service';
import { BikeInterface } from '../../../../model/bike_interface';

@Component({
    selector: 'app-nunwaratuktuk',
    templateUrl: './nunwaratuktuk.component.html',
    styleUrl: './nunwaratuktuk.component.css',
    standalone: false
})
export class NunwaratuktukComponent  implements OnInit{

  constructor(private tukService:TuktukService ){}

  ngOnInit(): void {
    this.tukList=this.tukService.getNuwaraTukTukist();
  }
  

    tukList:BikeInterface[]=[];


}

