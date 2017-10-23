import {Component} from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthAppProvider} from "../../providers/auth/auth-app.service";
import {ConnectivityService} from "../../providers/connectivity/connectivity.service";
import {AlertService} from "../../providers/alert/alert.service";
import {LoadingService} from "../../providers/loading/loading.service";
import {GlobalConfig} from "../../config/global.config";


@IonicPage()
@Component({
    selector: 'page-onboarding',
    templateUrl: 'onboarding.html',
})
export class OnboardingPage {

    termsData: Array<string>;

    constructor(private navCtrl: NavController,
                private global: GlobalConfig,
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
                    console.log(data.response.company_info_id);
                    this.global.setCompanyId(Number(data.response.company_info_id));
                    this.loading.dismissLoading();
                    this.termsData = data.response;
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


}
