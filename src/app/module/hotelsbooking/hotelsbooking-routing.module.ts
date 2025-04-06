import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelistComponent } from '../hotelsbooking/hotelist/hotelist.component';

const routes: Routes = [
  {path:'',component:HotelistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsbookingRoutingModule { }
