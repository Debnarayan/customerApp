import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {AppService} from "../../app.service";
import {GlobalConfig} from "../../../config/global.config";
import {AppConfig} from "../../../config/app.config";

@Injectable()
export class GiftCardMockupService {
    //
    // ArtworkCategories = [
    //     {
    //         id: 1,
    //         name: 'Birthday'
    //     },
    //     {
    //         id: 2,
    //         name: 'Thank You'
    //     },
    //     {
    //         id: 3,
    //         name: 'Cartoon'
    //     }];
    //
    // Artworks = [
    //     {
    //         id: 1,
    //         category_id:1,
    //         tag: ['happy birthday', 'happy', 'birthday', 'wish'],
    //         image_name: 'art1.jpg',
    //         image_path: './assets/banner/artwork'
    //     },
    //     {
    //         id: 2,
    //         category_id:1,
    //         tag: ['happy birthday', 'happy', 'birthday', 'wish'],
    //         image_name: 'art2.jpg',
    //         image_path: './assets/banner/artwork'
    //     },
    //     {
    //         id: 3,
    //         category_id:1,
    //         tag: ['happy birthday', 'happy', 'birthday', 'wish'],
    //         image_name: 'art3.jpg',
    //         image_path: './assets/banner/artwork'
    //     },
    //     {
    //         id: 4,
    //         category_id:2,
    //         tag: ['art', 'scenary', 'color', 'nature', 'pet', 'dog', 'street', 'draw'],
    //         image_name: 'art4.jpg',
    //         image_path: './assets/banner/artwork'
    //     },
    //     {
    //         id: 5,
    //         category_id:3,
    //         tag: ['cartoon', 'batman', 'hero'],
    //         image_name: 'art5.jpg',
    //         image_path: './assets/banner/artwork'
    //     },
    //     {
    //         id: 6,
    //         category_id:3,
    //         tag: ['cartoon', 'dbz', 'hero','goku'],
    //         image_name: 'art6.jpg',
    //         image_path: './assets/banner/artwork'
    //     },
    //     {
    //         id: 7,
    //         category_id:3,
    //         tag: ['cartoon', 'dbz', 'hero','goku'],
    //         image_name: 'art7.jpg',
    //         image_path: './assets/banner/artwork'
    //     }];

    constructor(private appService: AppService,
                private global: GlobalConfig,
                private config: AppConfig) {
    }

    getArtworkCategories(){
        return this.appService.backendCallback(this.config.APP_ID,'secure/get_artwork_categories')
            .map((artworkCategories)=>{
                return artworkCategories;
            })
    }

    getArtworkImages(){
        return this.appService.backendCallback(this.config.APP_ID,'secure/get_artwork_images')
            .map((artworks)=>{
                return artworks;
            })
    }

    getAvailableGiftCards(){
        return this.appService.backendCallback({app_id: this.config.APP_ID, customer: this.global.getCustomerId()},'secure/get_available_gifts')
            .map((gifts)=>{
                return gifts;
            })
    }

    resendGiftCardToRecipient(resendData){
        return this.appService.backendCallback({
            gift_id: resendData['gift_id'],
            pay_id: resendData['transaction_id'],
            receiver: resendData['receiver_email']
        }, 'secure/resend_gift_card')
            .map(response=>{
                return response;
            })
    }

    addGiftCardToAccount(appliedCode){
        return this.appService.backendCallback({
            app_id: this.config.APP_ID,
            customer_id: this.global.getCustomerId(),
            gift_code: appliedCode
        },'secure/apply_gift_card')
            .map((status)=>{
                return status;
            })
    }
}