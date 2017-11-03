import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AppService} from "../../services/app.service";
import {GlobalConfig} from "../../config/global.config";
import {Card} from "../../interfaces/payment.interface";
import {AlertController, NavController} from "ionic-angular";
import {AlertService} from "../../providers/alert/alert.service";
import {DatabaseConfig} from "../../config/database.config";
import {AppConfig} from "../../config/app.config";
import {PaymentCardMockupService} from "../../services/mocks/payment-card-mockup/payment-card-mockup.service";
import {LoadingService} from "../../providers/loading/loading.service";
import {isSuccess} from "@angular/http/src/http_utils";


@Component({
    selector: 'app-saved-card',
    templateUrl: 'saved-card.component.html'
})
export class SavedCardComponent {
    @Output() cardDetailResponse: EventEmitter<Object> = new EventEmitter<Object>();
    @Input() bill;
    hasSavedCard: boolean = false;
    Cards: Card[];

    constructor(private navCtrl: NavController,
                private global: GlobalConfig,
                private dbConfig: DatabaseConfig,
                private loading: LoadingService,
                private paymentCardMockup: PaymentCardMockupService,
                private alertCtrl: AlertController,
                private alert: AlertService) {
        console.log('Hello SavedCardComponent Component');
        this.loading.presentLoading();
        this.paymentCardMockup.getSavedCardDetails()
            .subscribe(cards => {
                console.log(cards);
                if (cards.status == 'fail') {
                    this.hasSavedCard = false;
                    this.cardDetailResponse.emit(this.hasSavedCard);
                } else {
                    if (cards.response.length > 0) {
                        this.hasSavedCard = true;
                        this.Cards = cards.response;
                        this.paymentCardMockup.setSavedCardDetails(cards.response);
                    } else {
                        this.hasSavedCard = false;
                    }
                    this.cardDetailResponse.emit(this.hasSavedCard);
                }
            })
    }

    selectCardForCurrentTransaction(card) {
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
                        this.loading.presentCustomLoading('ios','Payment in progress. Don\'t <b>Close</b> the app Or don\'t press <b>Back</b> button');

                        card.cvv = data.cvv

                        this.dbConfig.selectData()
                            .then(orders => {
                                this.paymentCardMockup.payUsingCardDetails(card,orders,this.bill)
                                    .subscribe(payment => {
                                        console.log(payment);
                                        this.loading.dismissLoading();
                                        if (payment.status == 'success') {
                                            this.dbConfig.deleteRecord(this.global.getCustomerId())
                                                .then(isSuccess=>{
                                                    console.log(isSuccess);
                                                    if(isSuccess){
                                                        this.navCtrl.popToRoot()
                                                            .then(()=>{
                                                                this.alert.commonAlert('Success', 'Payment successfully completed. Your payment Transaction number is <b>#' + payment.response.transaction_id + '</b>');
                                                            });
                                                    }
                                                })
                                        } else {
                                            this.alert.commonAlert('Error',payment.response);
                                        }
                                    })

                            })
                    }
                }
            ]
        });
        alert.present();
    }

}
