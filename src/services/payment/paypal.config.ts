import {PayPal} from "@ionic-native/paypal";
import {Injectable} from "@angular/core";

@Injectable()
export class PayPalInit{
    constructor(private payPal: PayPal){}
    async config(){
        return await this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AcwVVr4GO3OtLPfo38hxICGQNG6YNpSOEzdS-KXD9Vn46IGX0xdDUB2SPK7Hrvr4T1rgEaxYx9SI268X'
        })
    }
}