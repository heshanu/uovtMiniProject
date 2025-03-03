import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrl: './carosel.component.css'
})
export class CaroselComponent implements OnInit{
  currentIndex = 0;
  items = [
    {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor."',
      author: '~ Jeo Stanlee',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      text: '"Another testimonial here. Ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor."',
      author: '~ Jane Doe',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      text: '"Yet another testimonial. Ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor."',
      author: '~ John Smith',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-500'
    }
  ];

  ngOnInit(): void {
    // Auto-play the carousel
    setInterval(() => this.nextItem(), 5000); // Change slide every 5 seconds
  }

  showItem(index: number): void {
    this.currentIndex = index;
  }

  nextItem(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prevItem(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}
