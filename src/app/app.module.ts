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
import { NotfoundComponent } from './compoent/notfound/notfound.component';
import { HotellistComponent } from './module/hotel/hotellist/hotellist.component';
import { HotelModule } from './module/hotel/hotel.module';
import { RecommendationComponent } from './shared/recommendation/recommendation.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';
import { MotorbikeComponent } from './compoent/travelMode/motorbike/motorbike.component';
import { GallerentbikesComponent } from './compoent/travelMode/motorbike/gallerentbikes/gallerentbikes.component';
import { HikkarentbikesComponent } from './compoent/travelMode/motorbike/hikkarentbikes/hikkarentbikes.component';
import { MatararentbikesComponent } from './compoent/travelMode/motorbike/matararentbikes/matararentbikes.component';
import { NuwararentbikesComponent } from './compoent/travelMode/motorbike/nuwararentbikes/nuwararentbikes.component';
import { VehicletemplateComponent } from './shared/vehicletemplate/vehicletemplate.component';
import { HotelsbookingModule } from './module/hotelsbooking/hotelsbooking.module';
import { HotelistComponent } from './module/hotelsbooking/hotelist/hotelist.component';
import { HoteltemplateComponent } from './shared/hoteltemplate/hoteltemplate.component';
import { AccordintemplateComponent } from './shared/accordintemplate/accordintemplate.component';
import { ProvinceComponent } from './compoent/hotelsList/province/province.component';
import { SouthenrnprovinceComponent } from './compoent/hotelsList/southenrnprovince/southenrnprovince.component';
import { DialogCompoentComponent } from './shared/dialog-hotel/dialog-compoent.component';
import { CardtemplateComponent } from './shared/cardtemplate/cardtemplate.component';
import { DialogHotelconfirmComponent } from './shared/dialog-hotelconfirm/dialog-hotelconfirm.component';
import { WesternproinceComponent } from './compoent/hotelsList/westernproince/westernproince.component';
import { CentralprovinceComponent } from './compoent/hotelsList/centralprovince/centralprovince.component';
import { NorthWesternprovinceComponent } from './compoent/hotelsList/north-westernprovince/north-westernprovince.component';
import { SabaragamuwaprovinceComponent } from './compoent/hotelsList/sabaragamuwaprovince/sabaragamuwaprovince.component';
import { NorthprovinceComponent } from './compoent/hotelsList/northprovince/northprovince.component';
import { EasternprovinceComponent } from './compoent/hotelsList/easternprovince/easternprovince.component';
import { UvaprovinceComponent } from './compoent/hotelsList/uvaprovince/uvaprovince.component';

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
    CustomerDashBoardComponent,
    CustomersDashBoardComponent,
    NotfoundComponent,
    RecommendationComponent,
    MotorbikeComponent,
    GallerentbikesComponent,
    HikkarentbikesComponent,
    MatararentbikesComponent,
    NuwararentbikesComponent,
    VehicletemplateComponent,
    HotelistComponent,
    HoteltemplateComponent,
    AccordintemplateComponent,
    ProvinceComponent,
    SouthenrnprovinceComponent,
    DialogCompoentComponent,
    CardtemplateComponent,
    DialogHotelconfirmComponent,
    WesternproinceComponent,
    CentralprovinceComponent,
    NorthWesternprovinceComponent,
    SabaragamuwaprovinceComponent,
    NorthprovinceComponent,
    EasternprovinceComponent,
    UvaprovinceComponent,

 
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
    HotelModule,
    CommonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    HotelsbookingModule


  ],
  exports:[
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
