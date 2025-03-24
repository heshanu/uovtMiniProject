import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotellistComponent } from './hotellist/hotellist.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { MaterialModule } from '../../shared/materialModule';


@NgModule({
  declarations: [
    HotellistComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MaterialModule
    ],
  exports:[
  ]
})
export class HotelModule { }
