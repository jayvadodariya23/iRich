import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/app/services/contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private contactUsService : ContactusService) { 

  }

  ngOnInit(): void {
   

    


  }

  sendMessage = () => {
    let res = "";
    
    let data = {
      full_name : "name",
      email : "tset@gmail.com",
      number : "9427962909",
      message : "hy"
    }

    this.contactUsService.saveContactInquiry(data).then(res => {
      res = res;
    }).catch(err => {
      res = err;
    });

    
  }

}
