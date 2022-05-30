import { Component, OnInit } from '@angular/core';
import { PrivacyPolicyServices } from 'src/app/services/privacy-policy.service';
import { getPrivacyPolicyResponse } from 'src/app/modals/resPrivacyPolicy';
import { PrivacyPolicy } from 'src/app/modals/privacyPolicy';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  privacyPolicy :PrivacyPolicy[] = new getPrivacyPolicyResponse().data;

  constructor(private privacyPolicyServices : PrivacyPolicyServices, private uiLoader : NgxUiLoaderService) { }

  ngOnInit(): void {
    this.privacyPolicyServices.getPrivacyPolicy().then(res => {
      this.privacyPolicy = res.data;
      console.log(res);
    }).catch(err => {
      this.privacyPolicy = new getPrivacyPolicyResponse().data;
    });

  }

}
