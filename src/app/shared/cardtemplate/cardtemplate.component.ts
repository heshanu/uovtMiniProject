import { Component, Input, OnInit } from '@angular/core';
import { HotelsListInterface } from '../../model/hotel_interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogCompoentComponent } from '../dialog-hotel/dialog-compoent.component';

@Component({
  selector: 'app-cardtemplate',
  templateUrl: './cardtemplate.component.html',
  styleUrl: './cardtemplate.component.css'
})
export class CardtemplateComponent implements OnInit{

  list:HotelsListInterface[]=[];

  selectItem(_t2: any) {
  throw new Error('Method not implemented.');
  }
  
  @Input() recivedList:HotelsListInterface[]=[]; 
  

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.list=this.recivedList;
  }

refresh() {
throw new Error('Method not implemented.');
}

bookNow(item: HotelsListInterface) {
  console.log("booked ",item);
  
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

