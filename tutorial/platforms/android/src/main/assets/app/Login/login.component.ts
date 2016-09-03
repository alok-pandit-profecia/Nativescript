import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'Login/login.component.html'
}) 

export class LoginComponent {

    constructor(private _router: Router) {}

    onTap() {
        this._router.navigate(["/dashboard"]);
    }
}