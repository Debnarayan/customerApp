import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewAllArtworksPage } from './view-all-artworks';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ViewAllArtworksPage
  ],
  imports: [
    IonicPageModule.forChild(ViewAllArtworksPage),
      ComponentsModule
  ]
})
export class ViewAllArtworksPageModule {}
