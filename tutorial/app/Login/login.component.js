"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(_router) {
        this._router = _router;
    }
    LoginComponent.prototype.onTap = function () {
        this._router.navigate(["/dashboard"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'Login/login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map