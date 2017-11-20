import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GiftCardMockupService} from "../../services/mocks/gift-card-mockup/gift-card-mockup.service";
import {Artwork, Gift} from "../../interfaces/artwork.interface";
import {GlobalConfig} from "../../config/global.config";
import {DatabaseConfig} from "../../config/database.config";


@IonicPage()
@Component({
    selector: 'page-my-gift',
    templateUrl: 'my-gift.html',
})
export class MyGiftPage implements OnInit{
    Artwork: Artwork[];
    Gifts: Gift[];
    selectedGift: Gift;
    appliedGift: Gift;
    hasReceiveGift:boolean = true;
    messageOnNoGiftCard:string;

    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private global: GlobalConfig,
                private dbConfig: DatabaseConfig,
                private giftcardMockup: GiftCardMockupService) {
        this.giftcardMockup.getArtworkImages()
            .subscribe((artworks) => {
                this.Artwork = artworks.response;
            })
    }

    ngOnInit(){
        this.dbConfig.selectDataByTableName('gift','gift_id','customer_id',this.global.getCustomerId())
            .then((gift)=>{
                console.log(gift);
                this.giftcardMockup.getAvailableGiftCards()
                    .subscribe((gifts) => {
                        console.log(gift[0]);
                        console.log(gifts);
                        if(gifts.status == 'success'){
                            this.Gifts = gifts.response;
                            if(gift[0] !== false && typeof gift[0] !== 'undefined'){
                                for(let i=0; i<this.Gifts.length; i++){
                                    if(gift[0].gift_id == this.Gifts[i].id){
                                        this.appliedGift = this.Gifts[i];
                                        break;
                                    }
                                }
                            }
                        }else{
                            this.hasReceiveGift = false;
                            this.messageOnNoGiftCard = gifts.response;
                        }
                    })
            })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MyGiftPage');

    }

    selectGift(gift){
        this.selectedGift = gift;
    }

    applyGiftCardForCurrentPayment(gift:Gift){
        this.dbConfig.createGiftCardTable()
            .then(()=>{
            console.log(typeof this.appliedGift);
                if(typeof this.appliedGift !== 'undefined'){
                    this.appliedGift = gift;
                    this.dbConfig.updateRecordByTableName('gift', ['gift_id','balance'],[gift.id,gift.balance],'customer_id',this.global.getCustomerId());
                }else{
                    this.appliedGift = gift;
                    this.dbConfig.insertRecordByTableName('gift',['customer_id','gift_id','balance'],[this.global.getCustomerId(), gift.id, gift.balance]);
                }
            })
    }

    cancelAppliedGiftCardForCurrentPayment(gift:Gift){
        this.dbConfig.deleteRecordByTableName('gift', ['customer_id','gift_id'], [this.global.getCustomerId(),gift.id])
            .then(isDeleted=>{
                console.log(isDeleted);
                this.appliedGift = null;
            })
    }


}
