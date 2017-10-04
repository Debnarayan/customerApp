import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtworkPage } from './artwork';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ArtworkPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtworkPage),
      ComponentsModule
  ],
})
export class ArtworkPageModule {}
