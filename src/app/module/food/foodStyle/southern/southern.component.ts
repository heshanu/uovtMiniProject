import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodserviceService } from '../../../../service/foodservice.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FoodsInterface } from '../../../../model/foodrecipe.model';
import { SpinnerService } from '../../../../service/spinner.service';

@Component({
    selector: 'app-southern',
    templateUrl: './southern.component.html',
    styleUrl: './southern.component.css',
    standalone: false
})
export class SouthernComponent implements OnInit ,OnDestroy{

  ngOnInit(): void {
    this.getSouthernFoods();
  }
  
  constructor(private foodService:FoodserviceService,public spinner:SpinnerService){}

  getSouthernFoods(){
    this.spinner.showLoading();
    this.southernFoodListSubscription=this.foodService.getSouthernFoods().subscribe((food:any)=>{
      this.southernFoodList=food.recipes;
      this.spinner.hideLoading();
      //console.log(this.southernFoodList);   
    })
    this.spinner.hideLoading();
   
  }

  southernFoodListSubscription!:Subscription;

  southernFoodList:FoodsInterface[]=[];

  ngOnDestroy(): void {
    if(this.southernFoodListSubscription){
      this.southernFoodListSubscription.unsubscribe();
    }
  }

}
