import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesPage } from './messages';
import {ComponentsModule} from "../../components/components.module";
import {MessagesMockupService} from "../../services/mocks/messages-mockup/messages-mockup.service";

@NgModule({
  declarations: [
    MessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesPage),
    ComponentsModule
  ],
    providers:[MessagesMockupService]
})
export class MessagesPageModule {}
