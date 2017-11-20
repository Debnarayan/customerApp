import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@IonicPage()
@Component({
    selector: 'page-card-details',
    templateUrl: 'card-details.html',
})
export class CardDetailsPage implements OnInit {

    paymentMethod: String;
    cardDetails: FormGroup;
    PaymentTypes: Array<Object>;

    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private formBuilder: FormBuilder) {
        this.PaymentTypes =
            [{
                key: 'paypal',
                label: 'Pay Pal'
            },
            {
                key: 'debit',
                label: 'Debit Card'
            },
            {
                key: 'credit',
                label: 'Credit Card'
            }];
    }

    ngOnInit() {
        this.cardDetails = this.formBuilder.group({
            card_type: [''],
            cardholder_name: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[A-Z0-9\\s]+$')
            ])],
            card_number: ['', Validators.compose([
                Validators.required,
                Validators.maxLength(19),
                Validators.pattern('^[0-9]+$')
            ])],
            valid_to_month: ['', Validators.compose([
                Validators.required,
                Validators.maxLength(2),
                Validators.pattern('^[0-9]+$')
            ])],
            valid_to_year: ['', Validators.compose([
                Validators.required,
                Validators.maxLength(2),
                Validators.pattern('^[0-9]+$')
            ])],
            cvv: ['', Validators.compose([
                Validators.maxLength(3),
                Validators.pattern('^[0-9]*$')
            ])]
        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CardDetailsPage');
    }

    onSelect() {
        //save payment method type locally/server
        this.cardDetails.reset();
    }

}
