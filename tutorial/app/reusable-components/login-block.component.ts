import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:'login-block',
    templateUrl: 'reusable-components/login-block.component.html'
})

export class LoginBlockComponent {

    constructor(private _router: Router) {}

    onTap() {
        this._router.navigate(["/dashboard"]);
    }

}