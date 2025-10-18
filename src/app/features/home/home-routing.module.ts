import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { CareersComponent } from './components/careers/careers.component';
import { FrequentlyAskedQuestionsComponent } from './components/frequently-asked-questions/frequently-asked-questions.component';
import { LandingComponent } from './components/landing/landing.component';
import { LawDictionaryComponent } from './components/law-dictionary/law-dictionary.component';
import { HomeComponent } from './home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'faq', component: FrequentlyAskedQuestionsComponent },
      { path: 'law-dictionary', component: LawDictionaryComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },



    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
