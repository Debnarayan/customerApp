import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
    @ViewChild(Content) content: Content;
    reward: number = 5;
    max: number = 12;

    homeTabs:String;
    unreadMessageCount:Number;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


    checkUnreadMessage(ev:Number){
        this.unreadMessageCount = ev;
    }

    tabChange(){
        this.content.scrollToTop();
    }

    goToRegisterPage(){
      let registerModal = this.modalCtrl.create('RegisterPage');
      registerModal.present();
      // this.navCtrl.push('RegisterPage');
    }

    goToLoginPage(){
        let loginModal = this.modalCtrl.create('LoginPage');
        loginModal.present();
      // this.navCtrl.push('LoginPage');
    }

}
