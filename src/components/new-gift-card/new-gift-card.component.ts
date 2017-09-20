import { Component } from '@angular/core';
import {ModalController} from "ionic-angular";

/**
 * Generated class for the NewGiftCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-new-gift-card',
  templateUrl: 'new-gift-card.component.html'
})
export class NewGiftCardComponent {

    isGoingToSelectAmount:boolean = false;
    amount: number = 0;
    recipient:string = '';

  constructor(private modalCtrl: ModalController) {
    console.log('Hello NewGiftCardComponent Component');
  }

    selectAmount(){
        this.isGoingToSelectAmount = true;
    }

    presentAddRecipient(){
        let addRecipientModal = this.modalCtrl.create('AddRecipientPage');
        addRecipientModal.present();
    }

    presentPaymentMethod(){
        let paymentMethodModal = this.modalCtrl.create('PaymentMethodPage');
        paymentMethodModal.present();
    }

}
