import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Artwork, Recipient} from "../../interfaces/artwork.interface";
import {Card} from "../../interfaces/payment.interface";
import {LoadingService} from "../../providers/loading/loading.service";
import {AlertService} from "../../providers/alert/alert.service";
import {DatabaseConfig} from "../../config/database.config";
import {PaymentCardMockupService} from "../../services/mocks/payment-card-mockup/payment-card-mockup.service";
import {GlobalConfig} from "../../config/global.config";
import {GiftCardMockupService} from "../../services/mocks/gift-card-mockup/gift-card-mockup.service";


@IonicPage()
@Component({
    selector: 'page-new-gift-card',
    templateUrl: 'new-gift-card.html',
})
export class NewGiftCardPage {
    artwork: Artwork;
    recipient: Recipient;
    giftAmount: number;
    paymentCard: Card;

    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private viewCtrl: ViewController,
                private alertCtrl: AlertController,
                private loadingService: LoadingService,
                private alertService: AlertService,
                private dbConfig: DatabaseConfig,
                private giftCardMockup: GiftCardMockupService,
                private paymentCardMockup: PaymentCardMockupService,
                private global: GlobalConfig) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewGiftCardPage');
    }

    onDismiss() {
        this.viewCtrl.dismiss();
    }

    artworkCallbackOnChange(ev) {
        this.artwork = ev;
        console.log(this.artwork);
    }

    recipientMessageCallbackOnChange(ev) {
        this.recipient = ev;
        console.log(this.recipient);
    }

    amountCallbackOnChange(ev) {
        this.giftAmount = ev;
        console.log(this.giftAmount);
    }

    paymentCardCallbackOnChange(ev) {
        this.paymentCard = ev;
        console.log(this.paymentCard);
    }

    sendGift() {
        console.log(typeof this.paymentCard);
        console.log(typeof this.giftAmount);
        console.log(this.paymentCard);
        console.log(this.giftAmount);
        console.log(typeof this.recipient);
        console.log(typeof this.artwork);
        if (typeof this.paymentCard !== 'undefined' && typeof this.giftAmount !== 'undefined' && typeof this.recipient !== 'undefined' && typeof this.artwork !== 'undefined') {
            console.log('valid');
            this.confirmPaymentActionBeforeSendingGiftCard(this.paymentCard);
        } else {
            console.log('invalid');
        }
    }

    confirmPaymentActionBeforeSendingGiftCard(card) {
        let alert = this.alertCtrl.create({
            title: 'Enter CVV',
            message: 'Enter your provided CVV. Please ignore and Submit if your card does not have any CVV',
            inputs: [
                {
                    name: 'cvv',
                    placeholder: 'Enter CVV Number',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked', data);
                    }
                },
                {
                    text: 'Submit',
                    handler: data => {
                        this.loadingService.presentCustomLoading('ios', 'Payment in progress. Don\'t <b>Close</b> the app Or don\'t press <b>Back</b> button');

                        card.cvv = data.cvv

                        // console.log(this.navCtrl.getPrevious().data.component.name);

                        this.dbConfig.selectRecordsByTableName('cart', '*', 'customer_id', this.global.getCustomerId())
                            .then(orders => {
                                this.dbConfig.selectDataByTableName('gift', ['gift_id', 'balance'], 'customer_id', this.global.getCustomerId())
                                    .then(gift => {
                                        this.paymentCardMockup.sendGiftCardToRecipient(this.artwork, this.recipient, this.giftAmount, card)
                                            .subscribe(payment => {
                                                console.log(payment);
                                                this.loadingService.dismissLoading();
                                                if (payment.status !== 'fail') {
                                                    console.log(payment.response);
                                                    if(payment.status == 'success'){
                                                        this.navCtrl.popToRoot()
                                                            .then(() => {
                                                                this.alertService.commonAlert(payment.status, payment.response.message);
                                                            });
                                                    }
                                                    else if(payment.status == 'pending'){
                                                        this.resendEmail(payment.response);
                                                    }

                                                } else {
                                                    console.log(payment.response);
                                                    this.alertService.commonAlert('Error', payment.response.message);
                                                }
                                            })
                                    })

                            })
                    }
                }
            ]
        });
        alert.present();
    }

    resendEmail(response){
        let alert = this.alertCtrl.create({
            title: response['status'],
            message: response['message'],
            buttons: [
                {
                    text: 'Resend',
                    handler: data => {
                        console.log('Resend clicked', data);
                        this.giftCardMockup.resendGiftCardToRecipient(response)
                            .subscribe( resend => {
                                if(resend.status == 'success'){
                                    this.navCtrl.popToRoot()
                                        .then(() => {
                                            this.alertService.commonAlert(resend.status, resend.response.message);
                                        });
                                }else{
                                    this.alertService.commonAlert('Error', resend.response.message);
                                }
                            })
                    }
                }]
        });
        alert.present();
    }
}
