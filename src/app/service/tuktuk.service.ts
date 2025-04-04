import { Injectable } from '@angular/core';
import { BikeInterface } from '../model/bike_interface';

@Injectable({
  providedIn: 'root'
})
export class TuktukService {

  galleTukTukList:BikeInterface[]=[
   
     {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
     {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
     
   ];
   
   jaffanaTukTukList:BikeInterface[]=[
   
     {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
     {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
     
   ];
   
   mataraTukTukList:BikeInterface[]=[
   
     {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
     {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
     
   ];
   
   hikkaTukTukList:BikeInterface[]=[
   
     {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
     {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
     
   ];
   
   nuwaraTukTukList:BikeInterface[]=[
   
     {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
     {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
     
   ];
   

   
     getGalleTukTukList():BikeInterface[]{
       return this.galleTukTukList;
     }
   
     getJaffanaTukTukList():BikeInterface[]{
       return this.jaffanaTukTukList;
     }
   
     getMataraTukTukList():BikeInterface[]{
       return this.mataraTukTukList;
     }
   
     getHikkaTukTukList():BikeInterface[]{
       return this.hikkaTukTukList;
     }
   
     getNuwaraTukTukist():BikeInterface[]{
       return this.nuwaraTukTukList;
     }
}
