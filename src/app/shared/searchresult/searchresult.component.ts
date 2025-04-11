import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrl: './searchresult.component.css'
})
export class SearchresultComponent {

  @Input() result:any;
}
