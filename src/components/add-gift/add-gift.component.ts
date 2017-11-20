import {Component, EventEmitter, Output} from '@angular/core';
import {ModalController} from "ionic-angular";

@Component({
  selector: 'app-add-gift',
  templateUrl: 'add-gift.component.html'
})
export class AddGiftComponent {
    @Output() giftCardCodeResponse: EventEmitter<string> = new EventEmitter<string>();
    giftCode:string = '';
  constructor(private modalCtrl: ModalController) {
    console.log('Hello AddGiftComponent Component');
  }

    presentNewGiftPage(){
        let giftModal = this.modalCtrl.create('NewGiftCardPage');
        giftModal.present();
    }

    getGiftCodeFromUser(){
        this.giftCode = this.giftCode.toUpperCase();
        this.giftCardCodeResponse.emit(this.giftCode);
    }

}
