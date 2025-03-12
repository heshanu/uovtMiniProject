import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerdetailsInterface } from '../model/customerDetailsInterface';

@Injectable({
  providedIn: 'root'
})
export class CustomerdetailsService {

   private apiUrl = 'http://localhost:3000'; // URL of your Node.js server
  
    registerCustomer(customer:CustomerdetailsInterface): Observable<any> {
      return this.http.post(`${this.apiUrl}/createCustomer`, customer);
    }

    getAllCustomers():Observable<any>{
      return this.http.get(`${this.apiUrl}/allCustomers`);
    }
  
    constructor(private http:HttpClient) {
  
     }
}
