import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtworkPage } from './artwork';
import {ComponentsModule} from "../../components/components.module";
import {GiftCardMockupService} from "../../services/mocks/gift-card-mockup/gift-card-mockup.service";

@NgModule({
  declarations: [
    ArtworkPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtworkPage),
      ComponentsModule
  ],
    providers: [GiftCardMockupService]
})
export class ArtworkPageModule {}
