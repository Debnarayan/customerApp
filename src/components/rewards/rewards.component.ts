import {Component} from '@angular/core';
import {ModalController} from "ionic-angular";

@Component({
    selector: 'app-rewards',
    templateUrl: 'rewards.component.html'
})
export class RewardsComponent {
    reward: number = 5;
    max: number = 12;

    constructor(private modalCtrl: ModalController) {
        console.log('Hello RewardsComponent Component');
    }

    presentMessages() {
        let messagesModal = this.modalCtrl.create('MessagesPage');
        messagesModal.present();
    }

}
