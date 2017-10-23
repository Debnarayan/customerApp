import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MenuItemPage} from './menu-item';
import {ComponentsModule} from "../../components/components.module";
import {ProductsMockupService} from "../../services/mocks/products-mockup/products-mockup.service";

@NgModule({
    declarations: [
        MenuItemPage,
    ],
    imports: [
        IonicPageModule.forChild(MenuItemPage),
        ComponentsModule
    ],
    providers: [ProductsMockupService]
})
export class MenuItemPageModule {
}
