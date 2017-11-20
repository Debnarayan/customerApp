import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {AppService} from "../../app.service";
import {GlobalConfig} from "../../../config/global.config";
import {AppConfig} from "../../../config/app.config";
import {DatabaseConfig} from "../../../config/database.config";

@Injectable()
export class BillMockupService {
    constructor(private appService: AppService,
                private global: GlobalConfig,
                private config: AppConfig,
                private dbConfig: DatabaseConfig) {
    }

    getAppliedGiftCardDetails(){
        return this.dbConfig.selectDataByTableName('gift',['gift_id','balance'],'customer_id',this.global.getCustomerId())
            .then(appliedGift=>{
                return appliedGift[0];
            })
    }

    getActiveUserDetails(){
        // if(this.global.getLoginState()){
            return this.dbConfig.selectDataByTableName('user',['customer_id','venue_id'],'customer_id',this.global.getCustomerId())
                .then(currentUser => {
                    return currentUser[0];
                })
        // }
    }

    getUserCurrentOrderDetails(){
        return this.dbConfig.selectRecordsByTableName('cart','*', 'customer_id', this.global.getCustomerId())
            .then(currentOrder => {
                return currentOrder;
            })
    }

}