import { Injectable, OnInit } from '@angular/core';
//import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { FoodsInterface } from '../model/foodrecipe.model';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService{

  private recipeLink='https://dummyjson.com/recipes?limit=10&skip=10&select=name,image,description';
 
  constructor(private http:HttpClient) {}

  getRecipes():Observable<FoodsInterface[]>{
    return this.http.get<FoodsInterface[]>(this.recipeLink);
  }


}
