import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailsPage } from './product-details';
import {ComponentsModule} from "../../components/components.module";
import {StoresMockupService} from "../../services/mocks/stores-mockup/stores-mockup.service";

@NgModule({
  declarations: [
    ProductDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsPage),
      ComponentsModule
  ],
    providers: [StoresMockupService]
})
export class ProductDetailsPageModule {}
