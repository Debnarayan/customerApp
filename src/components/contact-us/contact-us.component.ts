import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactUsForm} from "../../interfaces/contact-us.interface";
import {AuthUserProvider} from "../../providers/auth/auth-user.service";

@Component({
  selector: 'app-contact-us',
  templateUrl: 'contact-us.component.html'
})
export class ContactUsComponent implements OnInit{

    contactUsForm: FormGroup;
    @Output() contactUsResponse: EventEmitter<ContactUsForm>;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthUserProvider) {
    console.log('Hello ContactUsComponent Component');
      this.contactUsResponse = new EventEmitter<ContactUsForm>();
  }

  ngOnInit(){
      this.contactUsForm = this.formBuilder.group({

          name: ['', Validators.compose([
              Validators.required,
              Validators.pattern('^[a-zA-Z\\s]*$')
          ])],
          email: ['', Validators.compose([
              Validators.required,
              Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
          ])],
          phone: [''],
          subject: ['',Validators.required],
          description: ['']
      })
  }

    validationMessages = {
        'name': [
            { type: 'required', message: 'Name is required.' },
            { type: 'pattern', message: 'Enter a valid Name.' }
        ],
        'email': [
            { type: 'required', message: 'Email is required.' },
            { type: 'pattern', message: 'Enter a valid Email.' }
        ],
        'subject': [
            { type: 'required', message: 'Subject is required.' }
        ]
    };

    async onSubmit({value, valid}: { value: ContactUsForm, valid: Boolean }) {
        if (valid) {
            console.log(value);
            await this.auth.getResponse(value, 'secure/contact_support')
                .subscribe((data) => {
                    this.contactUsResponse.emit(data);
                    this.contactUsForm.reset();
                })
        }
    }

}
