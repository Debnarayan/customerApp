import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-contact-us',
    templateUrl: 'contact-us.html',
})
export class ContactUsPage {

    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ContactUsPage');
    }

    contactUs(ev) {

        let alert = this.alertCtrl.create({
            title: ev.status,
            subTitle: ev.response,
            buttons: ['Dismiss']
        });
        alert.present();
    }

}
