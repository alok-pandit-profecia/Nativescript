"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var LoginBlockComponent = (function () {
    function LoginBlockComponent(_router) {
        this._router = _router;
    }
    LoginBlockComponent.prototype.onTap = function () {
        this._router.navigate(["/dashboard"]);
    };
    LoginBlockComponent = __decorate([
        core_1.Component({
            selector: 'login-block',
            templateUrl: 'reusable-components/login-block.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginBlockComponent);
    return LoginBlockComponent;
}());
exports.LoginBlockComponent = LoginBlockComponent;
//# sourceMappingURL=login-block.component.js.map