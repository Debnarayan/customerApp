import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalConfig} from "../../config/global.config";
import {AppService} from "../../services/app.service";
import {AppConfig} from "../../config/app.config";

@Injectable()
export class AuthUserProvider {

    constructor(private http: Http,
                private global: GlobalConfig,
                private appService: AppService,
                private config: AppConfig) {
    }

    getUserData(requestBy) {
        return this.appService.backendCallback({
            request_by: requestBy,
            app_id: this.config.APP_ID,
            // company_id: this.global.getCompanyId()
        }, 'secure/cust_login')
            .map((resolve) => {
                return resolve;
            })
    }

    registerWithUserData(registerData) {
        return this.appService.backendCallback({
            customer: registerData,
            app_id: this.config.APP_ID,
            // company_id: this.global.getCompanyId()
        }, 'secure/cust_sign_up')
            .map((resolve) => {
                return resolve;
            })
    }

    getSupportResponse(dataToProcess, serviceToCall) {
        let body = JSON.stringify(dataToProcess);
        console.log("Service Page Get Data= " + body);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let link = this.global.SECURE_URL + serviceToCall;
        return this.http.post(link, body, options)
            .map(result => result.json());
    }

}
