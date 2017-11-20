import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {LoadingService} from "../../providers/loading/loading.service";
import {PaymentCardMockupService} from "../../services/mocks/payment-card-mockup/payment-card-mockup.service";
import {Card} from "../../interfaces/payment.interface";

@IonicPage()
@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html',
})
export class PaymentMethodPage {
    hasSavedCard: boolean;
    Cards: Card[];
    selectedCard: Card;
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private viewCtrl:ViewController,
              private loadingService: LoadingService,
              private paymentCardMockup: PaymentCardMockupService) {
      this.loadingService.presentLoading();
      this.paymentCardMockup.getSavedCardDetails()
          .subscribe(cards => {
              console.log(cards);
              this.loadingService.dismissLoading();
              if (cards.status == 'fail') {
                  this.hasSavedCard = false;
              } else {
                  if (cards.response.length > 0) {
                      this.hasSavedCard = true;
                      this.Cards = cards.response;
                  } else {
                      this.hasSavedCard = false;
                  }
              }
          })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodPage');
  }

    onDismiss(){
        this.viewCtrl.dismiss();
    }

    selectCard(card: Card){
        this.selectedCard = card;
    }

    onSelect(){
        this.viewCtrl.dismiss(this.selectedCard);
    }

}
