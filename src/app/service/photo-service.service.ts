import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  private apiUrl = 'https://api.pexels.com/v1/curated';
  private apiKey = '9BjmTonkuZo6jlKHv3phLYvD3s23TXfzb94kL2QDZXc9wF1QfRAISX65'; // Replace with your Pexels API key

  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.apiKey
    });

    return this.http.get(this.apiUrl, { headers });
  }

  findImageByName(name: any): Observable<any> {
    // Create HTTP parameters
    const params = new HttpParams().set('name', name);

    // Make the HTTP GET request with the API key in the headers
    return this.http.get(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`
      },
      params: params
    });
  }
}
