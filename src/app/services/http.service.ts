import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient : HttpClient) { }

  get<T>(url : string):Observable<T>{
    return this.httpClient.get<T>(url);
  }

  post<T>(url : string,data : any):Observable<T>{
    debugger;
    return this.httpClient.post<T>(url,data);
  }
}
