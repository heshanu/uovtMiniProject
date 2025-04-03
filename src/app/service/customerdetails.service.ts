import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerdetailsInterface } from '../model/customerDetailsInterface';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerdetailsService {

  private apiUrl = 'https://uovtminiprj-backend.vercel.app' 
  
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
