import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AppService} from "../../app.service";
import {AppConfig} from "../../../config/app.config";
import {Store} from "../../../interfaces/stores.interface";
import {DatabaseConfig} from "../../../config/database.config";
import {GlobalConfig} from "../../../config/global.config";

@Injectable()
export class StoresMockupService{

    Stores: Store[];
    defaultStore: Store;
    isVenueFound:boolean = false;

    constructor(private appService: AppService,
                private config: AppConfig,
                private dbConfig: DatabaseConfig,
                private global: GlobalConfig){}

    getMerchantSpecificStores(){
        return this.appService.backendCallback(this.config.APP_ID,'secure/get_default_store_data')
            .map((store)=>{
                // this.Stores = store.response;
                return store;
            })
    }

    selectDefaultStore(storeLists){
        this.Stores = storeLists;
        var defaultStore =  this.dbConfig.selectDataByTableName('user','venue_id','customer_id',this.global.getCustomerId())
            .then((venue)=>{
                console.log(venue);
                if(venue[0] == null){
                    for(let i=0; i<this.Stores.length; i++){
                        if(this.Stores[i].venue_lat !== null || this.Stores[i].venue_lon !== null){
                            this.defaultStore = this.Stores[i];
                            break;
                        }
                    }
                }else {
                    for(let i=0; i<this.Stores.length; i++){
                        this.isVenueFound = false;
                        if(this.Stores[i].venue_id == venue[0].venue_id){
                            this.isVenueFound = true;
                            var index = i;
                            break;
                        }
                    }
                    if(this.isVenueFound){
                        this.defaultStore = this.Stores[index];
                    }else{
                        for(let i=0; i<this.Stores.length; i++){
                            if(this.Stores[i].venue_lat !== null && this.Stores[i].venue_lon !== null){
                                this.defaultStore = this.Stores[i];
                                break;
                            }
                        }
                    }
                }
                this.global.setVenueId(this.defaultStore.venue_id);
                return this.defaultStore;
            });

        return Promise.resolve(defaultStore);
    }

    userCurrentLocation(loc){
        if(loc){
            this.dbConfig.createLocationTable()
                .then(()=>{
                    this.dbConfig.updateDataByLabelName()
                })
        }
    }
}