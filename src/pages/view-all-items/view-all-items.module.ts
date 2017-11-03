import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewAllItemsPage } from './view-all-items';
import { ComponentsModule } from "../../components/components.module";
import {ProductsMockupService} from "../../services/mocks/products-mockup/products-mockup.service";

@NgModule({
  declarations: [
    ViewAllItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewAllItemsPage),
      ComponentsModule
  ],
    providers:[ProductsMockupService]
})
export class ViewAllItemsPageModule {}
