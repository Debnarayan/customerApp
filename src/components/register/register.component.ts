import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordValidator} from "../../validators/password.validator";
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

    registrationForm: FormGroup;

    // isPasswordMatched: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private iab: InAppBrowser) {
        console.log('Hello RegisterComponent Component');
    }


    ngOnInit() {

        // this.isPasswordMatched = this.formBuilder.group({
        //     password: ['', Validators.compose([
        //         Validators.minLength(5),
        //         Validators.required,
        //         Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        //     ])],
        //     confirm_password: ['', Validators.required]
        // }, (formGroup: FormGroup) => {
        //     return PasswordValidator.areEqual(formGroup);
        // });


        this.registrationForm = this.formBuilder.group({

                first_name: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[A-Za-z]+$')
                ])],
                last_name: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[A-Za-z]+$')
                ])],
                email: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
                ])],
                password: ['', Validators.compose([
                    Validators.minLength(5),
                    Validators.required,
                    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])],
                confirm_password: ['', Validators.compose([
                    Validators.minLength(5),
                    Validators.required,
                    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                ])],
                // matching_passwords: this.isPasswordMatched,
                phone: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern('^\\d{10}$')
                ])],
                mode_of_communication: ['all', Validators.required],
                dob: ['', Validators.required],
                address: ['', Validators.required],
                state: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z ]*$')
                ])],
                city: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z ]*$')
                ])],
                pincode: ['', Validators.required],
                card_number: [''],
                card_security_key: [''],
                is_subscribe: [true],
                terms: [true, Validators.pattern('true')]
            },
            {
                validator: PasswordValidator.matchingPasswords('password', 'confirm_password')
            });

    }


    validationMessages = {
        'first_name': [
            {type: 'required', message: 'Name is required.'},
            {type: 'pattern', message: 'Enter a valid First Name.'}
        ],
        'last_name': [
            {type: 'required', message: 'Last name is required.'},
            {type: 'pattern', message: 'Enter a valid Last Name.'}
        ],
        'email': [
            {type: 'required', message: 'Email is required.'},
            {type: 'pattern', message: 'Enter a valid Email.'}
        ],
        'password': [
            {type: 'required', message: 'Password is required.'},
            {type: 'minlength', message: 'Password must be at least 5 characters long.'},
            {
                type: 'pattern',
                message: 'Your password must contain at least one uppercase, one lowercase, and one number.'
            }
        ],
        'confirm_password': [
            {type: 'required', message: 'Confirm password is required'}
        ],
        'matching_passwords': [
            {type: 'mismatchedPasswords', message: 'Password mismatch'}
        ],
        'phone': [
            {type: 'required', message: 'Phone is required.'},
            {type: 'pattern', message: 'Enter 10 Digit Phone Number.'}
        ],
        'dob': [
            {type: 'required', message: 'Date of birth is required.'}
        ],
        'address': [
            {type: 'required', message: 'Address is required.'}
        ],
        'state': [
            {type: 'required', message: 'State is required.'},
            {type: 'pattern', message: 'Enter a valid State Name.'}
        ],
        'city': [
            {type: 'required', message: 'City is required.'},
            {type: 'pattern', message: 'Enter a valid City Name.'}
        ],
        'pincode': [
            {type: 'required', message: 'Pincode is required.'}
        ],
        'terms': [
            {type: 'pattern', message: 'You must accept terms and conditions.'}
        ]
    };

    onSubmit(formValue) {
        console.log(formValue);
        console.log(this.registrationForm.value)
    }

    viewTerms() {
        this.iab.create('http://www.starbucks.in/about-us/company-information/online-policies/terms-of-use');
    }

    viewPolicy() {
        this.iab.create('http://www.starbucks.in/card/learn-more/privacy-policy');
    }

}
