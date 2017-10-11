import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalController} from "ionic-angular";

@Component({
    selector: 'app-rewards',
    templateUrl: 'rewards.component.html'
})
export class RewardsComponent {
    @Output() selectedSubTab: EventEmitter<String>;
    @Input('hasUnreadMessage') hasUnreadMessage: boolean;
    reward: number = 5;
    max: number = 12;

    constructor(private modalCtrl: ModalController) {
        console.log('Hello RewardsComponent Component');
        this.selectedSubTab = new EventEmitter<String>();
    }

    presentMessages() {
        let messagesModal = this.modalCtrl.create('MessagesPage');
        messagesModal.present();
    }

    selectTab(tabName:String){
        this.selectedSubTab.emit(tabName);
    }

}
