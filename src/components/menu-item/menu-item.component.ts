import { Component } from '@angular/core';
import {ModalController} from "ionic-angular";

@Component({
  selector: 'app-menu-item',
  templateUrl: 'menu-item.component.html'
})
export class MenuItemComponent {

  constructor(private modalCtrl: ModalController) {
    console.log('Hello AllItemComponent Component');
  }

    presentProductDetails(){
        let productDetailsModal = this.modalCtrl.create('ProductDetailsPage', { img: 'food1.png', name: 'Nine Inch Nails Live' });
        productDetailsModal.present();
    }
}
