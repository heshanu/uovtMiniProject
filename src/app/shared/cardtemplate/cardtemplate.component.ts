import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { HotelsListInterface } from '../../model/hotel_interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogCompoentComponent } from '../dialog-hotel/dialog-compoent.component';
import { DialogHotelconfirmComponent } from '../dialog-hotelconfirm/dialog-hotelconfirm.component';

@Component({
    selector: 'app-cardtemplate',
    templateUrl: './cardtemplate.component.html',
    styleUrl: './cardtemplate.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CardtemplateComponent implements OnInit{

  readonly dialog = inject(MatDialog)

  list:HotelsListInterface[]=[];

  selectItem(item:HotelsListInterface,enterAnimationDuration: string, exitAnimationDuration: string) {
    console.log("booked ",item);
    this.dialog.open(DialogHotelconfirmComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    }); 
  }
  
  @Input() recivedList:any[]=[]; 
  

  ngOnInit(): void {
    this.list=this.recivedList;
  }

refresh() {
throw new Error('Method not implemented.');
}

bookNow(item: HotelsListInterface,enterAnimationDuration: string, exitAnimationDuration: string) {
  console.log("booked ",item);
  this.dialog.open(DialogHotelconfirmComponent, {
    width: '250px',
    enterAnimationDuration,
    exitAnimationDuration,
  }); 
}


openPackageDialog(item: HotelsListInterface,$event: MouseEvent) {
  $event.stopPropagation(); // Prevent card click event
    
    const dialogRef = this.dialog.open(DialogCompoentComponent, {
      width: '500px',
      maxWidth: '90vw',
      data: {
        hotelName: item.hotelName,
        packages: item.package
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

