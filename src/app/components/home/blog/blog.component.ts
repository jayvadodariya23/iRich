import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { map, startWith } from 'rxjs';
import { Blog } from 'src/app/modals/blog';
import { getBlogsResponse } from 'src/app/modals/blogs';
import { BlogService } from 'src/app/services/blog.service';
declare var $ : any;

const CACHE_KEY : string = "httpCache";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Blogs :Blog[] = new getBlogsResponse().data; 
  data:any;

  noImagePlaceHolder : string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkqvIEIUmRnqURQ__ruETeyRLsxpghoPQXg&usqp=CAU';

  constructor(private blogService : BlogService, private ngxUiService : NgxUiLoaderService, private httpClient : HttpClient) {
    const path : string = "https://reqres.in/api/users?delay=10";

    this.data = this.httpClient.get<any>(path).pipe(
      map(data => data.data)
    );

    this.data.subscribe((datas:any)  => {
      localStorage[CACHE_KEY] = JSON.stringify(datas);
    });

    this.data = this.data.pipe(
      startWith(JSON.parse(localStorage[CACHE_KEY] || '[]'))
    )
  }


  

  ngOnInit(): void {
    this.ngxUiService.start();

    // this.blogService.getAllBlogs().then(res => {
    //   this.Blogs = res.data;
     this.InitializeBlog();
      
    // }).catch(err => {
    //   this.Blogs = new getBlogsResponse().data;
    // });
    

  }


  InitializeBlog = () => {
    setTimeout(() => {
      $('.irch-blog-carousel').owlCarousel({
        loop: false,
        margin: 20,
        dots: true,
        nav: false,
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
      }); 
      this.ngxUiService.stop();
    }, 3000);
  }


}
