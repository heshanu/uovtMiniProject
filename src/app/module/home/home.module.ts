import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CaroselComponent } from '../../shared/carosel/carosel.component';

@NgModule({
  declarations: [
    HomeComponent,
    CaroselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],exports:[
    CaroselComponent
  ]
})
export class HomeModule { }
