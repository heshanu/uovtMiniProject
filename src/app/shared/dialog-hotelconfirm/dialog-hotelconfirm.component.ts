import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-hotelconfirm',
    templateUrl: './dialog-hotelconfirm.component.html',
    styleUrl: './dialog-hotelconfirm.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DialogHotelconfirmComponent {
  readonly dialogRef = inject(MatDialogRef<DialogHotelconfirmComponent>);
}
