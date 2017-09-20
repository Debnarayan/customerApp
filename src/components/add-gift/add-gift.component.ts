import { Component } from '@angular/core';
import {ModalController} from "ionic-angular";

/**
 * Generated class for the AddGiftComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-add-gift',
  templateUrl: 'add-gift.component.html'
})
export class AddGiftComponent {

  constructor(private modalCtrl: ModalController) {
    console.log('Hello AddGiftComponent Component');
  }

    presentNewGiftPage(){
        let giftModal = this.modalCtrl.create('NewGiftCardPage');
        giftModal.present();
    }

}
