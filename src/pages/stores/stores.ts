import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import
{
    GoogleMap,
    GoogleMapOptions,
    GoogleMaps,
    GoogleMapsEvent
} from "@ionic-native/google-maps";
import {StoresMockupService} from "../../services/mocks/stores-mockup/stores-mockup.service";
import {ToastService} from "../../providers/toast/toast.service";
import {Store} from "../../interfaces/stores.interface";
import {DatabaseConfig} from "../../config/database.config";
import {GlobalConfig} from "../../config/global.config";
import {LoadingService} from "../../providers/loading/loading.service";

@IonicPage()
@Component({
    selector: 'page-stores',
    templateUrl: 'stores.html',
})
export class StoresPage {
    map: GoogleMap;
    mapElement: HTMLElement;
    tabBarElement: any;
    Stores: Store[];
    defaultStore: Store;

    constructor(private googleMaps: GoogleMaps,
                private viewCtrl: ViewController,
                private navCtrl: NavController,
                private toastService: ToastService,
                private storesMockup: StoresMockupService,
                private dbConfig: DatabaseConfig,
                private global: GlobalConfig,
                private loading: LoadingService) {
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }

    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
        console.log('ionViewWillEnter StoresPage');
        if(typeof this.Stores !== 'undefined'){
            this.storesMockup.selectDefaultStore(this.Stores)
                .then(store => {
                    this.defaultStore = store;
                    this.loadMap(this.defaultStore);
                })
        }
    }

    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
    }

    goToBack() {
        this.navCtrl.parent.select(0);
    }

    ionViewDidEnter(){
        console.log('ionViewDidEnter StoresPage');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad StoresPage');
        this.loading.presentLoading();
        this.storesMockup.getMerchantSpecificStores()
            .subscribe((store)=>{
                console.log(store);
                if(store.status == 'fail'){
                    this.toastService.commonToast('',3000,store.response);
                }else{
                    this.Stores = store.response;
                    this.storesMockup.selectDefaultStore(this.Stores)
                        .then(store=>{
                            console.log(store);
                            this.defaultStore = store;
                            this.loadMap(this.defaultStore);
                        })
                }
            })
    }

    onDismiss(){
        this.viewCtrl.dismiss();
    }

    loadMap(location) {
        this.mapElement = document.getElementById('map');

        let mapOptions: GoogleMapOptions = {
            'controls': {
                'compass': true,
                'myLocationButton': true,
                'indoorPicker': true,
                'zoom': true
            },
            'gestures': {
                'scroll': true,
                'tilt': true,
                'rotate': true,
                'zoom': true
            },
            'camera': {
                'target': {
                    'lat': location.venue_lat,
                    'lng': location.venue_lon
                },
                'tilt': 30,
                'zoom': 15,
                'bearing': 50
            }
        };

        this.map = this.googleMaps.create(this.mapElement, mapOptions);
        console.log('Map Created');

        // console.log(this.map.getMyLocation());
        // Wait the MAP_READY before using any methods.
        this.map.one(GoogleMapsEvent.MAP_READY)
            .then(() => {
                console.log('Map is ready!');
                this.loading.dismissLoading();
                // Now you can use all methods safely.
                this.map.addMarker({
                    title: location.venue_name,
                    icon: 'blue',
                    animation: 'DROP',
                    position: {
                        lat: location.venue_lat,
                        lng: location.venue_lon
                    }
                })
                    .then(marker => {
                        marker.on(GoogleMapsEvent.MARKER_CLICK)
                            .subscribe(() => {
                                console.log('clicked');
                            });
                    });

            });
    }

    goToStoreLists(){
        this.navCtrl.push('StoreListPage',{stores: this.Stores, default_store: this.defaultStore})
    }

}
