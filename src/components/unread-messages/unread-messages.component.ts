import {Component, EventEmitter, Output} from '@angular/core';
import {ModalController} from "ionic-angular";
import {MessagesMockupService} from "../../services/mocks/messages-mockup/messages-mockup.service";
import {Message} from "../../interfaces/message.interface";

@Component({
    selector: 'app-unread-messages',
    templateUrl: 'unread-messages.component.html'
})
export class UnreadMessagesComponent {
    Messages: Array<Message>;
    @Output() unreadMessageCount: EventEmitter<Number>;

    constructor(private modalCtrl: ModalController,
                private messageService: MessagesMockupService) {
        console.log('Hello UnreadMessagesComponent Component');
        this.unreadMessageCount = new EventEmitter<Number>();

        this.messageService.getAllUnreadMessages()
            .then(data=>{
                this.Messages = data;
                this.unreadMessageCount.emit(data.length);
            })
            .catch(err=>{
                alert("An unexpected error occured::"+err);
            })
    }

    presentMessages(){
        let messagesModal = this.modalCtrl.create('MessagesPage');
        messagesModal.present();
    }

    viewMessage(message:Message){
        let messagesDetailsModal = this.modalCtrl.create('MessageDetailsPage',{message: message});
        messagesDetailsModal.present();
    }

}