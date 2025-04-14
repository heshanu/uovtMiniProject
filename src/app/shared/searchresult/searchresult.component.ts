import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrl: './searchresult.component.css'
})
export class SearchresultComponent implements OnInit{

  @Input() result:any[]=[];

  resultList:any[]=[];

  constructor(){
  }

  ngOnInit(): void {
    this.resultList=this.result;
  }
}
