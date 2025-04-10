import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FoodsInterface } from '../../model/foodrecipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Observable, Subscription } from 'rxjs';
import { getCustomerDetail, selectCustomerId } from '../../store/customers/customer.selectors';
import { FoodTypeIterface } from '../../service/foodservice.service';
import { CustomerState } from '../../store/customers/customer.status';

@Component({
  selector: 'app-foodtemplate',
  templateUrl: './foodtemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './foodtemplate.component.css'
})
export class FoodtemplateComponent implements OnInit{

  customerId$!: Observable<CustomerState|undefined>;
  customerId:any;
  customerIdSubscription!:Subscription;

  constructor(private router:Router,private activatedRoute: ActivatedRoute, 
    private store: Store<AppState>){
       this.customerId$ = this.store.select(getCustomerDetail);
    }

  @Input() list:any[] = [];
  foodList:any[] = [];

  expandedIndex = 0;
  
  ngOnInit(): void {
    this.customerIdSubscription=this.customerId$.subscribe((data:any)=>{
      this.customerId=data._id;
    })
    this.foodList = this.list;
  }

  // Implement the navigateTo method if needed
  navigateTo(foodName:string) {
    console.log("Food-template",foodName);
    if (this.customerId && foodName) {
      this.router.navigate(['customerDashboard', this.customerId, 'foodslist', foodName])
      .then((nav: boolean) => {
        console.log('Navigation successful:', nav);
      })
      .catch((err: Error) => {
        console.error('Navigation error:', err);
      });
    } else {
      console.error('Navigation failed: this.id or foodName is undefined');
    }
  
  }

}
