import {Injectable} from '@angular/core';
import {DatabaseConfig} from "./database.config";

@Injectable()
export class GlobalConfig {

    SERVER_URL: string;
    SECURE_URL: string;
    LOGIN_STATE: boolean;
    COMPANY_ID: number;
    VENUE_ID: number;
    CUSTOMER_ID: number;

    constructor(private dbConfig: DatabaseConfig) {
        // this.SERVER_URL = "http://localhost/epos/";
        // this.SERVER_URL = "http://10.0.3.2/epos/";
        // this.SERVER_URL = "http://aftaeatspos.com/";
        this.SERVER_URL = "http://dev.idiosys.co.uk/epos/";
        this.SECURE_URL = this.SERVER_URL + "backend/web/";
        this.LOGIN_STATE = false;
        this.COMPANY_ID = null;
        this.VENUE_ID = 36;
        this.CUSTOMER_ID = 1;
    }

    setLoginState(state: boolean) {
        this.LOGIN_STATE = state;
    }

    getLoginState() {
        return this.LOGIN_STATE;
    }

    setCustomerId(id: number) {
        this.CUSTOMER_ID = id;
        console.log(this.CUSTOMER_ID);
        this.dbConfig.createUserTable()
            .then(() => {
                this.dbConfig.insertDataByLabelName('user', 'customer_id', this.CUSTOMER_ID);
            })
    }

    getCustomerId() {
        this.dbConfig.selectDataByTableName('user', 'customer_id', '', '')
            .then((id) => {
                this.CUSTOMER_ID = id[0].customer_id;
            })
        return this.CUSTOMER_ID;
    }

    setCompanyId(id: number) {
        this.COMPANY_ID = id;
    }

    getCompanyId() {
        return this.COMPANY_ID;
    }

    setVenueId(id: number) {
        this.VENUE_ID = id;
        this.dbConfig.updateRecordByTableName('user', 'venue_id', this.VENUE_ID, 'customer_id', this.CUSTOMER_ID);
    }

    getVenueId() {
        this.dbConfig.selectDataByTableName('user', 'venue_id', '', '')
            .then((user) => {
                this.VENUE_ID = user[0].venue_id;
            })
        return this.VENUE_ID;
    }
}