import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CustomerState } from '../../store/customers/customer.status';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { getCustomerDetail } from '../../store/customers/customer.selectors';

@Component({
  selector: 'app-beveragetemplate',
  templateUrl: './beveragetemplate.component.html',
  styleUrl: './beveragetemplate.component.css'
})
export class BeveragetemplateComponent implements OnInit{

  customerId$!: Observable<CustomerState|undefined>;
  customerId:any;
  customerIdSubscription!:Subscription;

  constructor(private router:Router,private activatedRoute: ActivatedRoute, 
    private store: Store<AppState>){
       this.customerId$ = this.store.select(getCustomerDetail);
    }

  @Input() list:any[] = [];
  beverageList:any[] = [];

  expandedIndex = 0;
  
  ngOnInit(): void {
    this.customerIdSubscription=this.customerId$.subscribe((data:any)=>{
      this.customerId=data._id;
    })
    this. beverageList= this.list;
  }

  // Implement the navigateTo method if needed
  navigateTo(foodName:string) {
    console.log("Beverage-template",foodName);
    if (this.customerId && foodName) {
      this.router.navigate(['customerDashboard', this.customerId, 'beveragelist', foodName])
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