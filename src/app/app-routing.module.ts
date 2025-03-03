import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './compoent/homepage/homepage.component';

//lazy loading to home module
const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'reservation',loadChildren: () => import('./module/reservation/reservation.module').then(m => m.ReservationModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
