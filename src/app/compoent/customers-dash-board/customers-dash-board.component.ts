import { Component, inject } from '@angular/core';
import { CustomerdetailsService } from '../../service/customerdetails.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customers-dash-board',
  templateUrl: './customers-dash-board.component.html',
  styleUrl: './customers-dash-board.component.css'
})
export class CustomersDashBoardComponent {
  customerService=inject(CustomerdetailsService);

  customersList: CustomerdetailsInterface[] = [];
  customerId:any;

  constructor(private route:Router,private activeRouter:ActivatedRoute){}

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe({
      next: (data) => (this.customersList = data),
      error: (err) => console.error('Error fetching customers:', err),
    });
  }

  planNow(id: any) {
    if (id != null) {
      this.route.navigate(['customerDashboard/', id+1]);
    }
  }
  
}
