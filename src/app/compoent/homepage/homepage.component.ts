import { Component, inject } from '@angular/core';
import { PhotoServiceService } from '../../service/photo-service.service';
import { NotificationService } from '../../notification.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    standalone: false
})
export class HomepageComponent {

imageData!: any[];
image!: string;
constructor(private imageService:PhotoServiceService){}  

inputValue:string = '';
searchImageByName(imageName: any) {
   
  if (imageName) {
    this.imageService.findImageByName(imageName).subscribe(
      (data) => {
        this.imageData = data.photos;
      },
      error => {
        console.error('Error fetching image', error);
      })
    // Implement your search logic here
  } else {
    console.log('Image name is empty');
  }
}

resetList(){
  this.imageData=[];
}


cardsList:any[]=[
      {name:'galle',link:'../../assets/rect3.png',description:'3 Days,2 Nights',price:'$200',country:'Sri Lanka'},
      {name:'Jaffna',link:'../../assets/rect4.png',description:'2 Days,2 Nights',price:'$140',country:'Sri Lanka'},
      {name:'colombo',link:'../../assets/rect5.png',description:'3 Days,2 Nights',price:'$200',country:'Sri Lanka'},
      {name:'galle',link:'../../assets/rect3.png',description:'3 Days,2 Nights',price:'$200',country:'Sri Lanka'},
      {name:'Jaffna',link:'../../assets/rect4.png',description:'2 Days,2 Nights',price:'$140',country:'Sri Lanka'},
      {name:'colombo',link:'../../assets/rect5.png',description:'3 Days,2 Nights',price:'$200',country:'Sri Lanka'},
    ];
}
