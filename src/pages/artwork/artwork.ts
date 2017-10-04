import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-artwork',
  templateUrl: 'artwork.html',
})
export class ArtworkPage {
    selectedArtwork:Object;
  constructor(private viewCtrl: ViewController,
              private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtworkPage');
  }

    artworkCallbackOnSelect(ev){
      this.selectedArtwork = ev;
    }

    onDismiss(){
        this.viewCtrl.dismiss();
    }

    onSelect(){
        this.viewCtrl.dismiss(this.selectedArtwork);
    }

}
