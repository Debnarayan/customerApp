import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoresPage } from './stores';
import {StoresMockupService} from "../../services/mocks/stores-mockup/stores-mockup.service";

@NgModule({
  declarations: [
    StoresPage,
  ],
  imports: [
    IonicPageModule.forChild(StoresPage),
  ],
    providers:[StoresMockupService]
})
export class StoresPageModule {}
