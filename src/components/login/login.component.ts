import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginForm} from "../../interfaces/login-form.interface";
import {AuthUserProvider} from "../../providers/auth/auth-user.service";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    @Output() loginResponse: EventEmitter<LoginForm>;

    constructor(private formBuilder: FormBuilder,
                private auth: AuthUserProvider) {
        console.log('Hello LoginComponent Component');
        this.loginResponse = new EventEmitter<LoginForm>();
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
            ])],
            password: ['', Validators.required]
        });
    }

    validationMessages = {
        'email': [
            {type: 'required', message: 'Email is required.'},
            {type: 'pattern', message: 'Enter a valid email.'}
        ],
        'password': [
            {type: 'required', message: 'Password is required.'}
        ]
    };

    async onSubmit({value, valid}: { value: LoginForm, valid: Boolean }) {
        if (valid) {
            await this.auth.getUserData(value, 'secure/cust_login')
                .subscribe((data) => {
                    this.loginResponse.emit(data);
                })
        }
    }

}
