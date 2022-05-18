import { Injectable } from '@angular/core';
import { Response } from '../modals/response';
import { HttpService } from './http.service';

let formdata : FormData = new FormData();
formdata.append("token","123456789");


@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private httpService : HttpService) { }

  subscribe_email = (dataObj : any) => {

    for(let key in dataObj){
      formdata.append(key,dataObj[key]);
    }
    debugger;
    let res = new Promise<Response>( (resolve, reject)=> {

      this.httpService.post<Response>("/email_subscribe",formdata).subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    
    return res;

  }
}
