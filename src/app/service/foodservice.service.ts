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
    {id:"1",foodName:"southern"},
    {id:"2",foodName:"northern"},
    {id:"3",foodName:"chineese"},
    {id:"4",foodName:"japanees"},
    {id:"5",foodName:"traditional"}
  ]

  getFoodTypes():FoodTypeIterface[]{
    return this.foodTypes;
  }

  getSouthernFoods():Observable<any[]>{
    return this.http.get<any[]>(this.recipeLink+"&search?q=Indian")
  }

  //''
  getNorthernFoods():Observable<any[]>{
    return this.http.get<any[]>("https://dummyjson.com/recipes/tag/Pakistani?limit=10&select=name,image,ingredients")
  }

  getChineeseFoods():Observable<any[]>{
    return this.http.get<any[]>("https://dummyjson.com/recipes/tag/Pakistani?limit=10&select=name,image,ingredients")
  }

  getJapaneeseFoods():Observable<any[]>{
    return this.http.get<any[]>("https://dummyjson.com/recipes/tag/Pakistani?limit=10&select=name,image,ingredients")
  }

  getTraditionalFoods():Observable<any[]>{
    return this.http.get<any[]>("https://dummyjson.com/recipes/tag/Pakistani?limit=10&select=name,image,ingredients")
  }


}
