import { Injectable } from '@angular/core';
import { ResSiteSetting } from '../modals/resSiteSetting';
import { HttpService } from './http.service';

let formdata : FormData = new FormData();
formdata.append("token","123456789");

@Injectable({
  providedIn: 'root'
})
export class SiteSettingService {

  constructor(private httpService : HttpService) { }

  
  getSiteSettings = () => {
    let res = new Promise<ResSiteSetting>( (resolve, reject)=> {
      
      this.httpService.post<ResSiteSetting>("/get_site_setting",formdata).subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    return res;
  }

}
