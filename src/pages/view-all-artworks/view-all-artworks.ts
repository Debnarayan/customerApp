import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Category} from "../../interfaces/product.interface";

@IonicPage()
@Component({
  selector: 'page-view-all-artworks',
  templateUrl: 'view-all-artworks.html',
})
export class ViewAllArtworksPage {
    category:Category;
    selectedArtwork:Object;
  constructor(private navParams: NavParams,
              private viewCtrl: ViewController) {
      this.category = navParams.get('category');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAllArtworksPage');
  }

    allArtworkCallbackOnSelect(ev){
        this.selectedArtwork = ev;
    }

    onDismiss(){
        this.viewCtrl.dismiss();
    }

    onSelect(){
        this.viewCtrl.dismiss(this.selectedArtwork);
    }

}
