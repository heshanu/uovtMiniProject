import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { MaterialModule } from '../../shared/materialModule';
import { FoodtemplateComponent } from '../../shared/foodtemplate/foodtemplate.component';

@NgModule({
  declarations: [
    FoodlistComponent,
    FoodtemplateComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    MaterialModule,
  ]
})
export class FoodModule { }
