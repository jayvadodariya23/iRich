import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralUtilitiesService {

  constructor() { }

  IsNullEmptyOrUndefined(value: any) {
    return value === null || value === undefined || value === '' ? true : false;
  }

  noImagePlaceHolder(){
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkqvIEIUmRnqURQ__ruETeyRLsxpghoPQXg&usqp=CAU";
  }
}
