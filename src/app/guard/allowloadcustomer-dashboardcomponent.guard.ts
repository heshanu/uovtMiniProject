import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CustomerObjectService } from '../service/customer-object.service';

@Injectable({
  providedIn: 'root',
})
export class AllowloadcustomerDashboardcomponentGuard implements CanActivate {
  constructor(private customerObjectService: CustomerObjectService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.customerObjectService.data$.pipe(
      map(data => {
        if (data) {
          return true;
        } else {
          return false;
        }
      }),
      catchError((err) => {
        console.error('Error in AllowloadcustomerDashboardcomponentGuard:', err);
        this.router.navigate(['/error-route']);
        return of(false);
      })
    );
  }
}
