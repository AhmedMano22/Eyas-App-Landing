import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './components/landing/landing.component';
import { BlogComponent } from './components/blog/blog.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { DownloadEyasPeopleComponent } from './components/download-eyas-people/download-eyas-people.component';
import { DownloadEyasBusinessComponent } from './components/download-eyas-business/download-eyas-business.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DownloadEyasLawyerComponent } from './components/download-eyas-lawyer/download-eyas-lawyer.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SharedModule } from "../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DiscoverComponent } from './components/discover/discover.component';
import { LawDictionaryComponent } from './components/law-dictionary/law-dictionary.component';
import { FrequentlyAskedQuestionsComponent } from './components/frequently-asked-questions/frequently-asked-questions.component';
import { CareersComponent } from './components/careers/careers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersStoriesComponent } from './components/users-stories/users-stories.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewsLetterSignupComponent } from './components/news-letter-signup/news-letter-signup.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component'
@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    BlogComponent,
    OurStoryComponent,
    WhatWeDoComponent,
    DownloadEyasPeopleComponent,
    DownloadEyasBusinessComponent,
    AboutUsComponent,
    DownloadEyasLawyerComponent,
    DiscoverComponent,
    LawDictionaryComponent,
    FrequentlyAskedQuestionsComponent,
    CareersComponent,
    UsersStoriesComponent,
    NewsLetterSignupComponent,
    ContactUsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule,
    ScrollToModule,
    NgbModule,
    CarouselModule,
    NgxCaptchaModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
