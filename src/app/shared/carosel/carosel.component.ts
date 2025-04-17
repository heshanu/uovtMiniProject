import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-carosel',
    templateUrl: './carosel.component.html',
    styleUrl: './carosel.component.css',
    standalone: false
})
export class CaroselComponent implements OnInit{

@Input() images!:any[];
imgs!:any[];

  currentIndex = 0;
  intervalId:any;

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide(); // Go to the next slide every 3 seconds (3000ms)
    }, 3000);
  }

  stopAutoPlay():void{
    if(this.intervalId){
      clearInterval(this.intervalId);
    }
  }

  ngOnInit(): void {
    this.imgs=this.images;
    this.startAutoPlay();
  }

}
