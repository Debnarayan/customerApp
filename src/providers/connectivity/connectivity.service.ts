import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import {Platform} from "ionic-angular";

declare const Connection;

@Injectable()
export class ConnectivityService {

    onDevice: boolean;

  constructor(private network: Network,
              private platform: Platform) {
    console.log('Hello ConnectivityProvider Provider');
    this.onDevice = platform.is('cordova');
  }

    isOffline(): boolean {
      if(this.onDevice && this.network.type){
          return this.network.type === Connection.NONE;
      } else {
          return !navigator.onLine;
      }
  }


}
