import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Category} from "../../interfaces/product.interface";

@IonicPage()
@Component({
  selector: 'page-view-all-items',
  templateUrl: 'view-all-items.html',
})
export class ViewAllItemsPage {
    category:Category;
  constructor(private navParams: NavParams) {
      this.category = navParams.get('category');
      console.log(this.category);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAllItemsPage');
  }

}
