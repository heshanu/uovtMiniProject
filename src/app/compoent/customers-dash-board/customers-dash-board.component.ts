import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setCustomer} from '../../store/customers/customer-id.actions';
import { Observable, Subscription } from 'rxjs';
import { selectCustomerId } from '../../store/customers/customer.selectors';
import { AppState } from '../../app.reducer';
import { CustomerdetailsService } from '../../service/customerdetails.service';

@Component({
  selector: 'app-customers-dash-board',
  templateUrl: './customers-dash-board.component.html',
  styleUrl: './customers-dash-board.component.css'
})

export class CustomersDashBoardComponent implements OnInit,OnDestroy{

  customerService=inject(CustomerdetailsService);

  customerId$: Observable<string|undefined>;
  customerId!:string|undefined;
  private subscription!: Subscription;

  customersList:CustomerdetailsInterface[]=[];

  constructor(private route:Router,private activeRouter:ActivatedRoute,
    private store: Store<AppState>){
    this.customerId$ = this.store.pipe(select(selectCustomerId));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription=this.customerId$.subscribe((data) => {
      this.customerId = data; // Update the component's state with the new value
      console.log('Customer ID:', this.customerId); // Optional: Log the value
    });
    this.getCustomersDetails();
  }

  getCustomersDetails():void{
    this.customerService.getAllCustomers().subscribe({
      next: (data) => (this.customersList = data),
      error: (err) => console.error('Error fetching customers:', err),
    });

  }

  planNow(customer:CustomerdetailsInterface,_id:any) {
    console.log();

    if (_id != null) {
      this.route.navigate(['customerDashboard/',_id,'hotellist']);
    //  this.store.dispatch(setCustomerId({_id}));
     console.log("customer is is set",_id);
     this.store.dispatch(
      setCustomer({
        _id:customer._id,
        name:customer.name,
        age:customer.age,
        address: customer.address,
        accomadation: customer.accomadation,
        travelMode:customer.travelMode,
        foodList: customer.foodList,
       foodListOption: customer.foodListOption,
        beverageList:customer.beverageList,
        beverageListOption:customer.beverageListOption,
        startDate:customer.startDate,
        endDate: customer.endDate
      })
    );
  }
}
}

