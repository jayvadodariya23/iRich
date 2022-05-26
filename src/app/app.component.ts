import { Component, OnInit } from '@angular/core';
import { DocumentHome } from './modals/document';
import { getDocumentResponse } from './modals/documents';
import { ResSiteSetting } from './modals/resSiteSetting';
import { SiteSetting } from './modals/siteSetting';
import { BlogService } from './services/blog.service';
import { SiteSettingService } from './services/site-setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  siteSetting : SiteSetting = new SiteSetting();

  document: DocumentHome[] = new getDocumentResponse().data;
  
  constructor(private siteSettingServices : SiteSettingService, private blogService: BlogService){
  }

  title = 'iRich';

  ngOnInit(): void {
    
    this.siteSettingServices.getSiteSettings().then(res => {
      this.siteSetting = res.data;
      console.log(res);
    }).catch(err => {
      this.siteSetting = new ResSiteSetting().data;
    });

    this.blogService.getAllDocuments().then(res => {
      this.document = res.data;
    }).catch(err => {
      this.document = new getDocumentResponse().data;
    });


  }

  
  
}
