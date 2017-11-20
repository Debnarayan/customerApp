import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentMethodPage } from './payment-method';
import {ComponentsModule} from "../../components/components.module";
import {PaymentCardMockupService} from "../../services/mocks/payment-card-mockup/payment-card-mockup.service";
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    PaymentMethodPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentMethodPage),
      ComponentsModule,
      PipesModule
  ],
    providers:[PaymentCardMockupService]
})
export class PaymentMethodPageModule {}
