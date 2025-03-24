import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotellistComponent } from './hotellist/hotellist.component';

const routes: Routes = [
  {path:'',component:HotellistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
