import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPage } from './payment';
import {ComponentsModule} from "../../components/components.module";
import {PayPalPaymentService} from "../../services/payment/paypal.service";
import {PayPalInit} from "../../services/payment/paypal.config";

@NgModule({
  declarations: [
    PaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentPage),
      ComponentsModule
  ],
    providers:[PayPalPaymentService,PayPalInit]
})
export class PaymentPageModule {}
