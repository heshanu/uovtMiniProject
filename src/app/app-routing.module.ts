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
import { NorthernComponent } from './module/food/foodStyle/northern/northern.component';
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
import { NunwaratuktukComponent } from './compoent/travelMode/tuktuk/nunwaratuktuk/nunwaratuktuk.component';
import { MataratuktukComponent } from './compoent/travelMode/tuktuk/mataratuktuk/mataratuktuk.component';
import { TrainComponent } from './compoent/travelMode/train/train.component';

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
        path:'travelMode/bicycle',
        component:BicycleComponent
      },
      {
        path:'travelMode/bicycle/gallebicycle',
        component:GallebicycleComponent
      },
      {
        path:'travelMode/bicycle/hikkabicycle',
        component:HikabicycleComponent
      },
      {
        path:'travelMode/bicycle/matarabicycle',
        component:MatarabicycleComponent
      },
      {
        path:'travelMode/bicycle/nuwarabicycle',
        component:NuwarabicycleComponent
      },
      {
        path:'travelMode/car',
        component:CarComponent
      },
      {
        path:'travelMode/car/gallecar',
        component:GallecarComponent
      },
      {
        path:'travelMode/car/hikkacar',
        component:HikkacarComponent
      },
      {
        path:'travelMode/car/mataracar',
        component:MataracarComponent
      },
      {
        path:'travelMode/car/nuwaracar',
        component:NuwaracarComponent
      },
      {
        path:'travelMode/van',
        component:VanComponent
      },
      {
        path:'travelMode/van/gallevan',
        component:GallevanComponent
      },
      {
        path:'travelMode/van/hikkavan',
        component:HikkavanComponent
      },
      {
        path:'travelMode/van/matataravan',
        component:MataravanComponent
      },
      {
        path:'travelMode/van/nuwaravan',
        component:NuwaravanComponent
      },
      {
        path:'travelMode/tuktuk',
        component:TuktukComponent
      },
      {
        path:'travelMode/tuktuk/galleTuktuk',
        component:GalletuktukComponent
      },
      {
        path:'travelMode/tuktuk/hikkaTuktuk',
        component:HikkatuktukComponent
      },
      {
        path:'travelMode/tuktuk/mataraTuktuk',
        component:MataratuktukComponent
      },
      {
        path:'travelMode/tuktuk/nuwaraTuktuk',
        component:NunwaratuktukComponent
      },
      {
        path:'travelMode/train',
        component:TrainComponent
      },
      {
        path:"beverage",
        loadChildren:()=>import('./module/beverage/beverage.module').then(m=>m.BeverageModule)
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
      },
      {
        path:'foodslist/southern',
        loadChildren:()=>import('./module/food/food.module').then(m=>m.FoodModule)
      },
      {
        path:"foodslist/northern",
        loadChildren:()=>import('./module/food/food.module').then(m=>m.FoodModule)
      },
      {
           path:"foodslist/chineese",
           loadChildren:()=>import('./module/food/food.module').then(m=>m.FoodModule)
      },
      {
        path:"foodslist/japanees",
        loadChildren:()=>import('./module/food/food.module').then(m=>m.FoodModule)
   },
   {
    path:"foodslist/traditional",
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