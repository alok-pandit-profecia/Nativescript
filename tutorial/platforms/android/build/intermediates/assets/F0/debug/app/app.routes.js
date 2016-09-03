"use strict";
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./Pages/Login/login.component");
var dashboard_component_1 = require('./Pages/Dashboard/dashboard.component');
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=app.routes.js.map