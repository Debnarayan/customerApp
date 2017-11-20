import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NewGiftCardPage} from './new-gift-card';
import {ComponentsModule} from "../../components/components.module";
import {PaymentCardMockupService} from "../../services/mocks/payment-card-mockup/payment-card-mockup.service";
import {GiftCardMockupService} from "../../services/mocks/gift-card-mockup/gift-card-mockup.service";

@NgModule({
    declarations: [
        NewGiftCardPage,
    ],
    imports: [
        IonicPageModule.forChild(NewGiftCardPage),
        ComponentsModule
    ],
    providers:[PaymentCardMockupService,GiftCardMockupService]
})
export class NewGiftCardPageModule {
}
