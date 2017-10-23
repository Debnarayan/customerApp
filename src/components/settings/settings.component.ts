import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {ToastService} from "../../providers/toast/toast.service";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent {
    isNotificationEnabled:boolean = false;
  constructor(private navCtrl: NavController,
              private toast: ToastService) {
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
        this.toast.presentToast('Message Notification :: '+status);
    }

}
