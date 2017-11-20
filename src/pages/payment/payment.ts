import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Bill, Payment} from "../../interfaces/payment.interface";
import {LoadingService} from "../../providers/loading/loading.service";
import {DatabaseConfig} from "../../config/database.config";
import {GlobalConfig} from "../../config/global.config";
import {Gift} from "../../interfaces/artwork.interface";

@IonicPage()
@Component({
    selector: 'page-payment',
    templateUrl: 'payment.html',
})
export class PaymentPage implements OnInit {
    bill: Bill;
    paymentData: any = {};
    hasSavedCard: boolean = false;
    gift: any;
    payableAmount: number;
    updatedGiftBalance: number;

    constructor(private loading: LoadingService,
                private navParams: NavParams,
                private global: GlobalConfig,
                private dbConfig: DatabaseConfig) {
        this.bill = navParams.get('bill');
        this.gift = navParams.get('gift');
        this.paymentData.amount = this.bill['total_price'].toString();
        this.paymentData.description = "EPOS_Store_Name";
        this.paymentData.intent = "sale";
    }

    ngOnInit() {
        if (typeof this.gift !== 'undefined' && this.gift !== false) {
            if(this.gift.balance >= this.bill.total_price)
            {
                this.payableAmount = 0;
                this.updatedGiftBalance = this.gift.balance - this.bill.total_price;
            }else{
                this.payableAmount = this.bill.total_price - this.gift.balance;
            }
            this.payableAmount = Number(this.payableAmount.toFixed(2));
        } else {
            this.payableAmount = this.bill.total_price;
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PaymentPage');
    }

    checkCustomerCardDataAvailability(ev) {
        this.hasSavedCard = ev;
        this.loading.dismissLoading();
    }

}
