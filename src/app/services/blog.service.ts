import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { getBlogsResponse } from '../modals/blogs';

let BASE_URL = "https://unesco.notionprojects.tech/api";

let formdata : FormData = new FormData();
formdata.append("token","123456789");

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpService : HttpService) { }

  getAllBlogs(){

    let res = new Promise<getBlogsResponse>( (resolve, reject)=> {
      this.httpService.post<getBlogsResponse>(BASE_URL+"/get_blogs",formdata).subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    return res;
  }

}
