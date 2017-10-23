import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-card-type',
  templateUrl: 'card-type.component.html'
})
export class CardTypeComponent{
    @Input('paymentType') paymentMethod: String;
    @Input('cardDetails') cardDetails: FormGroup;

    flipped: boolean = false;

    part1:String;
    part2:String;
    part3:String;
    part4:String;
    part5:String;

    constructor() {
        console.log('Hello CardTypeComponent Component');
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

    onSubmit(formValue) {
        console.log(formValue);
        console.log(this.cardDetails.value);
    }
}
