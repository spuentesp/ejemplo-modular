import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class WikiComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
WikiComponent.decorators = [
    { type: Component, args: [{
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
            },] },
];
/**
 * @nocollapse
 */
WikiComponent.ctorParameters = () => [];

class WikiModule {
}
WikiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [WikiComponent],
                exports: [WikiComponent]
            },] },
];
/**
 * @nocollapse
 */
WikiModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { WikiModule, WikiComponent as ɵa };
//# sourceMappingURL=test-section1.js.map
