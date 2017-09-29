import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki',
  template: `
    <ul>
      <li>
        <h2><a target="_blank" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
    </ul>
  `,
  styles: [`

  `]
})
export class WikiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
