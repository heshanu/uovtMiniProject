import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: false
})
export class HomeComponent {
  
  homePageImages:any[]=[
    "../assets/rect1.png",,
    "../assets/rect2.png",
    "../assets/rect3.png"
  ];

}
