import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

    tab1Root: any = 'HomePage';
    tab2Root: any = 'StoresPage';
    // tab3Root: any = 'AddGiftPage';
    // tab4Root: any = 'MenuItemPage';

  constructor(private modalCtrl: ModalController, private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

    store(){
        let modal = this.modalCtrl.create('StoresPage');
        modal.present();
    }

    gift(){
        let modal = this.modalCtrl.create('AddGiftPage');
        modal.present();
    }

    order(){
        let modal = this.modalCtrl.create('MenuItemPage');
        modal.present();
    }

}
