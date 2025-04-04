import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { SouthernComponent } from './foodStyle/southern/southern.component';
import { NorthernComponent } from './foodStyle/northern/northern.component';
import { ChineeseComponent } from './foodStyle/chineese/chineese.component';
import { JapaneeseComponent } from './foodStyle/japaneese/japaneese.component';
import { TraditionalComponent } from './foodStyle/traditional/traditional.component';

const routes: Routes = [
  {path:'',component:FoodlistComponent},
  {path:'southern',component:SouthernComponent},
  {path:'northern',component:NorthernComponent},
  {path:'chineese',component:ChineeseComponent},
  {path:'japanees',component:JapaneeseComponent},
  {path:'traditional',component:TraditionalComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
