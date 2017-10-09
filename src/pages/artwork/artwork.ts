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
      this.selectedArtwork = this.navParams.get('artwork');
  }

    artworkCallbackOnSelect(ev){
      this.selectedArtwork = ev;
      console.log(ev);
    }

    onDismiss(){
        this.viewCtrl.dismiss();
    }

    onSelect(){
        this.viewCtrl.dismiss(this.selectedArtwork);
    }

}
