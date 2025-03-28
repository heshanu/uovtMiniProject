import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-travel-mode',
  templateUrl: './travel-mode.component.html',
  styleUrl: './travel-mode.component.css'
})
export class TravelModeComponent implements OnInit{
constructor(private router:Router,private activatedRoute:ActivatedRoute){}
  
ngOnInit(): void {
 
    throw new Error('Method not implemented.');
  }


}
