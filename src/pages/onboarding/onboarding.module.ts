import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardingPage } from './onboarding';
import {StoresMockupService} from "../../services/mocks/stores-mockup/stores-mockup.service";

@NgModule({
  declarations: [
    OnboardingPage,
  ],
  imports: [
    IonicPageModule.forChild(OnboardingPage),
  ],
    providers:[StoresMockupService]
})
export class OnboardingPageModule {}
