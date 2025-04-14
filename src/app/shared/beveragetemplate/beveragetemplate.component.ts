import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CustomerState } from '../../store/customers/customer.status';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { getCustomerDetail } from '../../store/customers/customer.selectors';
import { SpinnerService } from '../../service/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogHotelconfirmComponent } from '../dialog-hotelconfirm/dialog-hotelconfirm.component';
import { DialogCompoentComponent } from '../dialog-hotel/dialog-compoent.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { BeverageconfirmComponent } from '../beverageconfirm/beverageconfirm.component';

@Component({
  selector: 'app-beveragetemplate',
  templateUrl: './beveragetemplate.component.html',
  styleUrl: './beveragetemplate.component.css'
})
export class BeveragetemplateComponent implements OnInit{

  customerId$!: Observable<CustomerState|undefined>;
  customerId:any;
  customerIdSubscription!:Subscription;

  isLoading$= this.spinnerService.loading$;

  readonly dialog = inject(MatDialog)

  constructor(private router:Router, 
    private store: Store<AppState>,private spinnerService:SpinnerService){
       this.customerId$ = this.store.select(getCustomerDetail);
       this.filteredBeverageList = this.list;
    }

  @Input() list:any[] = [];
  
  beverageList:any[] = [];

  filteredBeverageList:any[]=[];

  expandedIndex = 0;
  
  ngOnInit(): void {

    this.customerIdSubscription=this.customerId$
    .subscribe((data:any)=>{
      this.customerId=data._id;
    })
    this.beverageList= this.list;
  }

  // Implement the navigateTo method if needed
  navigateTo(foodName:string) {
    console.log("Beverage-template",foodName);
    if (this.customerId && foodName) {
      this.router.navigate(['customerDashboard', this.customerId, 'beveragelist', foodName])
      .then((nav: boolean) => {
        console.log('Navigation successful:', nav);
      })
      .catch((err: Error) => {
        console.error('Navigation error:', err);
      });
    } else {
      console.error('Navigation failed: this.id or foodName is undefined');
    }
  
  }

  refresh(){}


  bookNow(item: any,enterAnimationDuration: string, exitAnimationDuration: string) {
    console.log("booked ",item);
    this.dialog.open(ConfirmationModalComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    }); 
  }
  
  
  openPackageDialog(item: any,$event: MouseEvent) {
    $event.stopPropagation(); // Prevent card click event
      
      const dialogRef = this.dialog.open(BeverageconfirmComponent, {
        width: '500px',
        maxWidth: '90vw',
        data: {
          hotelName: item.name,
          packages: item.ingredients
        }
      });
  
      dialogRef.afterClosed().subscribe(selectedPackage => {
        if (selectedPackage) {
          console.log('Selected package:', selectedPackage);
          // Handle the selected package
        }
      });
    }
  
  filterResults(text: string) {
    console.log(text);
    
      if (!text) {
        this.filteredBeverageList = this.beverageList;
        return;
      }
      this.filteredBeverageList = this.beverageList.filter((beverage:any) =>
        beverage.strDrink.toLowerCase().includes(text.toLowerCase()),
      );

      console.log(this.filteredBeverageList);
      
    }  

} 