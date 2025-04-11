import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-beverageconfirm',
  templateUrl: './beverageconfirm.component.html',
  styleUrl: './beverageconfirm.component.css'
})
export class BeverageconfirmComponent {

   readonly dialog = inject(MatDialog);
 
  packages:any[]=[
        {name:"Basic" ,value:" LKR 500/day"},
        {name:"Standard",value:"LKR 1500/day"},
        {name:"Premium ",value:"LKR 2000/day"},
        {name:"Luxury ",value: "LKR 4000/day"},
        {name:"Weekly Deal",value:" LKR 2000/week"},
        {name:"Monthly Special",value:"LKR 15000/month"}
    ]

    // {hotelId:"hotel1",hotelName:"Chaaya trans hotel",address:"hikkaduwa",avaliableRooms:30,img:'https://www.bestoflanka.com/images/slider/stay-in-the-beach-sri-lanka/hotel-chaaya-tranz/01.jpg',numOfStars:4,
    //   package:[
    //     "Basic - LKR 1500/day",
    //     "Standard - LKR 2500/day",
    //     "Premium - LKR 4000/day",
    //     "Luxury - LKR 6000/day",
    //     "Weekly Deal - LKR 12000/week",
    //     "Monthly Special - LKR 35000/month"
    //   ]},
 
   constructor(
     public dialogRef: MatDialogRef<BeverageconfirmComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any
   ) {}
 
   getPackageName(pkg: string): string {
     return pkg.split(' - ')[0];
   }
 
   getPackagePrice(pkg: string): string {
     return pkg.split(' - ')[1].split('/')[0];
   }
 
   getPackageDuration(pkg: string): string {
     return pkg.split(' - ')[1].split('/')[1];
   }
 
   bookPackage(pkg:any,enterAnimationDuration: string, exitAnimationDuration: string) {
    console.log(pkg);
    this.dialog.open(BeverageconfirmComponent, {
     width: '250px',
     enterAnimationDuration,
     exitAnimationDuration,
   });
    
   }
  
}
