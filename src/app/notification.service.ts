import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private dataSubject = new BehaviorSubject<string>('Initial Value');

  data$: Observable<string> = this.dataSubject.asObservable();

  // Method to update the value
  updateData(newValue: string):void{
    console.log("inside the updateDate");
    this.dataSubject.next(newValue);
    console.log('Updated to:', newValue);
  }

}
