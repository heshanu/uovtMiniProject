import { Injectable } from '@angular/core';
import { HotelsListInterface } from '../model/hotel_interface';

@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {

  //province path
allHotelListLocation:any[]=[
    {"itemName":"Southenn Province","description":" hotels in Southern Province","link":"southern"},

    {"itemName":"Western Province","description":" hotels in Western Province","link":"western","img":""},

    {"itemName":"Centeral","description":"Centeral Hotel","link":"centeral","img":""},

    {"itemName":"North Western Province","description":"North Western Hotel","link":"northwest","img":""},

    {"itemName":"Sabaragamuwa Province","description":"Sabaragamuwa Hotels","link":"sabara","img":""},
    
    {"itemName":"Northern Province","description":"North Province","link":"north","img":""},
    {"itemName":"Eastern Province","description":"Eastern Province","link":"eastern","img":""},
    {"itemName":"Uva Province","description":"Uva province hotels","link":"uva","img":""},
     
    {"itemName":"North-Central","description":"Northcentral","link":"northcentral","img":""},
  
];

hikkaduwaHotelList:HotelsListInterface[]=[

  {hotelId:"hotel1",hotelName:"Chaaya trans hotel",address:"hikkaduwa",avaliableRooms:30,img:'https://www.bestoflanka.com/images/slider/stay-in-the-beach-sri-lanka/hotel-chaaya-tranz/01.jpg',numOfStars:4,
    package:[
      "Basic - LKR 1500/day",
      "Standard - LKR 2500/day",
      "Premium - LKR 4000/day",
      "Luxury - LKR 6000/day",
      "Weekly Deal - LKR 12000/week",
      "Monthly Special - LKR 35000/month"
    ]},
    {
      hotelId:"hotel2",hotelName:"citrus hotel",address:"hikkaduwa",avaliableRooms:10,img:'https://q-xx.bstatic.com/xdata/images/hotel/max500/172420812.jpg?k=869d633a82cd179e3a472d298aa3f76b585c95a51b9402b8e66e0ce99685c01a&o=',numOfStars:4,
    package:[
      "Basic - LKR 500/day",
      "Standard - LKR 1500/day",
      "Premium - LKR 2000/day",
      "Luxury - LKR 4000/day",
      "Weekly Deal - LKR 2000/week",
      "Monthly Special - LKR 15000/month"
    ]},
    {
      hotelId:"hotel3",hotelName:"amana reef hotel",address:"hikkaduwa",avaliableRooms:5,img:'https://billeder.apollorejser.dk/hikka-tranz-by-cinnamon-1686470764-593102-ImageGalleryX2.jpg',numOfStars:4,
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

westernHotelList:HotelsListInterface[]=[

  {hotelId:"hotel1",hotelName:"Shangrila hotel",address:"Colombo",
    avaliableRooms:30,
    img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 1500/day",
      "Standard - LKR 2500/day",
      "Premium - LKR 4000/day",
      "Luxury - LKR 6000/day",
      "Weekly Deal - LKR 12000/week",
      "Monthly Special - LKR 35000/month"
    ]},
    {
      hotelId:"hotel2",hotelName:"Seabeach hotel",address:"Colombo",
      avaliableRooms:10,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 500/day",
      "Standard - LKR 1500/day",
      "Premium - LKR 2000/day",
      "Luxury - LKR 4000/day",
      "Weekly Deal - LKR 2000/week",
      "Monthly Special - LKR 15000/month"
    ]},
    {
      hotelId:"hotel3",hotelName:"SeaView hotel",address:"Colombo",
      avaliableRooms:5,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
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

centralHotelList:HotelsListInterface[]=[

  {hotelId:"hotel1",hotelName:"Shangrila hotel",address:"Central",
    avaliableRooms:30,
    img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 1500/day",
      "Standard - LKR 2500/day",
      "Premium - LKR 4000/day",
      "Luxury - LKR 6000/day",
      "Weekly Deal - LKR 12000/week",
      "Monthly Special - LKR 35000/month"
    ]},
    {
      hotelId:"hotel2",hotelName:"Seabeach hotel",address:"Central",
      avaliableRooms:10,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 500/day",
      "Standard - LKR 1500/day",
      "Premium - LKR 2000/day",
      "Luxury - LKR 4000/day",
      "Weekly Deal - LKR 2000/week",
      "Monthly Special - LKR 15000/month"
    ]},
    {
      hotelId:"hotel3",hotelName:"SeaView hotel",address:"Central",
      avaliableRooms:5,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
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

northwestHotelList:HotelsListInterface[]=[

  {hotelId:"hotel1",hotelName:"Shangrila hotel",address:"NorthWest",
    avaliableRooms:30,
    img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 1500/day",
      "Standard - LKR 2500/day",
      "Premium - LKR 4000/day",
      "Luxury - LKR 6000/day",
      "Weekly Deal - LKR 12000/week",
      "Monthly Special - LKR 35000/month"
    ]},
    {
      hotelId:"hotel2",hotelName:"Seabeach hotel",address:"NorthWest",
      avaliableRooms:10,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 500/day",
      "Standard - LKR 1500/day",
      "Premium - LKR 2000/day",
      "Luxury - LKR 4000/day",
      "Weekly Deal - LKR 2000/week",
      "Monthly Special - LKR 15000/month"
    ]},
    {
      hotelId:"hotel3",hotelName:"SeaView hotel",address:"Northwest",
      avaliableRooms:5,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
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

sabaragamuwaHotelList:HotelsListInterface[]=[

  {hotelId:"hotel1",hotelName:"Shangrila hotel",address:"Sbaragamuwa",
    avaliableRooms:30,
    img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 1500/day",
      "Standard - LKR 2500/day",
      "Premium - LKR 4000/day",
      "Luxury - LKR 6000/day",
      "Weekly Deal - LKR 12000/week",
      "Monthly Special - LKR 35000/month"
    ]},
    {
      hotelId:"hotel2",hotelName:"Seabeach hotel",address:"NorthWest",
      avaliableRooms:10,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 500/day",
      "Standard - LKR 1500/day",
      "Premium - LKR 2000/day",
      "Luxury - LKR 4000/day",
      "Weekly Deal - LKR 2000/week",
      "Monthly Special - LKR 15000/month"
    ]},
    {
      hotelId:"hotel3",hotelName:"SeaView hotel",address:"Northwest",
      avaliableRooms:5,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
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

easternHotelList:HotelsListInterface[]=[

  {hotelId:"hotel1",hotelName:"Shangrila hotel",address:"Eastern",
    avaliableRooms:30,
    img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 1500/day",
      "Standard - LKR 2500/day",
      "Premium - LKR 4000/day",
      "Luxury - LKR 6000/day",
      "Weekly Deal - LKR 12000/week",
      "Monthly Special - LKR 35000/month"
    ]},
    {
      hotelId:"hotel2",hotelName:"Seabeach hotel",address:"Eastern",
      avaliableRooms:10,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 500/day",
      "Standard - LKR 1500/day",
      "Premium - LKR 2000/day",
      "Luxury - LKR 4000/day",
      "Weekly Deal - LKR 2000/week",
      "Monthly Special - LKR 15000/month"
    ]},
    {
      hotelId:"hotel3",hotelName:"SeaView hotel",address:"Eastern",
      avaliableRooms:5,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
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

uvaHotelList:HotelsListInterface[]=[

  {hotelId:"hotel1",hotelName:"Shangrila hotel",address:"uva",
    avaliableRooms:30,
    img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 1500/day",
      "Standard - LKR 2500/day",
      "Premium - LKR 4000/day",
      "Luxury - LKR 6000/day",
      "Weekly Deal - LKR 12000/week",
      "Monthly Special - LKR 35000/month"
    ]},
    {
      hotelId:"hotel2",hotelName:"Seabeach hotel",address:"Uva",
      avaliableRooms:10,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 500/day",
      "Standard - LKR 1500/day",
      "Premium - LKR 2000/day",
      "Luxury - LKR 4000/day",
      "Weekly Deal - LKR 2000/week",
      "Monthly Special - LKR 15000/month"
    ]},
    {
      hotelId:"hotel3",hotelName:"SeaView hotel",address:"Uva",
      avaliableRooms:5,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
      package:[
        "Basic - LKR 500/day",
        "Standard - LKR 1500/day",
        "Premium - LKR 2000/day",
        "Luxury - LKR 4000/day",
        "Weekly Deal - LKR 2000/week",
        "Monthly Special - LKR 15000/month"
      ]
    }

]

northCentralList:HotelsListInterface[]=[

  {hotelId:"hotel1",hotelName:"Shangrila hotel",address:"North Central",
    avaliableRooms:30,
    img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 1500/day",
      "Standard - LKR 2500/day",
      "Premium - LKR 4000/day",
      "Luxury - LKR 6000/day",
      "Weekly Deal - LKR 12000/week",
      "Monthly Special - LKR 35000/month"
    ]},
    {
      hotelId:"hotel2",hotelName:"Seabeach hotel",address:"North Central",
      avaliableRooms:10,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
    package:[
      "Basic - LKR 500/day",
      "Standard - LKR 1500/day",
      "Premium - LKR 2000/day",
      "Luxury - LKR 4000/day",
      "Weekly Deal - LKR 2000/week",
      "Monthly Special - LKR 15000/month"
    ]},
    {
      hotelId:"hotel3",hotelName:"SeaView hotel",address:"North Central",
      avaliableRooms:5,img:'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=612x612&w=is&k=20&c=UD8E969E_w4RZP7f_8wzF3wwW3eQfS84jC7-TL2AvaY=',numOfStars:4,
      package:[
        "Basic - LKR 500/day",
        "Standard - LKR 1500/day",
        "Premium - LKR 2000/day",
        "Luxury - LKR 4000/day",
        "Weekly Deal - LKR 2000/week",
        "Monthly Special - LKR 15000/month"
      ]
    }

]
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

  getWesternHotelList():HotelsListInterface[]{
    return this.westernHotelList;
  }

  // getNuwaraBikeList():BikeInterface[]{
  //   return this.nuwaraBikeList;
  // }

  getAllHotels(){
    return this.allHotelListLocation;
  }

  getCentralHotelList():HotelsListInterface[]{
    return this.centralHotelList;
  }

  getNorthWest():HotelsListInterface[]{
    return this.northwestHotelList;
  }

  getSabaragamuwaHotelList():HotelsListInterface[]{
    return this.sabaragamuwaHotelList;
  }

  getEasternHotelList():HotelsListInterface[]{
    return this.easternHotelList;
  }

  getUvaHotelList():HotelsListInterface[]{
    return this.uvaHotelList;
  }

  getNorthCentralHotelList():HotelsListInterface[]{
    return this.northCentralList;
  }
}
