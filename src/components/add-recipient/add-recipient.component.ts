import {Component, EventEmitter, Output} from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import {NavParams, Platform} from "ionic-angular";
import {Recipient} from "../../interfaces/artwork.interface";

@Component({
  selector: 'app-add-recipient',
  templateUrl: 'add-recipient.component.html'
})
export class AddRecipientComponent {

  // contactList:Contacts[];
  recipient: Recipient = {email: '',message: ''};

  @Output() selectedRecipientResponse: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(private contacts: Contacts,
              private platform: Platform,
              private navParams: NavParams) {
    console.log('Hello AddRecipientComponent Component');
      // let contact: Contact = this.contacts.create();
      // var opts = {
      //     filter : "M",
      //     multiple: true,
      //     hasPhoneNumber:true,
      //     fields:  [ 'displayName', 'name' ]
      // };
      //
      // this.platform.ready().then(() => {
      //     contact.find([ 'displayName', 'name' ],opts).then((contacts) => {
      //         this.contactList=contacts;
      //         console.log(this.contactList);
      //     }, (error) => {
      //         console.log(error);
      //     })
      // })
  }

   recipientOnBlur(data){
      console.log(data);
      this.selectedRecipientResponse.emit(data);
   }

}
