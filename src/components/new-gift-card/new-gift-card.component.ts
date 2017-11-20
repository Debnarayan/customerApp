import {Component, EventEmitter, Output} from '@angular/core';
import {ModalController, NavParams} from "ionic-angular";
import {GlobalConfig} from "../../config/global.config";
import {Artwork, Recipient} from "../../interfaces/artwork.interface";
import {Card} from "../../interfaces/payment.interface";

@Component({
  selector: 'app-new-gift-card',
  templateUrl: 'new-gift-card.component.html'
})
export class NewGiftCardComponent{

    @Output() artworkToSendResponse: EventEmitter<Artwork> = new EventEmitter<Artwork>();
    @Output() recipientMessageResponse: EventEmitter<Recipient> = new EventEmitter<Recipient>();
    @Output() amountResponse: EventEmitter<Number> = new EventEmitter<Number>();
    @Output() paymentCardResponse: EventEmitter<Card> = new EventEmitter<Card>();

    isGoingToSelectAmount:boolean = false;
    amount: number = 0;
    // recipient:string = '';
    selectedArtwork:Artwork;
    selectedRecipient:Recipient;
    paymentDoneBy: Card;

  constructor(private modalCtrl: ModalController,
              private navParams: NavParams,
              private global: GlobalConfig) {
    console.log('Hello NewGiftCardComponent Component');
    console.log(navParams.get('artwork'));
  }

    selectAmount(){
        this.isGoingToSelectAmount = true;
        console.log(this.amount);
    }

    presentArtwork(){
        let artworkModal = this.modalCtrl.create('ArtworkPage',{artwork: this.selectedArtwork});
        artworkModal.present();
        artworkModal.onDidDismiss(artwork => {
            this.selectedArtwork = artwork;
            console.log(this.selectedArtwork);
            this.artworkToSendResponse.emit(this.selectedArtwork);
        });
    }

    presentAddRecipient(){
        let addRecipientModal = this.modalCtrl.create('AddRecipientPage');
        addRecipientModal.present();
        addRecipientModal.onDidDismiss(recipient => {
            this.selectedRecipient = recipient;
            console.log(this.selectedRecipient);
            this.recipientMessageResponse.emit(this.selectedRecipient);
        });
    }

    presentPaymentMethod(){
        let paymentMethodModal = this.modalCtrl.create('PaymentMethodPage');
        paymentMethodModal.present();
        paymentMethodModal.onDidDismiss(card => {
            this.paymentDoneBy = card;
            console.log(this.paymentDoneBy);
            this.paymentCardResponse.emit(this.paymentDoneBy);
        });
    }

    onAmountChange(){
        console.log(this.amount);
        this.amountResponse.emit(this.amount);
    }

}
