import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NewGiftCardPage} from './new-gift-card';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    declarations: [
        NewGiftCardPage,
    ],
    imports: [
        IonicPageModule.forChild(NewGiftCardPage),
        ComponentsModule
    ],
})
export class NewGiftCardPageModule {
}
