import { Component } from '@angular/core';
import {IonicPage, ToastController, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private viewCtrl: ViewController,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    onDismiss(){
        this.viewCtrl.dismiss();
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
