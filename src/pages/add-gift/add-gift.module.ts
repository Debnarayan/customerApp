import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AddGiftPage} from './add-gift';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    declarations: [
        AddGiftPage,
    ],
    imports: [
        IonicPageModule.forChild(AddGiftPage),
        ComponentsModule
    ],
})
export class AddGiftPageModule {
}
