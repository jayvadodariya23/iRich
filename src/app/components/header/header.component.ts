import { Component, Input, OnInit } from '@angular/core';
import { SiteSetting } from 'src/app/modals/siteSetting';
import { ViewportScroller } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() siteSetting : SiteSetting;

  hash : string = "";
  
  constructor(private scroller : ViewportScroller, private router : ActivatedRoute) { 
    this.siteSetting = new SiteSetting();
  }

  ngOnInit(): void {
    this.router.fragment.subscribe((fragment) => {
      this.hash  = (fragment)? fragment: '';
      console.log(fragment);
    })
  }

  // aboutClick = () => {
  //   document.getElementById("heritageDetails")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});

  // }

  // contactClick = () => {
  //   document.getElementById("contactus")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});
  // }

  //dowloadClick = () => {
    //document.getElementById("gridGallery")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});
    //this.scroller.scrollToAnchor('gridGallery');
  //}

  // blogClick = () => {
  //   document.getElementById("blog")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});
  // }

}
