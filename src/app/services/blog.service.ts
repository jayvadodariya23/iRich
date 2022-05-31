import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { getBlogsResponse } from '../modals/blogs';
import { getBlogDetail } from '../modals/resBlogDetail';
import { getDocumentResponse } from '../modals/documents';


let formdata : FormData = new FormData();
formdata.append("token","123456789");

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpService : HttpService) { }

  getAllBlogs(){

   let res = new Promise<getBlogsResponse>( (resolve, reject)=> {
      this.httpService.post<getBlogsResponse>("/get_blogs_for_home",formdata).subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    return res;
    
  }
  
  getAllDocuments(){

    let res = new Promise<getDocumentResponse>( (resolve, reject)=> {
       this.httpService.post<getDocumentResponse>("/get_documents",formdata).subscribe((response)=>{
         resolve(response);
       },(error)=> {
         reject(error);
       });
 
     });
     return res;
     
   }

  getBlogDetail(blog_id : string){
      let data : any = {
        blog_id : blog_id
      }
      for(let key in data){
        formdata.append(key,data[key]);
      }
      let res = new Promise<getBlogDetail>( (resolve, reject)=> {
        this.httpService.post<getBlogDetail>("/get_blog_details",formdata).subscribe((response)=>{
          resolve(response);
        },(error)=> {
          reject(error);
        });

      });
      return res;
    }

  }

