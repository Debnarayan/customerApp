import {Injectable} from '@angular/core';

@Injectable()
export class GlobalConfig {

    SECURE_URL: string;
    LOGIN_STATE:boolean;
    COMPANY_ID:number;
    VENUE_ID:number;

    constructor() {
        this.SECURE_URL = "http://localhost/epos/backend/web/index.php?r=";
        // this.SECURE_URL = "http://dev.idiosys.co.uk/epos/backend/web/index.php?r=";
        this.LOGIN_STATE = false;
        this.COMPANY_ID = null;
        this.VENUE_ID = null;
    }

    setLoginState(state:boolean){
        this.LOGIN_STATE = state;
    }

    getLoginState(){
        return this.LOGIN_STATE;
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