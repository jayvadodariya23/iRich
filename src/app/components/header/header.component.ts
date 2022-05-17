import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutClick = () => {
    debugger;
    document.getElementById("heritageDetails")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});
  }

  contactClick = () => {
    document.getElementById("contactus")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});
  }

  dowloadClick = () => {
    document.getElementById("gridGallery")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});
  }

  blogClick = () => {
    document.getElementById("blog")?.scrollIntoView({behavior:'smooth',block: 'start', inline: 'start'});
  }

}
