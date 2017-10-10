import { Component } from '@angular/core';
import {IonicPage, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  constructor(private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

    onDismiss(){
        this.viewCtrl.dismiss();
    }

}
