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
import { CaroselComponent } from './shared/carosel/carosel.component';
import { SubsriberPosterComponent } from './shared/subsriber-poster/subsriber-poster.component';
import { FooterComponent } from './compoent/footer/footer.component';
import { HeaderComponent } from './compoent/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent,
    HomepageComponent,
    HomepageComponent,
    MapSriLankaComponent,
    CardPosterComponent,
    BookatripPosterComponent,
    CaroselComponent,
    SubsriberPosterComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReservationModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
