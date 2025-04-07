import { Component,OnDestroy,OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getCustomerDetail,} from '../../store/customers/customer.selectors';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-customer-dash-board',
  templateUrl: './customer-dash-board.component.html',
  styleUrl: './customer-dash-board.component.css'
})
export class CustomerDashBoardComponent implements OnInit,OnDestroy{

  //customerRecivedObj!:CustomerdetailsInterface;
  customerObj$!: Observable<CustomerdetailsInterface|any>;
  customerRecivedObj!:CustomerdetailsInterface|any;
  private subscription!: Subscription;

   constructor(private route:Router,
      private store: Store<AppState>){
      this.customerObj$ = this.store.pipe(select( getCustomerDetail ));
  
    }
 
 
  ngOnInit(): void {
    this.subscription=this.customerObj$.subscribe((data) => {
      this.customerRecivedObj = data; 
      console.log('Customer ID:', this.customerRecivedObj);

      
    });
     }

  ngOnDestroy(): void {
   if(this.subscription){
    this.subscription.unsubscribe();
   }
    }
  }
   
