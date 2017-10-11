import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
    @ViewChild(Content) content: Content;
    tabName:String = 'home';
    hasUnreadMessage:boolean = false;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


    checkUnreadMessage(ev:Number){
      if(ev>0){
          this.hasUnreadMessage = true;
      }else{
          this.hasUnreadMessage = false;
      }
    }

    tabSelected(ev:String){
        this.content.scrollToTop();
        this.tabName = ev;
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
