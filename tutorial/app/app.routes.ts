import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {LoginComponent} from "./Login/login.component";
import {DashboardComponent} from './Dashboard/dashboard.component';

export const routes: RouterConfig = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];