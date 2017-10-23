import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Payment} from "../../interfaces/payment.interface";

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
    bill:Object;
    paymentData:any = {};
  constructor(private navCtrl: NavController, private navParams: NavParams) {
      this.bill = navParams.get('bill');
      this.paymentData.amount = this.bill['total_price'].toString();
      this.paymentData.description = "Sample Description";
      this.paymentData.intent = "sale";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
