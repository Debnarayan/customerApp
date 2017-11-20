import {Injectable, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Card} from "../../../interfaces/payment.interface";
import {AppService} from "../../app.service";
import {GlobalConfig} from "../../../config/global.config";
import {AppConfig} from "../../../config/app.config";

@Injectable()
export class PaymentCardMockupService{
    Cards: Array<Card>;

  constructor(private appService: AppService,
              private global: GlobalConfig,
              private config: AppConfig) {
      console.log('payment card mockup constructor');
  }

  getSavedCardDetails(){
        return this.appService.backendCallback(this.global.getCustomerId(),'secure/get_saved_card_data')
            .map(response=>{
                return response;
            })
    }

    setSavedCardDetails(cards){
        this.Cards = cards;
        console.log(this.Cards);
    }

    getSavedCards(){
        console.log(this.Cards);
    }

    payUsingCardDetails(selectedCard, orders, bill, gift){

            return this.appService.backendCallback({
                // company_id: this.global.getCompanyId(),
                app_id: this.config.APP_ID,
                customer_id: this.global.getCustomerId(),
                venue_id: this.global.getVenueId(),
                payment_card: selectedCard,
                total_price: bill.total_price,
                total_quantity: bill.total_quantity,
                cart_orders: orders,
                gift_applied: gift
            }, 'secure/pay_using_card')
                .map(response=>{
                    return response;
                })
    }

    sendGiftCardToRecipient(artwork, recipientWithMessage, giftAmount, card){
        return this.appService.backendCallback({
            app_id: this.config.APP_ID,
            customer_id: this.global.getCustomerId(),
            payment_card: card,
            gift_amount: giftAmount,
            receiver: recipientWithMessage,
            artwork: artwork
        }, 'secure/send_gift_card')
            .map(response=>{
                return response;
            })
    }

}
