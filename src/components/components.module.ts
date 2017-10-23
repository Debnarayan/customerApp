import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {PipesModule} from "../pipes/pipes.module";
import {RoundProgressModule} from "angular-svg-round-progressbar";

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
import { ViewAllItemsComponent } from './view-all-items/view-all-items.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { ViewAllArtworksComponent } from './view-all-artworks/view-all-artworks.component';
import { RewardsComponent } from './rewards/rewards.component';
import { PromotionComponent } from './promotion/promotion.component';
import { UnreadMessagesComponent } from './unread-messages/unread-messages.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import {CardTypeComponent} from './card-type/card-type.component';
import { PayPalComponent } from './paypal/paypal.component';

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
    ViewAllItemsComponent,
    ArtworkComponent,
    ViewAllArtworksComponent,
    RewardsComponent,
    PromotionComponent,
    UnreadMessagesComponent,
    MessagesComponent,
    SettingsComponent,
    CardTypeComponent,
    PayPalComponent
    ],
    imports: [IonicModule,PipesModule,RoundProgressModule],
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
    ViewAllItemsComponent,
    ArtworkComponent,
    ViewAllArtworksComponent,
    RewardsComponent,
    PromotionComponent,
    UnreadMessagesComponent,
    MessagesComponent,
    SettingsComponent,
    CardTypeComponent,
    PayPalComponent
    ]
})
export class ComponentsModule {
}
