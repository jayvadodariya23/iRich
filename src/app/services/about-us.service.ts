import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { getAboutUsResponse } from 'src/app/modals/resAboutUs';

let formdata : FormData = new FormData();
formdata.append("token","123456789");


@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private httpService : HttpService) { }

  getAboutUs = () => {

    let res = new Promise<getAboutUsResponse>( (resolve, reject)=> {
      this.httpService.post<getAboutUsResponse>("/get_about_us_page",formdata).subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    return res;
  }

}
