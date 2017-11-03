import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html',
})
export class PaymentMethodPage {

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodPage');
  }

    onDismiss(){
        this.viewCtrl.dismiss();
    }
}
