import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerObjectService {

  private customerId$ = new BehaviorSubject<string | null>(null);

  setCustomerId(id: string) {
    this.customerId$.next(id);
  }

  getCustomerId() {
    return this.customerId$.asObservable();
  }

  clearCustomerId() {
    this.customerId$.next(null);
  }
}
