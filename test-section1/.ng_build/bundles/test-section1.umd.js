(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['test-section1'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
    { type: core.Component, args: [{
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [WikiComponent],
                exports: [WikiComponent]
            },] },
];
/**
 * @nocollapse
 */
WikiModule.ctorParameters = function () { return []; };

exports.WikiModule = WikiModule;
exports.ɵa = WikiComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=test-section1.umd.js.map
