import { Injectable } from '@angular/core';
import { Response } from '../modals/response';
import { HttpService } from './http.service';

let formdata : FormData = new FormData();
formdata.append("token","123456789");

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private httpService : HttpService) { }

   saveContactInquiry = (dataObj : any) => {

    for(let key in dataObj){
      formdata.append(key,dataObj[key]);
    }

    let res = new Promise<Response>( (resolve, reject)=> {
      this.httpService.post<Response>("/contact_us",formdata).subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    return res;

  }

}
