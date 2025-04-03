import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FoodsInterface } from '../../model/foodrecipe.model';

@Component({
  selector: 'app-foodtemplate',
  templateUrl: './foodtemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './foodtemplate.component.css'
})
export class FoodtemplateComponent implements OnInit{

  @Input() list: FoodsInterface[] = [];
  foodList: FoodsInterface[] = [];

  expandedIndex = 0;
  
  ngOnInit(): void {
    this.foodList = this.list;
  }

  // Implement the navigateTo method if needed
  navigateTo(arg0: any) {
    // Implementation goes here
  }


}
