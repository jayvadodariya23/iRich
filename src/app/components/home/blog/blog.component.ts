import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Blog } from 'src/app/modals/blog';
import { getBlogsResponse } from 'src/app/modals/blogs';
import { BlogService } from 'src/app/services/blog.service';
declare var $ : any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Blogs :Blog[] = new getBlogsResponse().data; 

  constructor(private blogService : BlogService, private ngxUiService : NgxUiLoaderService) {
  
  }

  ngOnInit(): void {
    this.ngxUiService.start();
    this.blogService.getAllBlogs().then(res => {
      this.Blogs = res.data;
      this.InitializeBlog();
      
    }).catch(err => {
      this.Blogs = new getBlogsResponse().data;
    });

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
