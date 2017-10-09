import { Component } from '@angular/core';
import {ModalController, NavParams} from "ionic-angular";

@Component({
  selector: 'app-new-gift-card',
  templateUrl: 'new-gift-card.component.html'
})
export class NewGiftCardComponent {

    isGoingToSelectAmount:boolean = false;
    amount: number = 0;
    recipient:string = '';
    selectedArtwork:Object;

  constructor(private modalCtrl: ModalController,
              private navParams: NavParams) {
    console.log('Hello NewGiftCardComponent Component');
    console.log(navParams.get('artwork'));
  }

    selectAmount(){
        this.isGoingToSelectAmount = true;
    }

    presentArtwork(){
        let artworkModal = this.modalCtrl.create('ArtworkPage',{artwork: this.selectedArtwork});
        artworkModal.present();
        artworkModal.onDidDismiss(data => {
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
