import {Injectable} from '@angular/core';
import {DatabaseConfig} from "./database.config";

@Injectable()
export class GlobalConfig {

    SERVER_URL: string;
    SECURE_URL: string;
    LOGIN_STATE:boolean;
    COMPANY_ID:number;
    VENUE_ID:number;
    CUSTOMER_ID:number;

    constructor(private dbConfig: DatabaseConfig) {
        // this.SERVER_URL = "http://localhost/epos/";
        // this.SERVER_URL = "http://10.0.3.2/epos/";
        // this.SERVER_URL = "http://aftaeatspos.com/";
        this.SERVER_URL = "http://dev.idiosys.co.uk/epos/";
        this.SECURE_URL = this.SERVER_URL+"backend/web/index.php?r=";
        this.LOGIN_STATE = false;
        this.COMPANY_ID = null;
        this.VENUE_ID  = 36;
        this.CUSTOMER_ID  = 1;
    }

    setLoginState(state:boolean){
        this.LOGIN_STATE = state;
    }

    getLoginState(){
        return this.LOGIN_STATE;
    }

    setCustomerId(id:number){
        this.CUSTOMER_ID = id;
        console.log(this.CUSTOMER_ID);
        // this.dbConfig.insertDataByLabelName(tableName, labelName, value);
    }

    getCustomerId(){
        return this.CUSTOMER_ID;
    }

    setCompanyId(id:number) {
        this.COMPANY_ID = id;
    }

    getCompanyId() {
        return this.COMPANY_ID;
    }

    setVenueId(id:number) {
        this.VENUE_ID = id;
    }

    getVenueId() {
        return this.VENUE_ID;
    }
}