import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {ComponentsModule} from "../../components/components.module";
import {RoundProgressModule} from "angular-svg-round-progressbar";
import {MessagesMockupService} from "../../services/mocks/messages-mockup/messages-mockup.service";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
      ComponentsModule,
      RoundProgressModule
  ],
    providers:[MessagesMockupService]
})
export class HomePageModule {}
