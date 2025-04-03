import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { MaterialModule } from '../../shared/materialModule';
import { FoodtemplateComponent } from '../../shared/foodtemplate/foodtemplate.component';
import { FoodCategoryComponent } from './food-category/food-category.component';
import { SouthernComponent } from './foodStyle/southern/southern.component';
import { CardTemplateFoodsComponent } from '../../shared/card-template-foods/card-template-foods.component';
import { NorthernComponent } from './foodStyle/northern/northern.component';

@NgModule({
  declarations: [
    FoodlistComponent,
    FoodtemplateComponent,
    FoodCategoryComponent,
    SouthernComponent,
    CardTemplateFoodsComponent,
    NorthernComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    MaterialModule,
  ],
  exports:[
    SouthernComponent,
    CardTemplateFoodsComponent 
  ]
})
export class FoodModule { }
