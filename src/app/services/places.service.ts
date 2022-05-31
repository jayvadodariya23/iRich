import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { getPlacesResponse } from '../modals/places';
import { getPlaceDetail } from '../modals/resPlaceDetail';

let formdata : FormData = new FormData();
formdata.append("token","123456789");

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private httpService : HttpService) { }

  getPlaces = () => {

    let res = new Promise<getPlacesResponse>( (resolve, reject)=> {
      this.httpService.post<getPlacesResponse>("/get_places",formdata).subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    return res;

  }


  getPlaceDetail = (place_id : string) => {
    
    let data : any = {
      place_id : place_id
    }

    for(let key in data){
      formdata.append(key,data[key]);
    }

    let res = new Promise<getPlaceDetail>( (resolve, reject)=> {
      this.httpService.post<getPlaceDetail>("/get_place_detail",formdata).subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    return res;

  }

}
