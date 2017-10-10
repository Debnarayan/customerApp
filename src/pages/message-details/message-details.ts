import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {Message} from "../../interfaces/message.interface";

@IonicPage()
@Component({
  selector: 'page-message-details',
  templateUrl: 'message-details.html',
})
export class MessageDetailsPage {
    message: Message;
  constructor(private viewCtrl: ViewController,
              private navParams: NavParams) {
      this.message = navParams.get('message');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageDetailsPage');
  }
    onDismiss(){
        this.viewCtrl.dismiss();
    }

}
