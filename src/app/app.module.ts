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
import { SearchImagePosterComponent } from './compoent/search-image-poster/search-image-poster.component';
import { CustomersDashBoardComponent } from './compoent/customers-dash-board/customers-dash-board.component';
import { CustomerDashBoardComponent } from './compoent/customer-dash-board/customer-dash-board.component';
import { NotfoundComponent } from './compoent/notfound/notfound.component';
import { HotellistComponent } from './module/hotel/hotellist/hotellist.component';
import { HotelModule } from './module/hotel/hotel.module';
import { RecommendationComponent } from './shared/recommendation/recommendation.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
import { NorthCentralprovinceComponent } from './compoent/hotelsList/north-centralprovince/north-centralprovince.component';
import { appReducers } from './app.reducer';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { FoodModule } from './module/food/food.module';
import { BicycleComponent } from './compoent/travelMode/bicycle/bicycle.component';
import { GallebicycleComponent } from './compoent/travelMode/bicycle/gallebicycle/gallebicycle.component';
import { HikabicycleComponent } from './compoent/travelMode/bicycle/hikabicycle/hikabicycle.component';
import { MatarabicycleComponent } from './compoent/travelMode/bicycle/matarabicycle/matarabicycle.component';
import { NuwarabicycleComponent } from './compoent/travelMode/bicycle/nuwarabicycle/nuwarabicycle.component';
import { CarComponent } from './compoent/travelMode/car/car.component';
import { GallecarComponent } from './compoent/travelMode/car/gallecar/gallecar.component';
import { HikkacarComponent } from './compoent/travelMode/car/hikkacar/hikkacar.component';
import { MataracarComponent } from './compoent/travelMode/car/mataracar/mataracar.component';
import { NuwaracarComponent } from './compoent/travelMode/car/nuwaracar/nuwaracar.component';
import { VanComponent } from './compoent/travelMode/van/van.component';
import { GallevanComponent } from './compoent/travelMode/van/gallevan/gallevan.component';
import { HikkavanComponent } from './compoent/travelMode/van/hikkavan/hikkavan.component';
import { MataravanComponent } from './compoent/travelMode/van/mataravan/mataravan.component';
import { NuwaravanComponent } from './compoent/travelMode/van/nuwaravan/nuwaravan.component';
import { TuktukComponent } from './compoent/travelMode/tuktuk/tuktuk.component';
import { GalletuktukComponent } from './compoent/travelMode/tuktuk/galletuktuk/galletuktuk.component';
import { HikkatuktukComponent } from './compoent/travelMode/tuktuk/hikkatuktuk/hikkatuktuk.component';
import { MataratuktukComponent } from './compoent/travelMode/tuktuk/mataratuktuk/mataratuktuk.component';
import { NunwaratuktukComponent } from './compoent/travelMode/tuktuk/nunwaratuktuk/nunwaratuktuk.component';
import { TrainComponent } from './compoent/travelMode/train/train.component';
import { DialogTrainComponent } from './shared/dialog-train/dialog-train.component';
import { DialogTrainconfirmComponent } from './shared/dialog-trainconfirm/dialog-trainconfirm.component';
import { BeveragelistComponent } from './module/beverage/beveragelist/beveragelist.component';
import { BeverageModule } from './module/beverage/beverage.module';
import { BeveragetemplateComponent } from './shared/beveragetemplate/beveragetemplate.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { BeverageconfirmComponent } from './shared/beverageconfirm/beverageconfirm.component';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import { SearchComponent } from './shared/search/search.component';
import { SearchresultComponent } from './shared/searchresult/searchresult.component';
import { CommonModule } from '@angular/common';

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
        NorthCentralprovinceComponent,
        OrderdetailsComponent,
        BicycleComponent,
        GallebicycleComponent,
        HikabicycleComponent,
        MatarabicycleComponent,
        NuwarabicycleComponent,
        CarComponent,
        GallecarComponent,
        HikkacarComponent,
        MataracarComponent,
        NuwaracarComponent,
        VanComponent,
        GallevanComponent,
        HikkavanComponent,
        MataravanComponent,
        NuwaravanComponent,
        TuktukComponent,
        GalletuktukComponent,
        HikkatuktukComponent,
        MataratuktukComponent,
        NunwaratuktukComponent,
        TrainComponent,
        DialogTrainComponent,
        DialogTrainconfirmComponent,
        BeveragelistComponent,
        BeveragetemplateComponent,
        SpinnerComponent,
        BeverageconfirmComponent,
        ConfirmationModalComponent,
        SearchComponent,
        SearchresultComponent,
    ],
    exports: [],
    bootstrap: [AppComponent],
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
        HotelModule,
        CommonModule,
        StoreModule.forRoot(appReducers),
        //toreModule.forRoot({ customer: customerReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        }),
        HotelsbookingModule,
        FoodModule,
        BeverageModule], providers: [
        provideClientHydration()
    ] })
export class AppModule { }
