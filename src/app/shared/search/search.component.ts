import { Component, Input, OnInit } from '@angular/core';
import { OnIdentifyEffects } from '@ngrx/effects';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  @Input() beverageList:any[]=[];

  list:any[]=[];

  ngOnInit(): void {
   this.list= this.beverageList;
  }
 


  
}
