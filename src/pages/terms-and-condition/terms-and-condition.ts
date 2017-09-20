import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EmailComposer} from "@ionic-native/email-composer";

/**
 * Generated class for the TermsAndConditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms-and-condition',
  templateUrl: 'terms-and-condition.html',
})
export class TermsAndConditionPage {

    pageContent:string;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private emailComposer: EmailComposer) {
      this.pageContent = navParams.data.content.page_content;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsAndConditionPage');
  }

  composeMail(emailId:string){
      let email = {
          to: emailId
      };

      this.emailComposer.isAvailable().then((available: boolean) =>{
          if(available) {
              this.emailComposer.open(email);
          }
      });
  }

    declineTerms(){
      this.navCtrl.pop();
  }

    acceptTerms(){
      this.navCtrl.setRoot('HomePage');
  }

}
