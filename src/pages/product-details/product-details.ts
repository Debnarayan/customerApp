import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

    itemName:string;
    imgName:string;

  constructor( private navParams: NavParams,
               private viewCtrl: ViewController) {
      this.itemName = navParams.get('name');
      this.imgName = navParams.get('img');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

    onDismiss(){
        this.viewCtrl.dismiss();
    }


}
