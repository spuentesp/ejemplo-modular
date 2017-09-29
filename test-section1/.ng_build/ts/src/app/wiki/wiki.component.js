import { Component } from '@angular/core';
export class WikiComponent {
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
function WikiComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    WikiComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    WikiComponent.ctorParameters;
}
//# sourceMappingURL=wiki.component.js.map