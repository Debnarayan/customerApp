import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthAppProvider} from "../../providers/auth/auth-app.service";

/**
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {

    termsData:Array<string>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authApp: AuthAppProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage ');

      this.authApp.getAppData()
          .subscribe((data)=>{
              console.log(data);
              this.termsData=data.response;
          });
  }

    goToTermsAndConditionPage(){
      this.navCtrl.push('TermsAndConditionPage',{content: this.termsData});
    }

}
