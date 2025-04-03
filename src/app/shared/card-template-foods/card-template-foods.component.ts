import { Component, inject, Input } from '@angular/core';
import { FoodsInterface } from '../../model/foodrecipe.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogHotelconfirmComponent } from '../dialog-hotelconfirm/dialog-hotelconfirm.component';
import { DialogCompoentComponent } from '../dialog-hotel/dialog-compoent.component';

@Component({
  selector: 'app-card-template-foods',
  templateUrl: './card-template-foods.component.html',
  styleUrl: './card-template-foods.component.css'
})
export class CardTemplateFoodsComponent {

  @Input() recivedList:any[]=[];

  readonly dialog = inject(MatDialog)

  list:any[]=[];

  selectItem(item:any,enterAnimationDuration: string, exitAnimationDuration: string) {
   // console.log("booked ",item);
    this.dialog.open(DialogHotelconfirmComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    }); 
  }
  

  ngOnInit(): void {
    this.list=this.recivedList;
  }

refresh() {
throw new Error('Method not implemented.');
}

bookNow(item: any,enterAnimationDuration: string, exitAnimationDuration: string) {
  console.log("booked ",item);
  this.dialog.open(DialogHotelconfirmComponent, {
    width: '250px',
    enterAnimationDuration,
    exitAnimationDuration,
  }); 
}


openPackageDialog(item: FoodsInterface,$event: MouseEvent) {
  $event.stopPropagation(); // Prevent card click event
    
    const dialogRef = this.dialog.open(DialogCompoentComponent, {
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
