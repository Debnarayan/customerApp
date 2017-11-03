import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AppService} from "../../services/app.service";
import {GlobalConfig} from "../../config/global.config";
import {Card} from "../../interfaces/payment.interface";
import {LoadingService} from "../../providers/loading/loading.service";

@Component({
  selector: 'app-card-type',
  templateUrl: 'card-type.component.html'
})
export class CardTypeComponent implements OnInit,OnChanges{
    @Input('paymentType') paymentMethod: String;
    @Input('cardDetails') cardDetails: FormGroup;
    hasSavedCard:boolean;
    addMoreCard:boolean;
    flipped: boolean = false;
    Cards:Card[];

    part1:String;
    part2:String;
    part3:String;
    part4:String;
    part5:String;

    constructor(private appService: AppService,
                private global: GlobalConfig,
                private loading: LoadingService) {
        console.log('Hello CardTypeComponent Component');
    }

    ngOnInit(){
        this.appService.backendCallback(this.global.getCustomerId(),'secure/get_saved_card_data')
            .subscribe(resolve=>{
                console.log(resolve);
                if(resolve.status == 'fail'){
                    this.hasSavedCard = false;
                }else{
                    if(resolve.response.length > 0){
                        this.hasSavedCard = true;
                        this.Cards = resolve.response;
                    }else{
                        this.hasSavedCard = false;
                    }
                }
            })
    }

    ngOnChanges(changes) {
        this.hasSavedCard = true;
        this.addMoreCard=false;
        console.log(changes.paymentMethod);
        this.loading.dismissLoading();
    }

    flip(state:boolean){
        this.flipped = state;
    }

    onChangeCardNumber(ev){
        this.part1 = ev.value.toString().substr(0,4);
        this.part2 = ev.value.toString().substr(4,4);
        this.part3 = ev.value.toString().substr(8,4);
        this.part4 = ev.value.toString().substr(12,4);
        this.part5 = ev.value.toString().substr(16,4);
    }

    onChangeCardholderName(ev){
        ev.value = ev.value.toUpperCase();
    }

    addPaymentCard(){
        this.addMoreCard = true;
        this.hasSavedCard = false;
    }

    onSubmit() {
        this.addMoreCard = false;
        this.cardDetails.controls['card_type'].setValue(this.paymentMethod);
        console.log(this.cardDetails.value);
        this.appService.backendCallback({customer_id: this.global.getCustomerId(),card_data: this.cardDetails.value},'secure/save_card_details')
            .subscribe(resolve=>{
                console.log(resolve);
                if(resolve.status == 'success'){
                    this.ngOnInit();
                    this.cardDetails.reset();
                }
            })
    }
}
