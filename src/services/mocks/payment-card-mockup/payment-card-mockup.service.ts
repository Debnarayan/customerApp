import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Card} from "../../../interfaces/payment.interface";
import {Observable} from "rxjs/Observable";
import {AppService} from "../../app.service";
import {GlobalConfig} from "../../../config/global.config";
import {AppConfig} from "../../../config/app.config";

@Injectable()
export class PaymentCardMockupService {

    Cards: Array<Card>;
    hasSavedCard:boolean;

  constructor(private appService: AppService,
              private global: GlobalConfig) {
  }

  getSavedCardDetails(){
        return this.appService.backendCallback(this.global.getCustomerId(),'secure/get_saved_card_data')
            .map(response=>{
                return response;

               // -------------------------------------
                // if(resolve.status == 'fail'){
                //     this.hasSavedCard = false;
                // }else{
                //     if(resolve.response.length > 0){
                //         this.hasSavedCard = true;
                //         this.setSavedCardDetails(resolve.response);
                //     }else{
                //         this.hasSavedCard = false;
                //     }
                // }
                // return this.hasSavedCard;
            })
    }

    setSavedCardDetails(cards){
        this.Cards = cards;
        console.log(this.Cards);
    }

    getSavedCards(){
        console.log(this.Cards);
    }

    payUsingCardDetails(selectedCard, orders, bill){
        return this.appService.backendCallback({
            company_id: this.global.getCompanyId(),
            customer_id: this.global.getCustomerId(),
            venue_id: this.global.getVenueId(),
            payment_card: selectedCard,
            total_price: bill.total_price,
            total_quantity: bill.total_quantity,
            cart_orders: orders
        }, 'secure/pay_using_card')
            .map(response=>{
                return response;
            })

    }

}
