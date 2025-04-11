import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragelistComponent } from './beveragelist/beveragelist.component';

const routes: Routes = [
  {path:'',component:BeveragelistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeverageRoutingModule { }
