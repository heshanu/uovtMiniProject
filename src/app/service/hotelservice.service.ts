import { Injectable } from '@angular/core';
import { HotelsListInterface } from '../model/hotel_interface';

@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {

allHotelListLocation:any[]=[
    {"itemName":"Southenn Province","description":" hotels in Southern Province","link":"southern"},

    {"itemName":"Western Province","description":" hotels in Western Province","link":"western","img":""},

    {"itemName":"Centeral","description":"Centeral Hotel","link":"centeral","img":""},

    {"itemName":"North Western Province","description":"North Western Hotel","link":"northwest","img":""},

    {"itemName":"Sabaragamuwa Province","description":"Sabaragamuwa Hotels","link":"sabara","img":""},
    
    {"itemName":"Northern Province","description":"North Province","link":"north","img":""},
    {"itemName":"Eastern Province","description":"Eastern Province","link":"eastern","img":""},
    {"itemName":"Uva Province","description":"Uva province hotels","link":"/uva","img":""},
     
    {"itemName":"North-Central","description":"Northcentral","link":"northcentral","img":""},
  
];

hikkaduwaHotelList:HotelsListInterface[]=[

  {hotelId:"hotel1",hotelName:"Chaaya trans hotel",address:"hikkaduwa",avaliableRooms:30,img:'',numOfStars:4,
    package:[
      "Basic - LKR 1500/day",
      "Standard - LKR 2500/day",
      "Premium - LKR 4000/day",
      "Luxury - LKR 6000/day",
      "Weekly Deal - LKR 12000/week",
      "Monthly Special - LKR 35000/month"
    ]},
    {
      hotelId:"hotel2",hotelName:"citrus hotel",address:"hikkaduwa",avaliableRooms:10,img:'',numOfStars:4,
    package:[
      "Basic - LKR 500/day",
      "Standard - LKR 1500/day",
      "Premium - LKR 2000/day",
      "Luxury - LKR 4000/day",
      "Weekly Deal - LKR 2000/week",
      "Monthly Special - LKR 15000/month"
    ]},
    {
      hotelId:"hotel3",hotelName:"amana reef hotel",address:"hikkaduwa",avaliableRooms:5,img:'',numOfStars:4,
      package:[
        "Basic - LKR 500/day",
        "Standard - LKR 1500/day",
        "Premium - LKR 2000/day",
        "Luxury - LKR 4000/day",
        "Weekly Deal - LKR 2000/week",
        "Monthly Special - LKR 15000/month"
      ]
    }
  
];

jaffaHotelList:HotelsListInterface[]=[

  {hotelId:"hotel1",hotelName:"Tamil hotel",address:"Jaffna",avaliableRooms:30,img:'',numOfStars:4,
    package:[
      "Basic - LKR 1500/day",
      "Standard - LKR 2500/day",
      "Premium - LKR 4000/day",
      "Luxury - LKR 6000/day",
      "Weekly Deal - LKR 12000/week",
      "Monthly Special - LKR 35000/month"
    ]},
    {
      hotelId:"hotel2",hotelName:"Seabeach hotel",address:"Jaffna",avaliableRooms:10,img:'',numOfStars:4,
    package:[
      "Basic - LKR 500/day",
      "Standard - LKR 1500/day",
      "Premium - LKR 2000/day",
      "Luxury - LKR 4000/day",
      "Weekly Deal - LKR 2000/week",
      "Monthly Special - LKR 15000/month"
    ]},
    {
      hotelId:"hotel3",hotelName:"SeaView hotel",address:"Jaffna",avaliableRooms:5,img:'',numOfStars:4,
      package:[
        "Basic - LKR 500/day",
        "Standard - LKR 1500/day",
        "Premium - LKR 2000/day",
        "Luxury - LKR 4000/day",
        "Weekly Deal - LKR 2000/week",
        "Monthly Special - LKR 15000/month"
      ]
    }
];

// mataraBikeList:BikeInterface[]=[

//   {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
//   {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
// ];

// hikkaBikeList:BikeInterface[]=[

//   {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
//   {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
// ];

// nuwaraBikeList:BikeInterface[]=[

//   {bikeId:'b1',bikeName:'lumala',color:'red',condition:'good',quantity:10,img:'',rating:4,ratePerDay:200},
//   {bikeId:'b2',bikeName:'dunlop',color:'green',condition:'mint condition',quantity:2,img:'',rating:5,ratePerDay:500}  
  
// ];

  // getGalleHotelList():HotelsListInterface[]{
  //   return this.getGalleHotelList;
  // }

  getJaffanaBikeList():HotelsListInterface[]{
    return this.jaffaHotelList;
  }

  // getMataraBikeList():BikeInterface[]{
  //   return this.mataraBikeList;
  // }

  getHikkaBikeList():HotelsListInterface[]{
    return this.hikkaduwaHotelList;
  }

  // getNuwaraBikeList():BikeInterface[]{
  //   return this.nuwaraBikeList;
  // }

  getAllHotels(){
    return this.allHotelListLocation;
  }
}
