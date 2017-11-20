import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import {Platform} from "ionic-angular";
import {Observable} from "rxjs/Observable";

declare const Connection;

@Injectable()
export class ConnectivityService {

    onDevice: boolean;

  constructor(private network: Network,
              private platform: Platform) {
    console.log('Hello ConnectivityProvider Provider');
    this.onDevice = platform.is('cordova');
  }

    isOnline(): boolean {
        if(this.onDevice && this.network.type){
            return this.network.type !== Connection.NONE;
        } else {
            return navigator.onLine;
        }
    }

    isOffline(): boolean {
      if(this.onDevice && this.network.type){
          return this.network.type === Connection.NONE;
      } else {
          return !navigator.onLine;
      }
  }

    watchOnline(): Observable<any> {
        return this.network.onConnect();
    }

    watchOffline(): Observable<any> {
        return this.network.onDisconnect();
    }


}
