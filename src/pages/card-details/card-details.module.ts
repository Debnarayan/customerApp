import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardDetailsPage } from './card-details';
import {ComponentsModule} from "../../components/components.module";
import {PayPalPaymentService} from "../../services/payment/paypal.service";
import {PayPalInit} from "../../services/payment/paypal.config";

@NgModule({
  declarations: [
    CardDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CardDetailsPage),
      ComponentsModule
  ],
    providers:[PayPalPaymentService,PayPalInit]
})
export class CardDetailsPageModule {}
