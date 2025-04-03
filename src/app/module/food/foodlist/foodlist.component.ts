import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodserviceService, FoodTypeIterface } from '../../../service/foodservice.service';
import { FoodsInterface } from '../../../model/foodrecipe.model';
import { catchError, Observable, of, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrl: './foodlist.component.css'
})
export class FoodlistComponent implements OnInit{

  //recipes$!: Observable<any[]>;
  recipeTypeList:FoodTypeIterface[]=[];
  errorMessage!: string;

  constructor(private foodserviceService: FoodserviceService) {}
 

  ngOnInit(): void {
    // this.foodserviceService.getFoodTypes.subscribe((response:any)=>{
    //   this.recipeList=response.recipes;
    // })

    this.recipeTypeList=this.foodserviceService.getFoodTypes();

    console.log(this.recipeTypeList);
    
  }
}

