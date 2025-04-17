import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodserviceService, FoodTypeIterface } from '../../../service/foodservice.service';
import { FoodsInterface } from '../../../model/foodrecipe.model';
import { catchError, Observable, of, Subscription, tap } from 'rxjs';

@Component({
    selector: 'app-foodlist',
    templateUrl: './foodlist.component.html',
    styleUrl: './foodlist.component.css',
    standalone: false
})
export class FoodlistComponent implements OnInit{

  //recipes$!: Observable<any[]>;
  recipeTypeList:FoodTypeIterface[]=[];
  errorMessage!: string;

  constructor(private foodserviceService: FoodserviceService) {}
 

  ngOnInit(): void {
    this.recipeTypeList=this.foodserviceService.getFoodTypes();
  }
}

