import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {ArtworkCategory} from "../../interfaces/artwork.interface";

@IonicPage()
@Component({
  selector: 'page-view-all-artworks',
  templateUrl: 'view-all-artworks.html',
})
export class ViewAllArtworksPage {
    artworkCategory:ArtworkCategory;
    selectedArtwork:Object;
  constructor(private navParams: NavParams,
              private viewCtrl: ViewController) {
      this.artworkCategory = navParams.get('artwork_category');
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
