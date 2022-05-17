import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/modals/blog';
import { getBlogsResponse } from 'src/app/modals/blogs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Blogs :Blog[] = new getBlogsResponse().data; 

  constructor(private blogService : BlogService) {

  }

  ngOnInit(): void {

    this.blogService.getAllBlogs().then(res => {
      this.Blogs = res.data;
    }).catch(err => {
      this.Blogs = new getBlogsResponse().data;
    });

  }


}
