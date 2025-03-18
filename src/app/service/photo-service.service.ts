import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService{

  private apiUrl = 'https://api.pexels.com/v1/search';
  private apiKey = '9BjmTonkuZo6jlKHv3phLYvD3s23TXfzb94kL2QDZXc9wF1QfRAISX65'; // Replace with your Pexels API key

  constructor(private http: HttpClient) { }
  
  getImages(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.apiKey
    });

    return this.http.get(this.apiUrl, { headers });
  }

  

  findImageByName(query: string, perPage: number = 5): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.apiKey
    });

    return this.http.get(this.apiUrl, {
      headers,
      params: { query, per_page: perPage.toString() }
    });
  }
}
