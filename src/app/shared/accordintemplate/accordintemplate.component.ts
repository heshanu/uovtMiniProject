import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HotelserviceService } from '../../service/hotelservice.service';
import { HotelsListInterface } from '../../model/hotel_interface';
import { Observable, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-accordintemplate',
  templateUrl: './accordintemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './accordintemplate.component.css'
})
export class AccordintemplateComponent implements OnInit{

hotelsList:HotelsListInterface[]=[];

customerId$!: Observable<string>;

  id:any;

  constructor(private router:Router,private activatedRoute: ActivatedRoute,
    private store: Store<{ customerId: string }>
  ){
    this.customerId$ = this.store.select('customerId');
  }
 
  
  itemRecived:any[]=[];

      ngOnInit(): void {
        this.itemRecived=this.items;
       // this.hotelsList=this.hotelsListService.
      }
      
    @Input() items:any[] = [];
    

  navigateTo(link: string) {
    console.log(link);
    // Subscribe to the customerId$ observable
    this.customerId$.pipe(
      take(1) // Take only the current value and auto-unsubscribe
    ).subscribe(customerId => {
      if (!customerId) {
        console.error('No customer ID available');
        return;
      }
      this.id=customerId

  
      this.router.navigate(["customerDashboard/",this.id,"hotelslist",link])
        .then((nav: boolean) => {
          console.log('Navigation successful:', nav);
        })
        .catch((err: Error) => {
          console.error('Navigation error:', err);
        });
    });
  }
    
   

}
