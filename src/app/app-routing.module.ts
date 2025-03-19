import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './compoent/homepage/homepage.component';
import { HomeComponent } from './module/home/home.component';
import { CustomerdetailComponent } from './compoent/customerdetail/customerdetail.component';
import { CustomersDashBoardComponent } from './compoent/customers-dash-board/customers-dash-board.component';
import { CustomerDashBoardComponent } from './compoent/customer-dash-board/customer-dash-board.component';
import { AllowloadcustomerDashboardcomponentGuard } from './guard/allowloadcustomer-dashboardcomponent.guard';

//lazy loading to home module
const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'reservation',loadChildren: () => import('./module/reservation/reservation.module').then(m => m.ReservationModule)},
  {path: 'login',loadChildren:()=>import("./module/login/login-routing.module").then(m=>m.LoginRoutingModule)},
  {path: 'register',loadChildren:()=>import("./module/register/register-routing.module").then(m=>m.RegisterRoutingModule)},
  {path: 'home',component:HomeComponent},
  {path:'customersDetails',component:CustomerdetailComponent},
  {path:'customersDashboard',component:CustomersDashBoardComponent},
  {path:'customerDashboard/:id', component: CustomerDashBoardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
