import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { FoodserviceService, FoodTypeIterface } from '../../../service/foodservice.service';
import { BeverageService } from '../../../service/beverage.service';
import { finalize, Subscription } from 'rxjs';
import { SpinnerService } from '../../../service/spinner.service';

@Component({
  selector: 'app-beveragelist',
  templateUrl: './beveragelist.component.html',
  styleUrls: ['./beveragelist.component.css']
})
export class BeveragelistComponent implements OnInit, OnDestroy {
  recipeTypeList:any[] = [];
  error!: Error;
  beverageSubscription!: Subscription;
  errorMessage!: string;

  isLoading$ = this.spinnerService.loading$;

  constructor(
    private beverageService: BeverageService,
    private spinnerService: SpinnerService,
    private cdr: ChangeDetectorRef
  ) {}

  loadData() {
    this.spinnerService.showLoading();
    this.beverageSubscription = this.beverageService.getAllBeverages().pipe(
      finalize(() => {
        this.spinnerService.hideLoading();
        this.cdr.detectChanges();
      })
    ).subscribe({
      next: (data: any) => {
     this.recipeTypeList = data.drinks;

      },
      error: (err) => {
        this.error = err;
        this.errorMessage = err.message || 'An error occurred while fetching beverages.';
        console.error('Error fetching beverages:', err);
      }
    });
  }
  

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    if (this.beverageSubscription) {
      this.beverageSubscription.unsubscribe();
    }
  }
}
