import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkHelperService {
  private _baseUrl = "https://restcountries.com/v3.1/"

  constructor(private http: HttpClient) { }

  getRequest<T>(path: string): Observable<T>{
    const url = this._baseUrl + path
    return this.http.get<T>(url);
  }
}
