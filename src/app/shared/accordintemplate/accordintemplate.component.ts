import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HotelserviceService } from '../../service/hotelservice.service';
import { HotelsListInterface } from '../../model/hotel_interface';
import { Observable, Subscription, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { selectCustomerId } from '../../store/customers/customer.selectors';

@Component({
  selector: 'app-accordintemplate',
  templateUrl: './accordintemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './accordintemplate.component.css'
})
export class AccordintemplateComponent implements OnInit,OnDestroy{

hotelsList:HotelsListInterface[]=[];

customerId$!: Observable<string|undefined>;
customerId:string|undefined;
id:any;
customerIdSubscription!:Subscription;

@Input() items:any[] = [];

  constructor(private router:Router,private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ){
    this.customerId$ = this.store.select(selectCustomerId);
  }

  ngOnDestroy(): void {
    this.customerIdSubscription.unsubscribe();
  }
 
  itemRecived:any[]=[];

  ngOnInit(): void {
      this.customerIdSubscription=this.customerId$.subscribe((data)=>{
        this.id=data;
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
