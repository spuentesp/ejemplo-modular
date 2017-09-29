import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WikiComponent],
  exports: [WikiComponent]
})
export class WikiModule { }
