import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService{

  private apiUrl = 'https://api.pexels.com/v1/search';
  private apiKey = 'environment.apiKe';

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
