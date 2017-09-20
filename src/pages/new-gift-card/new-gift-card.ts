import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-new-gift-card',
  templateUrl: 'new-gift-card.html',
})
export class NewGiftCardPage {

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewGiftCardPage');
  }

    onDismiss(){
      this.viewCtrl.dismiss();
    }
}
