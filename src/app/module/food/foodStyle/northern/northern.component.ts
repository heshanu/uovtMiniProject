import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodserviceService } from '../../../../service/foodservice.service';
import { Subscription } from 'rxjs';
import { FoodsInterface } from '../../../../model/foodrecipe.model';

@Component({
    selector: 'app-northern',
    templateUrl: './northern.component.html',
    styleUrl: './northern.component.css',
    standalone: false
})
export class NorthernComponent implements OnInit ,OnDestroy{

  ngOnInit(): void {
    this.getSouthernFoods();
  }

 northernFoodListSubscription!:Subscription;  

  northernFoodList:FoodsInterface[]=[];

  constructor(private foodService:FoodserviceService){}

  getSouthernFoods(){

    this.northernFoodListSubscription=this.foodService.getNorthernFoods().subscribe((food:any)=>{
      this. northernFoodList=food.recipes;
      //console.log(this.southernFoodList);   
    })
  }


  ngOnDestroy(): void {
    if(this. northernFoodListSubscription){
      this. northernFoodListSubscription.unsubscribe();
    }
  }

}
