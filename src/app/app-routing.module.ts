import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';
import { HeritageDetailsComponent } from './components/home/heritage-details/heritage-details.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  { path : '', component:HomeComponent },
  { path : 'home', component : HomeComponent },
  { path : 'map', component:MapComponent },
  { path : 'privacyPolicy', component : PrivacyPolicyComponent },
  { path : 'terms-Condition', component : TermsAndConditionComponent },
  { path : 'aboutUs', component : AboutUsComponent },
  { path : 'place-detail/:id', component :PlaceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
