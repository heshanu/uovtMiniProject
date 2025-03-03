import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
    cardsList:any[]=[
      {name:'galle',link:'../../assets/rect3.png',description:'3 Days,2 Nights',price:'$200',country:'Sri Lanka'},
      {name:'Jaffna',link:'../../assets/rect4.png',description:'2 Days,2 Nights',price:'$140',country:'Sri Lanka'},
      {name:'colombo',link:'../../assets/rect5.png',description:'3 Days,2 Nights',price:'$200',country:'Sri Lanka'},
      {name:'galle',link:'../../assets/rect3.png',description:'3 Days,2 Nights',price:'$200',country:'Sri Lanka'},
      {name:'Jaffna',link:'../../assets/rect4.png',description:'2 Days,2 Nights',price:'$140',country:'Sri Lanka'},
      {name:'colombo',link:'../../assets/rect5.png',description:'3 Days,2 Nights',price:'$200',country:'Sri Lanka'},
    ];
}
