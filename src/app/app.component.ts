import { Component, OnInit } from '@angular/core';
import { ResSiteSetting } from './modals/resSiteSetting';
import { SiteSetting } from './modals/siteSetting';
import { SiteSettingService } from './services/site-setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  siteSetting : SiteSetting = new SiteSetting();
  constructor(private siteSettingServices : SiteSettingService){
  }

  title = 'iRich';

  ngOnInit(): void {
    
    this.siteSettingServices.getSiteSettings().then(res => {
      this.siteSetting = res.data;
      console.log(res);
    }).catch(err => {
      this.siteSetting = new ResSiteSetting().data;
    });


  }

  
  
}
