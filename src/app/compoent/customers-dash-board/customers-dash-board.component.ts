import { Component, inject } from '@angular/core';
import { CustomerdetailsService } from '../../service/customerdetails.service';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerObjectService } from '../../service/customer-object.service';
import { Store } from '@ngrx/store';
import { setCustomerId } from '../../store/customer-id.actions';


@Component({
  selector: 'app-customers-dash-board',
  templateUrl: './customers-dash-board.component.html',
  styleUrl: './customers-dash-board.component.css'
})
export class CustomersDashBoardComponent {
  customerService=inject(CustomerdetailsService);

  customersList: CustomerdetailsInterface[] = [];
  customerId:any;

  constructor(private route:Router,private activeRouter:ActivatedRoute,
    private store: Store 
  ){}

  customerObj!:CustomerdetailsInterface;


  ngOnInit() {
    this.customerService.getAllCustomers().subscribe({
      next: (data) => (this.customersList = data),
      error: (err) => console.error('Error fetching customers:', err),
    });

  }

  planNow(customer:CustomerdetailsInterface,_id:any) {
    if (_id != null) {
      this.route.navigate(['customerDashboard/', _id,'hotellist']);
      this.store.dispatch(setCustomerId({_id}));
     console.log("customer is is set",_id);
     
    }
  }

  
  
}
