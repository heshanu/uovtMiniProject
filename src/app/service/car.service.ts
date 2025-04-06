import { Injectable } from '@angular/core';
import { BikeInterface } from '../model/bike_interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {


galleCarList:BikeInterface[]=[

  {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

jaffanaCarList:BikeInterface[]=[

  {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

mataraCarList:BikeInterface[]=[

  {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

hikkaCarList:BikeInterface[]=[

  {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

nuwaraCarList:BikeInterface[]=[

  {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
  {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
];

  constructor() { }

  getGalleCarList():BikeInterface[]{
    return this.galleCarList;
  }

  getJaffanaCarList():BikeInterface[]{
    return this.jaffanaCarList;
  }

  getMataraCarList():BikeInterface[]{
    return this.mataraCarList;
  }

  getHikkaCarList():BikeInterface[]{
    return this.hikkaCarList;
  }

  getNuwaraCarList():BikeInterface[]{
    return this.nuwaraCarList;
  }
}
