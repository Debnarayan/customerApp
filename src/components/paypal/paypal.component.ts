import {Component, Input} from '@angular/core';
import {PayPalPayment} from "@ionic-native/paypal";
import {PayPalPaymentService} from "../../services/payment/paypal.service";
import {Payment} from "../../interfaces/payment.interface";
import {LoadingService} from "../../providers/loading/loading.service";

@Component({
  selector: 'app-paypal',
  templateUrl: 'paypal.component.html'
})
export class PayPalComponent {

  @Input('payment') payment:Payment;

  constructor(private payPal: PayPalPaymentService,
              private loading: LoadingService) {
    console.log('Hello PayPalComponent Component');
      this.loading.dismissLoading();
  }

  onSelectPayPalPayment(){
      this.payment.currency = 'GBP';
      let payment = new PayPalPayment(this.payment.amount, this.payment.currency, this.payment.description, this.payment.intent);
      this.payPal.makePayment(payment);
  }

}
