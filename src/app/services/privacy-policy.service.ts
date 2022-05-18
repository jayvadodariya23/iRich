import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { getPrivacyPolicyResponse } from 'src/app/modals/resPrivacyPolicy';

let formdata : FormData = new FormData();
formdata.append("token","123456789");

@Injectable({
  providedIn: 'root'
})
export class PrivacyPolicyServices {

  constructor(private httpService : HttpService) { }

  getPrivacyPolicy = () => {

    let res = new Promise<getPrivacyPolicyResponse>( (resolve, reject)=> {
      this.httpService.post<getPrivacyPolicyResponse>("/get_privacy_policy_page",formdata).subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    return res;
  }
}
