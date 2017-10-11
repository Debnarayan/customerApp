import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import
{
    GoogleMap,
    GoogleMapOptions,
    GoogleMaps,
    GoogleMapsEvent
} from "@ionic-native/google-maps";

@IonicPage()
@Component({
    selector: 'page-stores',
    templateUrl: 'stores.html',
})
export class StoresPage {
    map: GoogleMap;
    mapElement: HTMLElement;
    tabBarElement: any;
    constructor(private googleMaps: GoogleMaps,
                private viewCtrl: ViewController,
                private navCtrl: NavController) {
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }

    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
    }

    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
    }

    goToBack() {
        this.navCtrl.parent.select(0);
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad StoresPage');
        this.loadMap();
    }

    onDismiss(){
        this.viewCtrl.dismiss();
    }

    loadMap() {
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
                    'lat': 43.0741904,
                    'lng': -89.3809802
                },
                'tilt': 30,
                'zoom': 15,
                'bearing': 50
            }
        };

        this.map = new GoogleMap(this.mapElement, mapOptions);

        // Wait the MAP_READY before using any methods.
        this.map.one(GoogleMapsEvent.MAP_READY)
            .then(() => {
                console.log('Map is ready!');

                // Now you can use all methods safely.
                this.map.addMarker({
                    title: 'Ionic',
                    icon: 'blue',
                    animation: 'DROP',
                    position: {
                        lat: 43.0741904,
                        lng: -89.3809802
                    }
                })
                    .then(marker => {
                        marker.on(GoogleMapsEvent.MARKER_CLICK)
                            .subscribe(() => {
                                alert('clicked');
                            });
                    });

            });
    }

}
