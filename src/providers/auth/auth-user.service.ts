import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthUserProvider {

    public SECURE_URL: string = "http://dev.idiosys.co.uk/epos/backend/web/index.php?r=";
    // private SECURE_URL: string = "http://localhost/epos/backend/web/index.php?r=";

    constructor(public http: Http) {}

    getUserData(dataToProcess,serviceToCall) {
        let body = JSON.stringify(dataToProcess);
        console.log("Service Page Get Data= " + body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let link = this.SECURE_URL + serviceToCall;
        return this.http.post(link, body ,options)
            .map(result => result.json());
    }

    getResponse(dataToProcess,serviceToCall){
        let body = JSON.stringify(dataToProcess);
        console.log("Service Page Get Data= " + body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let link = this.SECURE_URL + serviceToCall;
        return this.http.post(link, body ,options)
            .map(result => result.json());
    }

}
