import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { FoodsInterface } from '../model/foodrecipe.model';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService{

  private recipeLink=environment.recipesLink;
 
  constructor(private http:HttpClient) {}

  getRecipes():Observable<FoodsInterface[]>{
    return this.http.get<FoodsInterface[]>(this.recipeLink);
  }


}
