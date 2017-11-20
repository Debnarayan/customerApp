import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthAppProvider} from "../../providers/auth/auth-app.service";
import {ConnectivityService} from "../../providers/connectivity/connectivity.service";
import {AlertService} from "../../providers/alert/alert.service";
import {LoadingService} from "../../providers/loading/loading.service";


@IonicPage()
@Component({
    selector: 'page-onboarding',
    templateUrl: 'onboarding.html',
})
export class OnboardingPage {

    termsData: Array<string>;

    constructor(private navCtrl: NavController,
                private geolocation: Geolocation,
                private authApp: AuthAppProvider,
                private loading: LoadingService,
                private connectService: ConnectivityService,
                private alert: AlertService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OnboardingPage ');
        this.loading.presentLoading();
        this.authApp.getAppData()
            .subscribe(
                (data) => {
                    console.log(data.response);
                    // this.global.setCompanyId(Number(data.response.company_info_id));
                    this.loading.dismissLoading();
                    this.termsData = data.response;
                    this.getCurrentLocation();
                },
                (err) => {
                    this.loading.dismissLoading();
                    if (this.connectService.isOffline()) {
                        this.alert.connectivityAlert();
                    } else {
                        this.alert.unknownErrorAlert(err);
                    }
                }
            );
    }

    goToTermsAndConditionPage() {
        this.navCtrl.push('TermsAndConditionPage', {content: this.termsData});
    }

    getCurrentLocation(){
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log('Location:');
            console.log(resp);
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch((error) => {
            console.log('Error getting location', error);
            if (this.connectService.isOffline()) {
                this.alert.connectivityAlert();
            } else {
                this.alert.unknownErrorAlert(error);
            }
        });
    }


}
