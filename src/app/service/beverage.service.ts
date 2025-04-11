import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  private beverageLink="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

  constructor(private http:HttpClient) { }

  getAllBeverages():Observable<any[]>{
      return this.http.get<any[]>(this.beverageLink);
  }
  
}