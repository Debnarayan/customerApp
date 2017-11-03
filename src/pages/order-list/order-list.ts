import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Order} from "../../interfaces/product.interface";
import {GlobalConfig} from "../../config/global.config";

@IonicPage()
@Component({
    selector: 'page-order-list',
    templateUrl: 'order-list.html',
})
export class OrderListPage {
    Orders: Array<Order>;
    URL: string;
    constructor(private global: GlobalConfig,
                private navCtrl: NavController, private navParams: NavParams) {
        this.Orders = navParams.get('placedOrders');
        console.log(this.Orders);
        this.URL=this.global.SERVER_URL;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OrderListPage');
    }

    placeOrder() {
        console.log(this.Orders);
        this.calculateTotalBill(this.Orders)
            .then((bill_data) => {
                this.navCtrl.push('PaymentPage', {bill: bill_data});
            });
    }

    calculateTotalBill(orders) {
        var total_price = 0;
        var total_quantity = 0;
        for (let i = 0; i < orders.length; i++) {
            total_quantity = total_quantity + orders[i].quantity;
            total_price = total_price + (orders[i].quantity * orders[i].price);
        }
        return Promise.resolve({total_price: total_price, total_quantity: total_quantity});
    }

}
