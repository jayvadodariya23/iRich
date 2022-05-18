import { Component, OnInit } from '@angular/core';
import { AboutUsService } from 'src/app/services/about-us.service';
import { AboutUs } from 'src/app/modals/aboutUs';
import { getAboutUsResponse } from 'src/app/modals/resAboutUs';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private aboutUsServices : AboutUsService) { }

  aboutUs : AboutUs[] = new getAboutUsResponse().data;

  ngOnInit(): void {

    this.aboutUsServices.getAboutUs().then(res => {
      this.aboutUs = res.data;
      console.log(res);
    }).catch(err => {
      this.aboutUs = new getAboutUsResponse().data;
    });


  }


}
