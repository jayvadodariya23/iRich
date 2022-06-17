import { Component, Input, OnInit } from '@angular/core';
import { SiteSetting } from 'src/app/modals/siteSetting';
import { ViewportScroller } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
declare var $ : any;

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
    })
  }

}

