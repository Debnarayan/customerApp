import {Injectable} from '@angular/core';
import {Alert, AlertController} from "ionic-angular";

@Injectable()
export class AlertService {

    alert: Alert;

    constructor(private alertCtrl: AlertController) {
        console.log('Hello AlertServiceProvider Provider');
    }

    dismissAlert():boolean {
        this.alert.dismiss();
        return false
    }

    unknownErrorAlert(alertType:string): void {
        this.alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: alertType,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: () => {
                        return this.dismissAlert();
                    }
                }
            ]
        });
        this.alert.present();
    }

    connectivityAlert(): void {
        this.alert = this.alertCtrl.create({
            title: 'Warning',
            subTitle: 'No Internet Connection',
            buttons: [
                {
                    text: 'Dismiss',
                    handler: () => {
                        return this.dismissAlert();
                    }
                }
            ]
        });
        this.alert.present();
    }

}
