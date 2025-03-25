import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotellistComponent } from './hotellist/hotellist.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { MaterialModule } from '../../shared/materialModule';
import { TravelModeComponent } from './travel-mode/travel-mode.component';

@NgModule({
  declarations: [
    HotellistComponent,
    TravelModeComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MaterialModule,
  
    ],
  exports:[
  ]
})
export class HotelModule { }
