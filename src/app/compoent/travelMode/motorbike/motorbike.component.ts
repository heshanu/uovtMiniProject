import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-motorbike',
  templateUrl: './motorbike.component.html',
  styleUrl: './motorbike.component.css'
})
export class MotorbikeComponent {

  customerId$!: Observable<string>;
  
    id:any;
  
    constructor(private router:Router,private activatedRoute: ActivatedRoute,
      private store: Store<{ customerId: string }>){
      this.customerId$ = this.store.select('customerId');
    }

    items= [
      {"itemName":"Galle Rent bikes","description":"This may be motor bike","link":"gallebike"},
      {"itemName":"Hikkaduwa Rent bikes","description":"This may be motor bike","link":"hikkabike"},
      {"itemName":"Matara Rent bikes","description":"This may be motor bike","link":"matarabike"},
      {"itemName":"Nuwara Rent bikes","description":"This may be motor bike","link":"nuwarabike"},
  
     
    ]
  
    navigateTo(link: string) {
        console.log("insdie the motorbike com",link);
        // Subscribe to the customerId$ observable
        this.customerId$.pipe(
          take(1) // Take only the current value and auto-unsubscribe
        ).subscribe(customerId => {
          if (!customerId) {
            console.error('No customer ID available');
            return;
          }
          this.id=customerId
    
      
          this.router.navigate(['customerDashboard',this.id,'travelMode','motorbike', link])
            .then((nav: boolean) => {
              console.log('Navigation successful:', nav);
            })
            .catch((err: Error) => {
              console.error('Navigation error:', err);
            });
        });
      }
}
