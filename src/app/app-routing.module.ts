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
        path: 'hotellist',
        loadChildren: () => import('./module/hotel/hotel.module').then(m => m.HotelModule)
      },
      {
        path:'travelMode',
        component:TravelModeComponent
      },
      {
        path:'travelMode/motorbike',
        component:MotorbikeComponent
      }
    ]
  },
  
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
