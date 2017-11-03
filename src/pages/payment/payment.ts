import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Payment} from "../../interfaces/payment.interface";
import {LoadingService} from "../../providers/loading/loading.service";

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
    bill:Object;
    paymentData:any = {};
    hasSavedCard:boolean = false;
  constructor(private loading: LoadingService,
              private navParams: NavParams) {
      this.bill = navParams.get('bill');
      this.paymentData.amount = this.bill['total_price'].toString();
      this.paymentData.description = "EPOS_Store_Name";
      this.paymentData.intent = "sale";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

    checkCustomerCardDataAvailability(ev){
      this.hasSavedCard = ev;
      this.loading.dismissLoading();
    }

}
