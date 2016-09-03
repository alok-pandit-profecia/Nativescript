import {Component} from '@angular/core';
import {LoginBlockComponent} from './../../reusable-components/login-block.component';

@Component({
    selector: 'login',
    templateUrl: 'Login/login.component.html',
    directives: [LoginBlockComponent]
}) 

export class LoginComponent {

}