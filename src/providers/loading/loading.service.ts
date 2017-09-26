import { Injectable } from '@angular/core';
import {Loading, LoadingController} from "ionic-angular";

@Injectable()
export class LoadingService {

    loading: Loading;

  constructor(private loadingCtrl: LoadingController) {
    console.log('Hello LoadingServiceProvider Provider');
  }

  dismissLoading(){
      this.loading.dismissAll();
  }

    presentLoading() {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Please Wait...'
        });

        this.loading.present();
    }

}
