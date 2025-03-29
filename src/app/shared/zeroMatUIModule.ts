import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';


@NgModule({
  declarations: [
   
  ],
  imports: [
    NzFormModule,NzTimePickerModule,NzDatePickerModule,NzButtonModule 

  ],
  exports:[
    NzFormModule,NzTimePickerModule, NzDatePickerModule,NzButtonModule 
  ]
})
export class ZeroMaterialUIModule { }
