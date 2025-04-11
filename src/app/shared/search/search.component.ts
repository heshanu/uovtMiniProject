import { Component, Input, OnInit } from '@angular/core';
import { OnIdentifyEffects } from '@ngrx/effects';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  ngOnInit(): void {
   // console.log(this.beverageList);
    
  }

  value = 'Clear me';

  @Input() beverageList:any[]=[];

  result:any;
  beverage:any;

  findBeverage() {
    if (!this.value || !this.beverageList) {
      console.error("Value or beverageList is not defined.");
      return;
    }
  
    this.beverage = this.beverageList.find(o => o.strDrink === this.value);
  
    if (this.beverage) {
      console.log(this.beverage);
    } else {
      console.log("Beverage not found.");
    }
  }
}
