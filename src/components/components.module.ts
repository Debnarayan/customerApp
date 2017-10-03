import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SideMenuHeaderComponent} from './side-menu-header/side-menu-header.component';
import {AddGiftComponent} from './add-gift/add-gift.component';
import {NewGiftCardComponent} from './new-gift-card/new-gift-card.component';
import {AddRecipientComponent} from './add-recipient/add-recipient.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FeaturedItemComponent } from './featured-item/featured-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ExpandableHeader } from './expandable-header/expandable-header';
import { ViewAllItemsComponent } from './view-all-items/view-all-items.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        SideMenuHeaderComponent,
        AddGiftComponent,
        NewGiftCardComponent,
        AddRecipientComponent,
        ContactUsComponent,
        MenuItemComponent,
    FeaturedItemComponent,
    ProductDetailsComponent,
    ExpandableHeader,
    ViewAllItemsComponent
    ],
    imports: [IonicModule],
    exports: [
        LoginComponent,
        RegisterComponent,
        SideMenuHeaderComponent,
        AddGiftComponent,
        NewGiftCardComponent,
        AddRecipientComponent,
        ContactUsComponent,
        MenuItemComponent,
    FeaturedItemComponent,
    ProductDetailsComponent,
    ExpandableHeader,
    ViewAllItemsComponent
    ]
})
export class ComponentsModule {
}
