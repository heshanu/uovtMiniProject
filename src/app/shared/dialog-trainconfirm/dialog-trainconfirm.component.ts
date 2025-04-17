import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-trainconfirm',
    templateUrl: './dialog-trainconfirm.component.html',
    styleUrl: './dialog-trainconfirm.component.css',
    standalone: false
})
export class DialogTrainconfirmComponent {
  readonly dialogRef = inject(MatDialogRef<DialogTrainconfirmComponent>);
}
