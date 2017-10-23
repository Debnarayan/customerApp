import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {EmailComposer} from "@ionic-native/email-composer";
import {Geolocation} from '@ionic-native/geolocation';
import {Network} from '@ionic-native/network';
import {HttpModule} from "@angular/http";
import {AppVersion} from "@ionic-native/app-version";
import {Contacts} from "@ionic-native/contacts";
import {GoogleMaps} from "@ionic-native/google-maps";
import {PayPal} from "@ionic-native/paypal";


import {ConfigModule} from "../config/config.module";
import {ComponentsModule} from "../components/components.module";


import {AuthUserProvider} from '../providers/auth/auth-user.service';
import {AuthAppProvider} from "../providers/auth/auth-app.service";


import {ConnectivityService} from '../providers/connectivity/connectivity.service';
import {AlertService} from '../providers/alert/alert.service';
import {LoadingService} from '../providers/loading/loading.service';
import {ToastService} from "../providers/toast/toast.service";
import {AppService} from "../services/app.service";

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        ConfigModule,
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp,{tabsHideOnSubPages:"true"}),
        ComponentsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AppVersion,
        Network,
        InAppBrowser,
        EmailComposer,
        Geolocation,
        Contacts,
        GoogleMaps,
        PayPal,

        AppService,
        AuthUserProvider,
        AuthAppProvider,

        ConnectivityService,
        AlertService,
        LoadingService,
        ToastService
    ]
})
export class AppModule {
}
