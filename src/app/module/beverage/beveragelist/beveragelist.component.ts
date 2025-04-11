import { Component, OnInit } from '@angular/core';
import { FoodserviceService, FoodTypeIterface } from '../../../service/foodservice.service';

@Component({
  selector: 'app-beveragelist',
  templateUrl: './beveragelist.component.html',
  styleUrl: './beveragelist.component.css'
})
export class BeveragelistComponent implements OnInit{

  recipeTypeList:FoodTypeIterface[]=[];
  errorMessage!: string;

  constructor(private foodserviceService: FoodserviceService) {}
 
  ngOnInit(): void {
    this.recipeTypeList=this.foodserviceService.getFoodTypes();
  }

}
