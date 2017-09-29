import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var WikiComponent = (function () {
    function WikiComponent() {
    }
    /**
     * @return {?}
     */
    WikiComponent.prototype.ngOnInit = function () {
    };
    return WikiComponent;
}());
WikiComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-wiki',
                template: "\n    <ul>\n      <li>\n        <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n      </li>\n    </ul>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
WikiComponent.ctorParameters = function () { return []; };
var WikiModule = (function () {
    function WikiModule() {
    }
    return WikiModule;
}());
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
WikiModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { WikiModule, WikiComponent as ɵa };
//# sourceMappingURL=test-section1.es5.js.map
