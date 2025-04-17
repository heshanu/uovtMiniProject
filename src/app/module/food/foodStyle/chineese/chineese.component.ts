import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodsInterface } from '../../../../model/foodrecipe.model';
import { FoodserviceService } from '../../../../service/foodservice.service';

@Component({
    selector: 'app-chineese',
    templateUrl: './chineese.component.html',
    styleUrl: './chineese.component.css',
    standalone: false
})
export class ChineeseComponent implements OnInit ,OnDestroy{

    ngOnInit(): void {
      this.getSouthernFoods();
    }
  
   chineeseFoodListSubscription!:Subscription;  
  
   chineeseFoodList:FoodsInterface[]=[];
  
    constructor(private foodService:FoodserviceService){}
  
    getSouthernFoods(){
  
      this. chineeseFoodListSubscription=this.foodService.getChineeseFoods().subscribe((food:any)=>{
        this.  chineeseFoodList=food.recipes;
        //console.log(this.southernFoodList);   
      })
    }
  
  
    ngOnDestroy(): void {
      if(this.  chineeseFoodListSubscription){
        this. chineeseFoodListSubscription.unsubscribe();
      }
    }
  

}
