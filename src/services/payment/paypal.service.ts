import {Injectable} from "@angular/core";
import {PayPal, PayPalConfiguration} from "@ionic-native/paypal";
import {PayPalInit} from "./paypal.config";
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class PayPalPaymentService {
    txnData:any;
    constructor(private payPal: PayPal,
                private payPalInit: PayPalInit,
                private http:Http) {
        this.txnData = {};
    }


    makePayment(payment) {
        this.payPalInit.config().then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                // let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
                this.payPal.renderSinglePaymentUI(payment).then((success) => {
                    // Successfully paid
                    console.log(success);
                    if(success.response.state=='approved'){
                        this.txnData.id = success.response.id;
                        this.txnData.date_time = success.response.create_time;
                        this.txnData.intent = success.response.intent;
                        let body = JSON.stringify(this.txnData);
                        let headers = new Headers({ 'Content-Type': 'application/json' });
                        let options = new RequestOptions({ headers: headers});
                        let link = "http://dev.idiosys.co.uk/epos/backend/web/index.php?r=" + 'secure/make_payment';
                        return this.http.post(link, body ,options)
                            .map(result => result.json());
                    }

                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, (err) => {
                    // Error or render dialog closed without being successful
                    console.log(err);
                });
            }, () => {
                // Error in configuration
            });
        }, () => {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    }
}