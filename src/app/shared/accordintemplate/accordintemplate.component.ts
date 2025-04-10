import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HotelserviceService } from '../../service/hotelservice.service';
import { HotelsListInterface } from '../../model/hotel_interface';
import { Observable, Subscription, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { getCustomerDetail, selectCustomerId } from '../../store/customers/customer.selectors';
import { CustomerState } from '../../store/customers/customer.status';

@Component({
  selector: 'app-accordintemplate',
  templateUrl: './accordintemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './accordintemplate.component.css'
})
export class AccordintemplateComponent implements OnInit,OnDestroy{

hotelsList:HotelsListInterface[]=[];

customerId$!: Observable<CustomerState|undefined>;
customerId:string|undefined;
id:any;
customerIdSubscription!:Subscription;

@Input() items:any[] = [];

  constructor(private router:Router,private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ){
    this.customerId$ = this.store.select(getCustomerDetail);
  }

  ngOnDestroy(): void {
    this.customerIdSubscription.unsubscribe();
  }
 
  itemRecived:any[]=[];

  ngOnInit(): void {
      this.customerIdSubscription=this.customerId$.subscribe((data:any)=>{
        this.id=data._id;
      })

      this.itemRecived=this.items;
      }
      


  navigateTo(link: string) {
    console.log("accordintemplate",this.id);
      this.router.navigate(["customerDashboard/",this.id,"hotelslist",link])
        .then((nav: boolean) => {
          console.log('Navigation successful:', nav);
        })
        .catch((err: Error) => {
          console.error('Navigation error:', err);
        });
  }
    
   

}
