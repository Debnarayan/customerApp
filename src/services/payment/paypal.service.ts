import {Injectable} from "@angular/core";
import {PayPal, PayPalConfiguration} from "@ionic-native/paypal";
import {PayPalInit} from "./paypal.config";
import {Http, Headers, RequestOptions} from "@angular/http";
import {GlobalConfig} from "../../config/global.config";

@Injectable()
export class PayPalPaymentService {
    txnData:any;
    constructor(private global: GlobalConfig,
                private payPal: PayPal,
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
                        console.log("Success");
                        this.savePaypalReturnOnSuccess(success)
                            .subscribe((success)=>{
                                console.log(success);

                            })
                    }else{
                        console.log("Fail");
                    }
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

    savePaypalReturnOnSuccess(data){
        this.txnData.customer_id = this.global.getCustomerId();
        this.txnData.id = data.response.id;
        this.txnData.date_time = data.response.create_time;
        this.txnData.intent = data.response.intent;
        let body = JSON.stringify(this.txnData);
        console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers});
        let link = this.global.SECURE_URL + 'secure/pay_using_paypal';
        return this.http.post(link, body ,options)
            .map(result => result.json());
    }
}