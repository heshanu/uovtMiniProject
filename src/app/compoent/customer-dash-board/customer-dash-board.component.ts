import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerObjectService } from '../../service/customer-object.service';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';

@Component({
  selector: 'app-customer-dash-board',
  templateUrl: './customer-dash-board.component.html',
  styleUrl: './customer-dash-board.component.css'
})
export class CustomerDashBoardComponent {
  customerId: string | null = null;

  customerRecivedObj!:CustomerdetailsInterface;

  constructor(private route: ActivatedRoute,
    private customerObjectService:CustomerObjectService 
  ) { }

  ngOnInit(): void {
    // Get the 'id' from the route parameters
    this.customerId = this.route.snapshot.paramMap.get('id');
    this.customerObjectService.data$.subscribe((data:any)=>{ 
      this.customerRecivedObj=data;
    })
    
  }

  

}
