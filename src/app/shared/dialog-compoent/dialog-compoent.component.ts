import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-compoent',
  templateUrl: './dialog-compoent.component.html',
  styleUrl: './dialog-compoent.component.css'
})
export class DialogCompoentComponent {

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

}
