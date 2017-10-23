import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalConfig} from "../../config/global.config";

@Injectable()
export class AuthUserProvider {

    constructor(private http: Http,
                private global: GlobalConfig) {}

    getUserData(dataToProcess,serviceToCall) {
        let body = JSON.stringify(dataToProcess);
        console.log("Service Page Get Data= " + body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let link = this.global.SECURE_URL + serviceToCall;
        return this.http.post(link, body ,options)
            .map(result => result.json());
    }

    getSupportResponse(dataToProcess,serviceToCall){
        let body = JSON.stringify(dataToProcess);
        console.log("Service Page Get Data= " + body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let link = this.global.SECURE_URL + serviceToCall;
        return this.http.post(link, body ,options)
            .map(result => result.json());
    }

}
