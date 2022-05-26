import { Component, OnInit } from '@angular/core';
declare var $ : any;


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    InitializeBanner();
  }

}

let InitializeBanner = () => {
  setTimeout(() => {
    $('.irch-ban-carousel').owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      items: 1,
      autoPlay: true,
      rewind : true
    })
  }, 500);
}
