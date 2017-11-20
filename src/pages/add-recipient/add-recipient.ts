import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Recipient} from "../../interfaces/artwork.interface";


@IonicPage()
@Component({
  selector: 'page-add-recipient',
  templateUrl: 'add-recipient.html',
})
export class AddRecipientPage {
recipient: Recipient;
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRecipientPage');
  }

    onDismiss(){
      this.viewCtrl.dismiss();
    }

    onSelect(){
        this.viewCtrl.dismiss(this.recipient);
    }

    giftCardRecipientOnChange(ev){
        this.recipient = ev;
        console.log(this.recipient);
    }

}
