import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../shared/materialModule';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-hotellist',
  templateUrl: './hotellist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './hotellist.component.css',
})
export class HotellistComponent {

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

}
