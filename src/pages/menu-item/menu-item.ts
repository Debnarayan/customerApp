import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-item',
  templateUrl: 'menu-item.html',
})
export class MenuItemPage {

    isiOS:boolean =false;
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private platform: Platform) {
      if (platform.is('ios')) {
          this.isiOS = true;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuItemPage');
  }

}
