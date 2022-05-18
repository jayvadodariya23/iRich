import { Component, OnInit } from '@angular/core';
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

  constructor(private footerService : FooterService, private notificationService : NotificationService) { }

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
      }
      else{
        this.notificationService.showError(res.message,"Fail");
      }
    }).catch(err => {
      this.notificationService.showError("Something Went Wrong","Fail");
    });

  }
}
