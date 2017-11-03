import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ProductsMockupService} from "../../services/mocks/products-mockup/products-mockup.service";
import {LoadingService} from "../../providers/loading/loading.service";

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
              private loading: LoadingService,
              private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.loading.dismissLoading();
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

    onSubTabClick(){
        this.loading.presentLoading();
    }

}
