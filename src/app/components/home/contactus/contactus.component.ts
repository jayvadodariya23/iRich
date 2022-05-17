import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/modals/blog';
import { getBlogsResponse } from 'src/app/modals/blogs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  Blogs :Blog[] = new getBlogsResponse().data; 

  constructor(private blogService : BlogService) { 

    blogService.getAllBlogs().then(res => {
      this.Blogs = res.data;
    }).catch(err => {
      this.Blogs = new getBlogsResponse().data;
    });
  }

  ngOnInit(): void {
  }

}
