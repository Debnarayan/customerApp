import { Component } from '@angular/core';
import {MessagesMockupService} from "../../services/mocks/messages-mockup/messages-mockup.service";
import {Message} from "../../interfaces/message.interface";
import {ModalController} from "ionic-angular";

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.component.html'
})
export class MessagesComponent {

    Messages: Array<Message>;

  constructor(private messageService: MessagesMockupService,
              private modalCtrl: ModalController) {
    console.log('Hello MessagesComponent Component');
    this.messageService.getAll()
        .then(data=>{
            this.Messages = data;
        })
        .catch(err=>{
            alert("An unexpected error occured::"+err);
        })
  }

    viewMessage(message:Message){
        let messagesDetailsModal = this.modalCtrl.create('MessageDetailsPage',{message: message});
        messagesDetailsModal.present();
    }

}
