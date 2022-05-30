import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
declare var $ : any;


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(public uiloader : NgxUiLoaderService) { }

  ngOnInit(): void {
    this.InitializeBanner();
  }

  InitializeBanner = () => {
    setTimeout(() => {
      $('.irch-ban-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        items: 1,
        autoPlay: true,
        rewind : true
      });
    }, 250);
  }

}
