import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodserviceService } from '../../../service/foodservice.service';
import { FoodsInterface } from '../../../model/foodrecipe.model';
import { catchError, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-foodslist',
  templateUrl: './foodslist.component.html',
  styleUrl: './foodslist.component.css'
})
export class FoodslistComponent implements OnInit,OnDestroy{

  foodList:FoodsInterface[]=[];

  foodList$!:Observable<FoodsInterface[]>;

  foodSubscription!:Subscription;

  errorMessage!:string;

  constructor(private foodService:FoodserviceService){}

  ngOnDestroy(): void {
    this.foodSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods():void{
    this.foodSubscription= this.foodService
    .getRecipes().subscribe({
        next: (recipes: FoodsInterface[]) => {
          this.foodList = recipes;
        },
        error: (err) => {
          this.errorMessage = 'Failed to load recipes';
        }
  })

  }}
