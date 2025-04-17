import { Component, inject, Input, OnInit } from '@angular/core';
import { VisiblelistService } from '../../service/visiblelist.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { BeverageconfirmComponent } from '../beverageconfirm/beverageconfirm.component';

@Component({
    selector: 'app-searchresult',
    templateUrl: './searchresult.component.html',
    styleUrl: './searchresult.component.css',
    standalone: false
})
export class SearchresultComponent implements OnInit{

  @Input() result:any[]=[];

  readonly dialog = inject(MatDialog)

  resultList:any[]=[];

  text:any='';
  constructor( private visiblelistService:VisiblelistService){
  }

  ngOnInit(): void {
    this.resultList=this.result;
    this.visiblelistService.data$.subscribe((data)=>{
      this.text=data;
    })
  }

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
  
}
