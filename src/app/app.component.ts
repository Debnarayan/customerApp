import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {MenuPage} from "../interfaces/menu-page.interface";
import {AppVersion} from "@ionic-native/app-version";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    pages: Array<MenuPage>;
    activePage: MenuPage;

    rootPage: any = 'OnboardingPage';

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private appVersion: AppVersion) {
        let packageName = this.appVersion.getPackageName();
        console.log(packageName);

        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Home', component: 'HomePage'},
            // {title: 'List', component: ListPage},
            // {title: 'Register', component: 'RegisterPage'},
            {title: 'Gifts', component: 'AddGiftPage'},
            {title: 'Contact Us', component: 'ContactUsPage'},
            {title: 'Menu', component: 'MenuItemPage'}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage = page;
    }

    isActivePage(page){
        return page === this.activePage;
    }
}
