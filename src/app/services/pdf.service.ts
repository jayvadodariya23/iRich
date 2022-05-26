import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PDFService {

  constructor(private httpClient : HttpClient) { }

  getPDF(url : string){
    return this.httpClient.get<any>(url, { 'responseType' : 'blob' as 'json'});
  }
}
