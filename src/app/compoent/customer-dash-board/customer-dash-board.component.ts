import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-dash-board',
  templateUrl: './customer-dash-board.component.html',
  styleUrl: './customer-dash-board.component.css'
})
export class CustomerDashBoardComponent {
  customerId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the 'id' from the route parameters
    this.customerId = this.route.snapshot.paramMap.get('id');
  }

  

}
