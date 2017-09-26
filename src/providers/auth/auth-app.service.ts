import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppConfig} from "../../config/app.config";
// import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthAppProvider {

    public SECURE_URL: string = "http://dev.idiosys.co.uk/epos/backend/web/index.php?r=";
    // private SECURE_URL: string = "http://localhost/epos/backend/web/index.php?r=";

    constructor(public http: Http,
                private config: AppConfig) {}

    getAppData() {
        console.log(this.config.APP_ID);
        let body = JSON.stringify(this.config.APP_ID);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let link = this.SECURE_URL + 'secure/get_cms_page';
        return this.http.post(link, body ,options)
            .map(result => result.json());
    }

    // getCompanyId(): Observable<number | string>{
    //     return this.http.get(this.SECURE_URL+'secure/login')
    //         .map((res:Response) => res.json())
    //         //...errors if any
    //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    // }

}
