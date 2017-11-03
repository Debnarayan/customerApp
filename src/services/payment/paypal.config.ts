import {PayPal} from "@ionic-native/paypal";
import {Injectable} from "@angular/core";

@Injectable()
export class PayPalInit{
    constructor(private payPal: PayPal){}
    async config(){
        return await this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AXYuACh8hFJA4BtaUeSllf-sbfGopVhgYRAE9L3-4SHjYUDu6Sg0pfteff0k8KVjmJ1UWMsoCJbdJr27'
        })
    }
}