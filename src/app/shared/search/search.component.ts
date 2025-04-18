import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    standalone: false
})
export class SearchComponent implements OnInit{

  @Input() beverageList:any[]=[];

  list:any[]=[];

  ngOnInit(): void {
   this.list= this.beverageList;
  }
 


  
}
