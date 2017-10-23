import {Component, Input} from '@angular/core';
import {PayPalPayment} from "@ionic-native/paypal";
import {PayPalPaymentService} from "../../services/payment/paypal.service";
import {Payment} from "../../interfaces/payment.interface";

@Component({
  selector: 'app-paypal',
  templateUrl: 'paypal.component.html'
})
export class PayPalComponent {

  @Input('payment') payment:Payment;

  constructor(private payPal: PayPalPaymentService) {
    console.log('Hello PayPalComponent Component');
  }

  onSelectPayPalPayment(){
      this.payment.currency = 'GBP';
      let payment = new PayPalPayment(this.payment.amount, this.payment.currency, this.payment.description, this.payment.intent);
      this.payPal.makePayment(payment);
  }

}
