import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hotellist',
  templateUrl: './hotellist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './hotellist.component.css',
})
export class HotellistComponent {

  items = ['Mode of travel', 'Hotel accomadation', 'Food cusine', 'Beverage', 'Item 5'];
  expandedIndex = 0;

}
