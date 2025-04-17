import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogHotelconfirmComponent } from '../dialog-hotelconfirm/dialog-hotelconfirm.component';

@Component({
    selector: 'app-dialog-compoent',
    templateUrl: './dialog-compoent.component.html',
    styleUrl: './dialog-compoent.component.css',
    standalone: false
})
export class DialogCompoentComponent {

  readonly dialog = inject(MatDialog);

selectedPackage: string | null = null;

  constructor(
    public dialogRef: MatDialogRef<DialogCompoentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  getPackageName(pkg: string): string {
    return pkg.split(' - ')[0];
  }

  getPackagePrice(pkg: string): string {
    return pkg.split(' - ')[1].split('/')[0];
  }

  getPackageDuration(pkg: string): string {
    return pkg.split(' - ')[1].split('/')[1];
  }

  bookPackage(pkg:any,enterAnimationDuration: string, exitAnimationDuration: string) {
   console.log(pkg);
   this.dialog.open(DialogHotelconfirmComponent, {
    width: '250px',
    enterAnimationDuration,
    exitAnimationDuration,
  });
   
  }
    
}
