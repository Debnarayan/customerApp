import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuItemPage } from './menu-item';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    MenuItemPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuItemPage),
      ComponentsModule
  ],
})
export class MenuItemPageModule {}
