import { Component, inject } from '@angular/core';
import { CustomerdetailsService } from '../../service/customerdetails.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerObjectService } from '../../service/customer-object.service';

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
    private customerObjectService:CustomerObjectService 
  ){}

  customerObj!:CustomerdetailsInterface;

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe({
      next: (data) => (this.customersList = data),
      error: (err) => console.error('Error fetching customers:', err),
    });
  }

  planNow(customer:CustomerdetailsInterface,id:any) {
    if (id != null) {
      this.route.navigate(['customerDashboard/', id+1]);
      this.customerObjectService.setData(customer);
    }
  }
  
}
