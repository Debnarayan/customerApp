import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Store} from "../../interfaces/stores.interface";
import {DatabaseConfig} from "../../config/database.config";
import {GlobalConfig} from "../../config/global.config";

@IonicPage()
@Component({
    selector: 'page-store-list',
    templateUrl: 'store-list.html',
})
export class StoreListPage {
    Stores: Store[];
    defaultVenue: Store;

    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private dbConfig: DatabaseConfig,
                private global: GlobalConfig) {
        this.Stores = navParams.get('stores');
        this.defaultVenue = navParams.get('default_store');
        console.log(this.Stores);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad StoreListPage');
    }

    setAsDefaultStore(store){
        this.defaultVenue = store;
        this.dbConfig.updateDataByLabelName('user','venue_id',store.venue_id,'customer_id',this.global.getCustomerId());
        this.navCtrl.pop({ duration: 1000, animation: "ios-transition", animate: true });
    }

}
