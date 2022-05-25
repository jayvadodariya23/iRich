import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/modals/contact';
import { ContactusService } from 'src/app/services/contactus.service';
import { NotificationService } from 'src/app/services/notification.service';
declare var $ : any;


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private contactUsService : ContactusService, private notificationServices : NotificationService) { 

  }

  data : Contact = new Contact();
  emailRegex : RegExp = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
  ngOnInit(): void {
  }

  sendMessage = () => {

    if(!this.data.email.match(this.emailRegex)){
      this.notificationServices.showError("Please Enter Valid Email","Fail");
      return;
    }
    else if(this.data.full_name == ""){
      this.notificationServices.showError("Please Enter Your Name","Fail");
      return;
    }
    else if(this.data.number.length != 10){
      this.notificationServices.showError("Mobile Number Length Should be 10","Fail");
      return;
    }
    else if(this.data.message == ""){
      this.notificationServices.showError("Please Enter What Would You Like to know about?","Fail");
      return;
    }

    this.contactUsService.saveContactInquiry(this.data).then(res => {
      if(res.status)
      {
        this.notificationServices.showSuccess(res.message,"Success");
        this.clear();
      }
      else
      {
        this.notificationServices.showError(res.message,"Fail.");
      }
    }).catch(err => {
      this.notificationServices.showError("Something Went Wrong","Fail.");
    });

    
  }

  public IsDigit(event :any) {
    const keyCode = (event.which) ? event.which : event.keyCode;
    if ($.inArray(keyCode, [8, 9, 27, 13, 190]) !== -1 ||
        (keyCode == 65 && (event.ctrlKey === true || event.metaKey === true))) {
        return;
    }
    if ((event.shiftKey || (keyCode < 48 || keyCode > 57))) {
        event.preventDefault();
    }
  }

  clear = () => {
    this.data.full_name = "";
    this.data.message = "";
    this.data.email = "";
    this.data.number = "";
  }

}
