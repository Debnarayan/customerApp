import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AddGiftPage} from './add-gift';
import {ComponentsModule} from "../../components/components.module";
import {GiftCardMockupService} from "../../services/mocks/gift-card-mockup/gift-card-mockup.service";

@NgModule({
    declarations: [
        AddGiftPage,
    ],
    imports: [
        IonicPageModule.forChild(AddGiftPage),
        ComponentsModule
    ],
    providers:[GiftCardMockupService]
})
export class AddGiftPageModule {
}
