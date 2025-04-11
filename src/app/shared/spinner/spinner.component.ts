import { Component } from '@angular/core';
import { SpinnerService } from '../../service/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {

  constructor(private spinnerService:SpinnerService){}

  isLoading = this.spinnerService.loading$;
 
  
}
