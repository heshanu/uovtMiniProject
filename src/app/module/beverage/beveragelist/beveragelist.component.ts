import { Component, OnInit } from '@angular/core';
import { FoodserviceService, FoodTypeIterface } from '../../../service/foodservice.service';
import { BeverageService } from '../../../service/beverage.service';
import { Observable, Subscription } from 'rxjs';
import { SpinnerService } from '../../../service/spinner.service';

@Component({
  selector: 'app-beveragelist',
  templateUrl: './beveragelist.component.html',
  styleUrl: './beveragelist.component.css'
})
export class BeveragelistComponent implements OnInit{

  recipeTypeList:FoodTypeIterface[]=[];
  error!:Error

  isLoading = this.spinnerService.loading$;

  beverageSubscription!:Subscription;
  beverage$!:Observable<any>|undefined;

  errorMessage!: string;

  constructor(private beverageService:BeverageService,
    private spinnerService:SpinnerService) {}
 
  ngOnInit(): void {
    this.spinnerService.showLoading();
    this.beverageSubscription = this.beverageService.getAllBeverages().subscribe({
     
      next: (data:any) => {
        this.recipeTypeList=data.drinks;
        console.log('Beverages data:', data.drinks);
        this.spinnerService.hideLoading;
      },
      error: (err) => {
        this.error=err
        this.spinnerService.hideLoading();
      },
      complete: () => {
        console.log("beverage fetched sucessfully");
        this.spinnerService.hideLoading();
      }
    });

  }

}

