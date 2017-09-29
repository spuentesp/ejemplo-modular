import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';
export class WikiModule {
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
function WikiModule_tsickle_Closure_declarations() {
    /** @type {?} */
    WikiModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    WikiModule.ctorParameters;
}
//# sourceMappingURL=wiki.module.js.map