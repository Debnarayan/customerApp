import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EmailComposer} from "@ionic-native/email-composer";

@IonicPage()
@Component({
  selector: 'page-terms-and-condition',
  templateUrl: 'terms-and-condition.html',
})
export class TermsAndConditionPage {

    pageTitle:string;
    pageContent:string;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private emailComposer: EmailComposer) {
      this.pageTitle = navParams.data.content.page_title;
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
      this.navCtrl.setRoot('TabsPage');
  }

}
