import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './compoent/homepage/homepage.component';
import { HomeComponent } from './module/home/home.component';
import { CustomerdetailComponent } from './compoent/customerdetail/customerdetail.component';
import { CustomersDashBoardComponent } from './compoent/customers-dash-board/customers-dash-board.component';
import { CustomerDashBoardComponent } from './compoent/customer-dash-board/customer-dash-board.component';
import { NotfoundComponent } from './compoent/notfound/notfound.component';
import { TravelModeComponent } from './module/hotel/travel-mode/travel-mode.component';
import { MotorbikeComponent } from './compoent/travelMode/motorbike/motorbike.component';
import { GallerentbikesComponent } from './compoent/travelMode/motorbike/gallerentbikes/gallerentbikes.component';
import { HikkarentbikesComponent } from './compoent/travelMode/motorbike/hikkarentbikes/hikkarentbikes.component';
import { MatararentbikesComponent } from './compoent/travelMode/motorbike/matararentbikes/matararentbikes.component';
import { NuwararentbikesComponent } from './compoent/travelMode/motorbike/nuwararentbikes/nuwararentbikes.component';
import { SouthenrnprovinceComponent } from './compoent/hotelsList/southenrnprovince/southenrnprovince.component';
import { WesternproinceComponent } from './compoent/hotelsList/westernproince/westernproince.component';
import { CentralprovinceComponent } from './compoent/hotelsList/centralprovince/centralprovince.component';
import { NorthWesternprovinceComponent } from './compoent/hotelsList/north-westernprovince/north-westernprovince.component';
import { SabaragamuwaprovinceComponent } from './compoent/hotelsList/sabaragamuwaprovince/sabaragamuwaprovince.component';
import { NorthprovinceComponent } from './compoent/hotelsList/northprovince/northprovince.component';
import { UvaprovinceComponent } from './compoent/hotelsList/uvaprovince/uvaprovince.component';
import { NorthCentralprovinceComponent } from './compoent/hotelsList/north-centralprovince/north-centralprovince.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

//lazy loading to home module
const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'reservation',loadChildren: () => import('./module/reservation/reservation.module').then(m => m.ReservationModule)},
  {path: 'login',loadChildren:()=>import("./module/login/login-routing.module").then(m=>m.LoginRoutingModule)},
  {path: 'register',loadChildren:()=>import("./module/register/register-routing.module").then(m=>m.RegisterRoutingModule)},
  {path: 'home',component:HomeComponent},
  {path:'customerform',component:CustomerdetailComponent},
  {path:'customersDashboard',component:CustomersDashBoardComponent},
  
  {
    path: 'customerDashboard/:id',
    component: CustomerDashBoardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./module/hotel/hotel.module').then(m => m.HotelModule)
      },
      {
        path:'travelMode',
        component:TravelModeComponent
      },
      {
        path:'travelMode/motorbike',
        component:MotorbikeComponent
      },
      {
        path:'travelMode/motorbike/gallebike',
        component:GallerentbikesComponent
      },
      {
        path:'travelMode/motorbike/hikkabike',
        component:HikkarentbikesComponent
      },
      {
        path:'travelMode/motorbike/matarabike',
        component:MatararentbikesComponent
      },
      {
        path:'travelMode/motorbike/nuwarabike',
        component:NuwararentbikesComponent
      },
      {
        //hotelslist/northwest
        path: 'hotelslist',
        loadChildren:()=>import('./module/hotelsbooking/hotelsbooking.module').then(m=>m.HotelsbookingModule)
      },
      {
        path: 'hotelslist/southern',
        component:SouthenrnprovinceComponent
      },
      {
        path: 'hotelslist/western',
        component:WesternproinceComponent
      },
      {
        path: 'hotelslist/centeral',
        component:CentralprovinceComponent
      },
      {
        path: 'hotelslist/northwest',
        component:NorthWesternprovinceComponent
      },
      {
        path: 'hotelslist/sabara',
        component:SabaragamuwaprovinceComponent
      },
      {
        path: 'hotelslist/north',
        component:NorthprovinceComponent
      },
      {
        path: 'hotelslist/eastern',
        component:NorthprovinceComponent
      },
      {
        path: 'hotelslist/uva',
        component:UvaprovinceComponent
      },
      {
        path: 'hotelslist/northcentral',
        component:NorthCentralprovinceComponent
      },
      {
        path:'foodslist',
        loadChildren:()=>import('./module/food/food.module').then(m=>m.FoodModule)
      }
    ]
  }
  ,
  {path:'orders',component:OrderdetailsComponent}
  ,
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }