import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteSetting } from 'src/app/modals/siteSetting';
import { FooterService } from 'src/app/services/footer.service';
import { NotificationService } from 'src/app/services/notification.service';

let formdata : FormData = new FormData();
formdata.append("token","123456789");

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() siteSetting : SiteSetting;

  constructor(private footerService : FooterService, private notificationService : NotificationService, private router : Router) {
    this.siteSetting = new SiteSetting();
  }

  email = "";
  emailRegex : RegExp = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);

  ngOnInit(): void {
  }

  subscribeEmailClick = () => {
    let data = {
      email : this.email
    }

    if(!data.email.match(this.emailRegex)){
      this.notificationService.showError("Please Enter Valid Email","Fail");
      return;
    }
   
    this.footerService.subscribe_email(data).then(res => {
      if(res.status)
      {
        this.notificationService.showSuccess(res.message,"Sucssess");
        this.clear();
      }
      else{
        this.notificationService.showError(res.message,"Fail");
      }
    }).catch(err => {
      this.notificationService.showError("Something Went Wrong","Fail");
    });

  }

  aboutClick = () => {
    document.getElementById("heritageDetails")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});
  }

  contactClick = () => {
    document.getElementById("contactus")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});
  }

  blogClick = () => {
    document.getElementById("blog")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});
  }

  imageGalleryClick = () => {
    document.getElementById("HeritageGallery")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});
  }

  InteractiveMapClick = () => {
    this.router.navigate(['map']);
  }

  clear = () => {
    this.email = "";
  }
}
