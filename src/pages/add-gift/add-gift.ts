import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddGiftPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-gift',
  templateUrl: 'add-gift.html',
})
export class AddGiftPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGiftPage');
  }

    addReferredGiftToAccount(){
      console.log("Make this section workable using EventEmitter in add-gift.component.ts")
    }

}
