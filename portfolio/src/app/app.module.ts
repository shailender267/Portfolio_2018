import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'bootstrap';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectPageComponent,
    AboutPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
