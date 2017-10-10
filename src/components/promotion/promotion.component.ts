import { Component } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: 'promotion.component.html'
})
export class PromotionComponent {

  text: string;

  constructor() {
    console.log('Hello PromotionComponent Component');
    this.text = 'Hello World';
  }

}
