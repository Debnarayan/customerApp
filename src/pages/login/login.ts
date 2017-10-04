import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  checkUserLoginByEmailAndPassword(ev){
    console.log(ev);
    if(ev.status == 'fail'){
        //apply toast using service call
        // this.toast.presentToast()
        let toast = this.toastCtrl.create({
            message: ev.response,
            duration: 3000
        });
        toast.present();
    }
  }

}
