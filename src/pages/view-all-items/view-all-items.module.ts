import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewAllItemsPage } from './view-all-items';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    ViewAllItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewAllItemsPage),
      ComponentsModule
  ],
})
export class ViewAllItemsPageModule {}
