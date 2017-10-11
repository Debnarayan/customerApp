import { Component } from '@angular/core';
import {IonicPage, NavParams, Platform, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-item',
  templateUrl: 'menu-item.html',
})
export class MenuItemPage {

    menuTypeTab: string = 'all_menu';

    isiOS:boolean =false;
  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private platform: Platform) {
      if (platform.is('ios')) {
          this.isiOS = true;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuItemPage');
  }

    onDismiss(){
        this.viewCtrl.dismiss();
    }

}
