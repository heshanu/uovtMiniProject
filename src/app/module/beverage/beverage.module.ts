import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeverageRoutingModule } from './beverage-routing.module';
import { MaterialModule } from '../../shared/materialModule';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BeverageRoutingModule,
    MaterialModule
  ]
})
export class BeverageModule { }
