import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { HeritageComponent } from './components/home/heritage/heritage.component';
import { HeritageDetailsComponent } from './components/home/heritage-details/heritage-details.component';
import { HeritageGalleryComponent } from './components/home/heritage-gallery/heritage-gallery.component';
import { GridGalleryComponent } from './components/home/grid-gallery/grid-gallery.component';
import { VideoComponent } from './components/home/video/video.component';
import { ContactusComponent } from './components/home/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/home/blog/blog.component';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    HeritageComponent,
    HeritageDetailsComponent,
    HeritageGalleryComponent,
    GridGalleryComponent,
    VideoComponent,
    ContactusComponent,
    FooterComponent,
    BlogComponent,
    MapComponent,
    PrivacyPolicyComponent,
    TermsAndConditionComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
