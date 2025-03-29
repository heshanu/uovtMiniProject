import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotellistComponent } from './hotellist/hotellist.component';
import { TravelModeComponent } from './travel-mode/travel-mode.component';
import { MotorbikeComponent } from '../../compoent/travelMode/motorbike/motorbike.component';

const routes: Routes = [
  {path:'',component:HotellistComponent},
  {path:'travelMode',component:TravelModeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
