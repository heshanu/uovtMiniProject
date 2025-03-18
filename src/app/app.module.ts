import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './module/home/home.module';
import { ReservationModule } from './module/reservation/reservation.module';
import { PosterComponent } from './shared/poster/poster.component';
import { HomepageComponent } from './compoent/homepage/homepage.component';
import { MapSriLankaComponent } from './compoent/map-sri-lanka/map-sri-lanka.component';
import { CardPosterComponent } from './shared/card-poster/card-poster.component';
import { BookatripPosterComponent } from './compoent/bookatrip-poster/bookatrip-poster.component';
import { SubsriberPosterComponent } from './shared/subsriber-poster/subsriber-poster.component';
import { FooterComponent } from './compoent/footer/footer.component';
import { HeaderComponent } from './compoent/header/header.component';
import { LoginModule } from './module/login/login.module';
import { RegisterModule } from './module/register/register.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerdetailComponent } from './compoent/customerdetail/customerdetail.component';
import { CalenderComponent } from './shared/calender/calender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/materialModule';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchImagePosterComponent } from './compoent/search-image-poster/search-image-poster.component';
import { CustomersDashBoardComponent } from './compoent/customers-dash-board/customers-dash-board.component';
import { CustomerDashBoardComponent } from './compoent/customer-dash-board/customer-dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent,
    HomepageComponent,
    HomepageComponent,
    MapSriLankaComponent,
    CardPosterComponent,
    BookatripPosterComponent,
    SubsriberPosterComponent,
    FooterComponent,
    HeaderComponent,
    CustomerdetailComponent,
    CalenderComponent,
    SearchImagePosterComponent,
    CustomersDashBoardComponent,
    CustomerDashBoardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    ReservationModule,
    LoginModule,
    RegisterModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    CommonModule

  ],
  exports:[
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
