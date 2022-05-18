import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { getTermsAndConditionResponse } from 'src/app/modals/resTermsAndCondition';

let formdata : FormData = new FormData();
formdata.append("token","123456789");

@Injectable({
  providedIn: 'root'
})
export class TermsAndConditionService {

  constructor(private httpService : HttpService) { }

  getTermsAndCondition = () => {

    let res = new Promise<getTermsAndConditionResponse>( (resolve, reject)=> {
      this.httpService.post<getTermsAndConditionResponse>("/get_term_condition_page",formdata).subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    return res;

  }
}
