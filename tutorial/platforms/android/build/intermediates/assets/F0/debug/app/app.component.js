"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
    }
    AppComponent.prototype.onTap = function () {
        this._router.navigate(["/dashboard"]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            template: "<page-router-outlet></page-router-outlet>"
        }), 
        __metadata('design:paramtypes', [router_2.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map