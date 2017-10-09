import { Component } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import {Platform} from "ionic-angular";

@Component({
  selector: 'app-add-recipient',
  templateUrl: 'add-recipient.component.html'
})
export class AddRecipientComponent {

  contactList:Contacts[];

  constructor(private contacts: Contacts,private platform: Platform) {
    console.log('Hello AddRecipientComponent Component');
      let contact: Contact = this.contacts.create();
      var opts = {
          filter : "M",
          multiple: true,
          hasPhoneNumber:true,
          fields:  [ 'displayName', 'name' ]
      };

      this.platform.ready().then(() => {
          contact.find([ 'displayName', 'name' ],opts).then((contacts) => {
              this.contactList=contacts;
              console.log(this.contactList);
          }, (error) => {
              console.log(error);
          })
      })
  }

    searchContact(){

    }

}
