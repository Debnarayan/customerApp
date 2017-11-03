import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {ToastService} from "../../providers/toast/toast.service";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {
    isNotificationEnabled:boolean = false;
  constructor(private navCtrl: NavController,
              private toastService: ToastService,
              private iab: InAppBrowser) {
    console.log('Hello SettingsComponent Component');
  }

    goToCardDetails(){
      this.navCtrl.push('CardDetailsPage')
    }

    changeNotification(){
        var status;
        if(this.isNotificationEnabled)
        {status='ON';}
        else{status='OFF'};
        this.toastService.presentToast('Message Notification :: '+status);
    }

    viewTerms() {
        this.iab.create('http://www.starbucks.in/about-us/company-information/online-policies/terms-of-use');
    }

    viewPolicy() {
        this.iab.create('http://www.starbucks.in/card/learn-more/privacy-policy');
    }

}
