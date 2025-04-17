import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodsInterface } from '../../../../model/foodrecipe.model';
import { FoodserviceService } from '../../../../service/foodservice.service';

@Component({
    selector: 'app-japaneese',
    templateUrl: './japaneese.component.html',
    styleUrl: './japaneese.component.css',
    standalone: false
})
export class JapaneeseComponent implements OnInit ,OnDestroy{

     ngOnInit(): void {
        this.getJapaneeseFoods();
      }
    
     japaneeseFoodListSubscription!:Subscription;  
    
     japaneeseFoodList:FoodsInterface[]=[];
    
      constructor(private foodService:FoodserviceService){}
    
      getJapaneeseFoods(){
    
        this.japaneeseFoodListSubscription=this.foodService.getJapaneeseFoods().subscribe((food:any)=>{
          this.japaneeseFoodList=food.recipes;
          //console.log(this.southernFoodList);   
        })
      }
    
    
      ngOnDestroy(): void {
        if(this.japaneeseFoodListSubscription){
          this. japaneeseFoodListSubscription.unsubscribe();
        }
      }

}
