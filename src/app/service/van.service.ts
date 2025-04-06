import { Injectable } from '@angular/core';
import { BikeInterface } from '../model/bike_interface';

@Injectable({
  providedIn: 'root'
})
export class VanService {

  
  galleVanList:BikeInterface[]=[
  
    {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
    {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
    
  ];
  
  jaffanaVanList:BikeInterface[]=[
  
    {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
    {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
    
  ];
  
  mataraVanList:BikeInterface[]=[
  
    {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
    {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
    
  ];
  
  hikkaVanList:BikeInterface[]=[
  
    {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
    {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
    
  ];
  
  nuwaraVanList:BikeInterface[]=[
  
    {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
    {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
    
  ];
  
    constructor() { }
  
    getGalleVanList():BikeInterface[]{
      return this.galleVanList;
    }
  
    getJaffanaVanList():BikeInterface[]{
      return this.jaffanaVanList;
    }
  
    getMataraVanList():BikeInterface[]{
      return this.mataraVanList;
    }
  
    getHikkaVanList():BikeInterface[]{
      return this.hikkaVanList;
    }
  
    getNuwaraVanList():BikeInterface[]{
      return this.nuwaraVanList;
    }
}
