import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordValidator} from "../../validators/password.validator";

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

    registrationForm: FormGroup;
    isPasswordMatched: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    console.log('Hello RegisterComponent Component ');
  }

  ionViewWillLoad(){
      this.isPasswordMatched = this.formBuilder.group({
          password: ['', Validators.compose([
              Validators.minLength(5),
              Validators.required,
              Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
          ])],
          confirm_password: ['', Validators.required]
      }, (formGroup: FormGroup) => {
          return PasswordValidator.areEqual(formGroup);
      });
  }

    ngOnInit() {

        this.registrationForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            matching_passwords: this.isPasswordMatched,
            email: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
            ])],
            password: ['', Validators.compose([
                Validators.minLength(5),
                Validators.required,
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])],
            phone: ['', Validators.required],
            terms: [true, Validators.pattern('true')]
        });
    }

    validationMessages = {
        'firstname': [
            { type: 'required', message: 'Name is required.' }
        ],
        'lastname': [
            { type: 'required', message: 'Last name is required.' }
        ],
        'email': [
            { type: 'required', message: 'Email is required.' },
            { type: 'pattern', message: 'Enter a valid email.' }
        ],
        'password': [
            { type: 'required', message: 'Password is required.' },
            { type: 'minlength', message: 'Password must be at least 5 characters long.' },
            { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
        ],
        'confirm_password': [
            { type: 'required', message: 'Confirm password is required' }
        ],
        'matching_passwords': [
            { type: 'areEqual', message: 'Password mismatch' }
        ],
        'phone': [
            { type: 'required', message: 'Phone is required.' }
        ],
        'terms': [
            { type: 'pattern', message: 'You must accept terms and conditions.' }
        ]
    };

    onSubmit(formValue) {
        console.log(formValue);
        console.log(this.registrationForm.value)
    }

}
