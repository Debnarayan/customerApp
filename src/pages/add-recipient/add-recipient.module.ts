import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRecipientPage } from './add-recipient';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    AddRecipientPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRecipientPage),
      ComponentsModule
  ],
})
export class AddRecipientPageModule {}
