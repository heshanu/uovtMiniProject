import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerObjectService {

  constructor() { }

  private dataSubject = new Subject<any>();

  // Observable that components can subscribe to
  data$ = this.dataSubject.asObservable();

  // Method to set data
  setData(data: any) {
    this.dataSubject.next(data);
  }
}
