import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';

let formdata : FormData = new FormData();
formdata.append("token","123456789");

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private footerService : FooterService) { }

  ngOnInit(): void {
  }

  subscribeEmailClick = () => {
    debugger;
    let res = "";
    let data = {
      email : "testEmail@gmail.com"
    }
   
    this.footerService.subscribe_email(data).then(res => {
      res = res;
    }).catch(err => {
      res = err;
    });

  }
}
