import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerObjectService } from '../../service/customer-object.service';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { Subscription } from 'rxjs';
import { CustomerdetailsService } from '../../service/customerdetails.service';

@Component({
  selector: 'app-customer-dash-board',
  templateUrl: './customer-dash-board.component.html',
  styleUrl: './customer-dash-board.component.css'
})
export class CustomerDashBoardComponent implements OnInit{
  customerId: string | null = null;

  customerRecivedObj!:CustomerdetailsInterface;

  constructor(private route: ActivatedRoute,
    private customerdetailsService:CustomerdetailsService 
  ) { }
 

  ngOnInit(): void {
       // Get the 'id' from the route parameters
       this.customerId = this.route.snapshot.paramMap.get('id');
       console.log("Customer ID:", this.customerId);
   
       if (this.customerId) {
         this.customerdetailsService.getDetailsByCustomerId(this.customerId).subscribe({
           next: (data) => {
             this.customerRecivedObj = data;
           },
           error: (err) => {
             console.error('Error fetching customer details:', err);

           },
         });
       } else {
         console.error('No customer ID found in route parameters.');
         
       }
     }
  }
   
