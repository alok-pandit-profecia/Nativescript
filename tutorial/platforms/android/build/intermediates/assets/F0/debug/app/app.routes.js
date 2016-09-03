"use strict";
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require('./Dashboard/dashboard.component');
exports.routes = [
    { path: "", component: app_component_1.AppComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=app.routes.js.map