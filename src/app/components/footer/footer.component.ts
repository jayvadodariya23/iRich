import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentHome } from 'src/app/modals/document';
import { getDocumentResponse } from 'src/app/modals/documents';
import { SiteSetting } from 'src/app/modals/siteSetting';
import { FooterService } from 'src/app/services/footer.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PDFService } from 'src/app/services/pdf.service';
import { saveAs } from 'file-saver';

let formdata : FormData = new FormData();
formdata.append("token","123456789");

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() siteSetting : SiteSetting;
  @Input() document : DocumentHome[];

  constructor(private footerService : FooterService, private notificationService : NotificationService, 
    private router : Router, private activatedRouter : ActivatedRoute, private pdfServices : PDFService) {
    this.siteSetting = new SiteSetting();
    this.document = new getDocumentResponse().data;
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

  clear = () => {
    this.email = "";
  }

  downloadMyFile(index: number) {
    // this.pdfServices.getPDF("https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK").subscribe((response) => {
    //   let file = new Blob([response], { type : 'application/pdf' });
    //   const fileName = this.document[0].document_name;
    //   saveAs(file,fileName);
    // });
    debugger;
    this.pdfServices.getPDF(this.document[index].file).subscribe((response) => {
      let file = new Blob([response], { type : 'application/pdf' });
      const fileName = this.document[0].document_name;
      saveAs(file,fileName);
    });

  }
  
}
