import { Component } from '@angular/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';
import {ToastService} from "../../providers/toast/toast.service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private toastService: ToastService,
              private viewCtrl: ViewController,
              private navCtrl: NavController) {
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
          this.toastService.commonToast('',4000,ev.response);
      }else{
          this.toastService.commonToast('',4000,ev.response['message'])
              .then(()=>{
                      this.navCtrl.setRoot('TabsPage');
              })
      }
  }

}
