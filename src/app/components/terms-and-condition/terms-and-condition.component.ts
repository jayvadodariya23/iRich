import { Component, OnInit } from '@angular/core';
import { TermsAndCondition } from 'src/app/modals/termsAndCondition';
import { getTermsAndConditionResponse } from 'src/app/modals/resTermsAndCondition';
import { TermsAndConditionService } from 'src/app/services/terms-and-condition.service';

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.css']
})
export class TermsAndConditionComponent implements OnInit {

  constructor(private termsAndConditionServices : TermsAndConditionService) { }

  termsAndCondition :TermsAndCondition[] = new getTermsAndConditionResponse().data;
  

  ngOnInit(): void {

    this.termsAndConditionServices.getTermsAndCondition().then(res => {
      this.termsAndCondition = res.data;
      console.log(res);
    }).catch(err => {
      this.termsAndCondition = new getTermsAndConditionResponse().data;
    });

  }

}
