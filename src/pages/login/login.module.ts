import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {ComponentsModule} from "../../components/components.module";
import {StoresMockupService} from "../../services/mocks/stores-mockup/stores-mockup.service";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponentsModule
  ],
    providers:[StoresMockupService]
})
export class LoginPageModule {}
