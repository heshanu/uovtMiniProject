import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-poster',
    templateUrl: './card-poster.component.html',
    styleUrl: './card-poster.component.css',
    standalone: false
})
export class CardPosterComponent implements OnInit{
  @Input() cardList:any[]=[];
  listofCards:any[]=[];
  ngOnInit(): void {
    this.listofCards=this.cardList;
  }

}
