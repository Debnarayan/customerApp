import { Component } from '@angular/core';

/**
 * Generated class for the AddRecipientComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-add-recipient',
  templateUrl: 'add-recipient.component.html'
})
export class AddRecipientComponent {

  text: string;

  constructor() {
    console.log('Hello AddRecipientComponent Component');
    this.text = 'Hello World';
  }

}
