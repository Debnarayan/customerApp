import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {AppConfig} from '../config/app.config';

import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {EmailComposer} from "@ionic-native/email-composer";
import {Geolocation} from '@ionic-native/geolocation';
import {Network} from '@ionic-native/network';


import {ComponentsModule} from "../components/components.module";
import {AuthUserProvider} from '../providers/auth/auth-user.service';
import {HttpModule} from "@angular/http";
import {AppVersion} from "@ionic-native/app-version";
import {AuthAppProvider} from "../providers/auth/auth-app.service";
import {ConnectivityService} from '../providers/connectivity/connectivity.service';
import {AlertService} from '../providers/alert/alert.service';
import {LoadingService} from '../providers/loading/loading.service';
import {ToastService} from "../providers/toast/toast.service";

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        ComponentsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        AppConfig,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Network,
        InAppBrowser,
        EmailComposer,
        Geolocation,
        AuthUserProvider,
        AuthAppProvider,
        AppVersion,
        ConnectivityService,
        AlertService,
        LoadingService,
        ToastService
    ]
})
export class AppModule {
}
