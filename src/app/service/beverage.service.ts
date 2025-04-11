import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  private beverageLink="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

  constructor(private http:HttpClient,private spinnerService:SpinnerService) { }
 
  getAllBeverages(): Observable<any[]> {
    this.spinnerService.showLoading();
    return this.http.get<any[]>(this.beverageLink).pipe(
      tap({
        next: () => {},
        error: () => this.spinnerService.hideLoading(),
        complete: () => this.spinnerService.hideLoading()
      })
    );
  }
}
  