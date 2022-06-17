import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';
import { AgmCoreModule } from '@agm/core';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor : "#fff",
  fgsSize: 60,
  fgsPosition: "center-center",
  blur: 15,
  fgsType: SPINNER.squareJellyBox, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 3, // progress bar thickness
  overlayColor: "rgba(40, 40, 40, 0.92)",
  pbColor: "#fff"
};

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
    AboutUsComponent,
    PlaceDetailComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyCBZ1E4AGu6xP_VV4GWr_qjnOte9sFmh0A'
    }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    // NgxUiLoaderHttpModule.forRoot({ showForeground : true })
    //NgxUiLoaderRouterModule.forRoot({ showForeground : true })
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
