import { BlogComponent } from './blog/blog.component';
import { WikiComponent } from './wiki/wiki.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'tutorial',  component: TutorialComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
