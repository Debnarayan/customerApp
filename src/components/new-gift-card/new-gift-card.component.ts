import { Component } from '@angular/core';
import {ModalController} from "ionic-angular";

@Component({
  selector: 'app-new-gift-card',
  templateUrl: 'new-gift-card.component.html'
})
export class NewGiftCardComponent {

    isGoingToSelectAmount:boolean = false;
    amount: number = 0;
    recipient:string = '';
    selectedArtwork:Object;

  constructor(private modalCtrl: ModalController) {
    console.log('Hello NewGiftCardComponent Component');
  }

    selectAmount(){
        this.isGoingToSelectAmount = true;
    }

    presentArtwork(){
        let artworkModal = this.modalCtrl.create('ArtworkPage');
        artworkModal.present();
        artworkModal.onDidDismiss(data => {
            console.log(data);
            this.selectedArtwork = data;
        });
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
