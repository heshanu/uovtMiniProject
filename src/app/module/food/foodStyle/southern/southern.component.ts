import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodserviceService } from '../../../../service/foodservice.service';
import { Subscription } from 'rxjs';
import { FoodsInterface } from '../../../../model/foodrecipe.model';

@Component({
  selector: 'app-southern',
  templateUrl: './southern.component.html',
  styleUrl: './southern.component.css'
})
export class SouthernComponent implements OnInit ,OnDestroy{

  ngOnInit(): void {
    this.getSouthernFoods();
  }
  
  constructor(private foodService:FoodserviceService){}

  

  getSouthernFoods(){
    this.southernFoodListSubscription=this.foodService.getSouthernFoods().subscribe((food:any)=>{
      this.southernFoodList=food.recipes;
      console.log(this.southernFoodList);   
    })
  }

  southernFoodListSubscription!:Subscription;

  southernFoodList:FoodsInterface[]=[];

  ngOnDestroy(): void {
    if(this.southernFoodListSubscription){
      this.southernFoodListSubscription.unsubscribe();
    }
  }

}
