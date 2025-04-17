import { Component } from '@angular/core';

@Component({
    selector: 'app-map-sri-lanka',
    templateUrl: './map-sri-lanka.component.html',
    styleUrl: './map-sri-lanka.component.css',
    standalone: false
})
export class MapSriLankaComponent {
    slMap:string="../../../assets/mapSl.png";

    slDestinations:any[]=[
      {
        name:"Southern Province",link:"../../../assets/rect1.png",description:"20+ Spots"
      },
      {
        name:"North Province",link:"../../../assets/rect2.png",description:"25+ Spots"
      },
      {
        name:"Central Provin",link:"../../../assets/rect3.png",description:"25+ Spots"
      },
    ];
        
    
}
