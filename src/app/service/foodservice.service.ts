import { Injectable, OnInit } from '@angular/core';
//import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { FoodsInterface } from '../model/foodrecipe.model';

export interface FoodTypeIterface{
  id:string;
  foodName:string  ;
}

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService{

  private recipeLink='https://dummyjson.com/recipes?limit=10&select=name,image,ingredients';
 
  constructor(private http:HttpClient) {}

  getRecipes():Observable<any[]>{
    return this.http.get<any[]>(this.recipeLink);
  }

  foodTypes:FoodTypeIterface[]=[
    {id:"1",foodName:"Southern"},
    {id:"2",foodName:"Northern"},
    {id:"3",foodName:"Chineese"},
    {id:"4",foodName:"Japanees"},

  ]

  getFoodTypes():FoodTypeIterface[]{
    return this.foodTypes;
  }


}
