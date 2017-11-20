import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ToastService} from "../../providers/toast/toast.service";
import {GiftCardMockupService} from "../../services/mocks/gift-card-mockup/gift-card-mockup.service";


@IonicPage()
@Component({
  selector: 'page-add-gift',
  templateUrl: 'add-gift.html',
})
export class AddGiftPage {
    secureGiftCode:string;
  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private toastService: ToastService,
              private giftCardMockup: GiftCardMockupService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGiftPage');
  }

    appliedGiftCodeOnChange(ev){
      this.secureGiftCode = ev;
    }

    addReferredGiftToAccount(){
        if(typeof this.secureGiftCode == 'undefined'){
            this.toastService.presentToast('Gift Code can not be blank');
        }else{
            this.giftCardMockup.addGiftCardToAccount(this.secureGiftCode.toUpperCase())
                .subscribe(add => {
                    console.log(add);
                    this.toastService.presentToast(add.response);
                    this.navCtrl.pop();
                })
        }
    }

    onDismiss(){
        this.viewCtrl.dismiss();
    }

}
