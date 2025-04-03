import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { SouthernComponent } from './foodStyle/southern/southern.component';
import { NorthernComponent } from './foodStyle/northern/northern.component';

const routes: Routes = [
  {path:'',component:FoodlistComponent},
  {path:'southern',component:SouthernComponent},
  {path:'northern',component:NorthernComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
