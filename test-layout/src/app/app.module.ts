import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from 'test-header';
import { TutorialComponent } from './tutorial/tutorial.component';
import { WikiComponent } from './wiki/wiki.component';
import { BlogComponent } from './blog/blog.component';
import { WikiModule } from 'test-section1';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    WikiComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    WikiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
