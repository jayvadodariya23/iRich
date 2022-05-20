import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/modals/blog';
import { getBlogDetail } from 'src/app/modals/resBlogDetail';
import { BlogService } from 'src/app/services/blog.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {


  blog_id : string = "";
  blog : Blog = new getBlogDetail().data;

  constructor(private route: ActivatedRoute, private notificationService : NotificationService,
    private blogServices : BlogService) { }

  ngOnInit(): void {

    this.blog_id = this.route.snapshot.paramMap.get('id') || "";

    if(this.blog_id){

      this.blogServices.getBlogDetail(this.blog_id).then(res => {
        if(res.status)
        {
          this.blog  = res.data;
        }
        else
        {
          this.blog  = new getBlogDetail().data;
          this.notificationService.showError('No Place Found','Failed');
        }
      }).catch(err => {
        this.blog  = new getBlogDetail().data;
        this.notificationService.showError('Something Went Wrong','Failed');
      });

    }
    else{
      this.notificationService.showError('Something Went Wrong','Failed');
    }
    

  }

}
