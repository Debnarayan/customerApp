import { Component } from '@angular/core';
import {IonicPage, ViewController} from 'ionic-angular';
import {ToastService} from "../../providers/toast/toast.service";
import {AlertService} from "../../providers/alert/alert.service";



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private alertService: AlertService,
              private toastService: ToastService,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

    onDismiss(){
        this.viewCtrl.dismiss();
    }

    responseAfterRegistration(ev){
        console.log(ev);
        if(ev.status == 'fail'){
            this.alertService.commonAlert('Warning', ev.response);
        }else{
            this.toastService.commonToast('',4000,ev.response);
        }
    }

}
