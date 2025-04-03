import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodserviceService } from '../../../service/foodservice.service';
import { FoodsInterface } from '../../../model/foodrecipe.model';
import { catchError, Observable, of, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrl: './foodlist.component.css'
})
export class FoodlistComponent implements OnInit{

  recipes$!: Observable<any[]>;
  recipeList:FoodsInterface[]=[];
  errorMessage!: string;

  constructor(private foodserviceService: FoodserviceService) {}
 

  ngOnInit(): void {
    this.foodserviceService.getRecipes().subscribe((response:any)=>{
      this.recipeList=response.recipes;
    })

  }
}

