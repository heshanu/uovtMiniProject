import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-search-image-poster',
    templateUrl: './search-image-poster.component.html',
    styleUrl: './search-image-poster.component.css',
    standalone: false
})
export class SearchImagePosterComponent {
  longText='';
  @Input() imagePosterList:any[]=[];
}
