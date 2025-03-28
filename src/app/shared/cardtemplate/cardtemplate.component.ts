import { Component, Input, OnInit } from '@angular/core';
import { HotelsListInterface } from '../../model/hotel_interface';

@Component({
  selector: 'app-cardtemplate',
  templateUrl: './cardtemplate.component.html',
  styleUrl: './cardtemplate.component.css'
})
export class CardtemplateComponent implements OnInit{

refresh() {
throw new Error('Method not implemented.');
}

bookNow(_t2: HotelsListInterface) {
throw new Error('Method not implemented.');
}

openPackageDialog(_t2: HotelsListInterface,$event: MouseEvent) {
throw new Error('Method not implemented.');
}

  list:HotelsListInterface[]=[];
  
  ngOnInit(): void {
    this.list=this.recivedList;
  }

selectItem(_t2: any) {
throw new Error('Method not implemented.');
}

  @Input() recivedList:HotelsListInterface[]=[]; 

  

}
