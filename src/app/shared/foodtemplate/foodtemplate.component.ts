import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FoodsInterface } from '../../model/foodrecipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Observable, Subscription } from 'rxjs';
import { selectCustomerId } from '../../store/customers/customer.selectors';
import { FoodTypeIterface } from '../../service/foodservice.service';

@Component({
  selector: 'app-foodtemplate',
  templateUrl: './foodtemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './foodtemplate.component.css'
})
export class FoodtemplateComponent implements OnInit{

  customerId$!: Observable<string|undefined>;
  customerId:string|undefined;
  id:any;
  customerIdSubscription!:Subscription;

  constructor(private router:Router,private activatedRoute: ActivatedRoute, 
    private store: Store<AppState>){
       this.customerId$ = this.store.select(selectCustomerId);
    }

  @Input() list:any[] = [];
  foodList:any[] = [];

  expandedIndex = 0;
  
  ngOnInit(): void {
    this.foodList = this.list;
    console.log(this.list);
    
  }

  // Implement the navigateTo method if needed
  navigateTo(foodName:string) {
    console.log("Food-template",foodName);
      this.router.navigate(["customerDashboard/",this.id,"foodslist",foodName])
        .then((nav: boolean) => {
          console.log('Navigation successful:', nav);
        })
        .catch((err: Error) => {
          console.error('Navigation error:', err);
        });
  }


}
