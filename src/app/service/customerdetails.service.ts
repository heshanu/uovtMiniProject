import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerdetailsInterface } from '../model/customerDetailsInterface';

@Injectable({
  providedIn: 'root'
})
export class CustomerdetailsService {


  private apiUrl = 'http://localhost:3000'; // URL of your Node.js server
  
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  registerCustomer(customer: CustomerdetailsInterface): Observable<CustomerdetailsInterface> {
    return this.http.post<CustomerdetailsInterface>(`${this.apiUrl}/createCustomer`, customer, { headers: this.headers });
  }

  getAllCustomers(): Observable<CustomerdetailsInterface[]> {
    return this.http.get<CustomerdetailsInterface[]>(`${this.apiUrl}/allCustomers`);
  }

  getDetailsByCustomerId(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getCustomerById/${id}`);
  }
}
