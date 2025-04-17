import { Component, Inject, inject } from '@angular/core';
import { DialogTrainconfirmComponent } from '../dialog-trainconfirm/dialog-trainconfirm.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-train',
    templateUrl: './dialog-train.component.html',
    styleUrl: './dialog-train.component.css',
    standalone: false
})
export class DialogTrainComponent {

 readonly dialog = inject(MatDialog);

  selectedPackage: string | null = null;

  constructor(
    public dialogRef: MatDialogRef<DialogTrainComponent>,
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
   this.dialog.open(DialogTrainconfirmComponent, {
    width: '250px',
    enterAnimationDuration,
    exitAnimationDuration,
  });
   
  }
}
