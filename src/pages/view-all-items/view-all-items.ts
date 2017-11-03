import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import {Category} from "../../interfaces/product.interface";

@IonicPage()
@Component({
  selector: 'page-view-all-items',
  templateUrl: 'view-all-items.html',
})
export class ViewAllItemsPage {
    selectedProductCategory:Category;
  constructor(private navParams: NavParams) {
      this.selectedProductCategory = navParams.get('category');
      console.log(this.selectedProductCategory);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAllItemsPage');
  }

}
