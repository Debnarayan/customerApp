import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGiftPage } from './my-gift';
import {GiftCardMockupService} from "../../services/mocks/gift-card-mockup/gift-card-mockup.service";

@NgModule({
  declarations: [
    MyGiftPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGiftPage),
  ],
    providers: [GiftCardMockupService]
})
export class MyGiftPageModule {}
