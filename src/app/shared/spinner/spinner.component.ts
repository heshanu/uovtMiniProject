import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrl: './spinner.component.css',
    standalone: false
})
export class SpinnerComponent {

  @Input() isLoading:any;
  
}
