import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SideMenuSliderComponent} from './side-menu-slider/side-menu-slider.component';
import {AddGiftComponent} from './add-gift/add-gift.component';
import {NewGiftCardComponent} from './new-gift-card/new-gift-card.component';
import {AddRecipientComponent} from './add-recipient/add-recipient.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        SideMenuSliderComponent,
        AddGiftComponent,
        NewGiftCardComponent,
        AddRecipientComponent,
        ContactUsComponent
    ],
    imports: [IonicModule],
    exports: [
        LoginComponent,
        RegisterComponent,
        SideMenuSliderComponent,
        AddGiftComponent,
        NewGiftCardComponent,
        AddRecipientComponent,
        ContactUsComponent
    ]
})
export class ComponentsModule {
}
